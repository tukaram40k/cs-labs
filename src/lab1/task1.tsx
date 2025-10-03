import React, { useState } from "react";
import { encrypt, decrypt } from "../utils/lab1.ts";

const Task1: React.FC = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const [isEncrypt, setIsEncrypt] = useState(true);
  const [key, setKey] = useState('');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleToggleMode = () => {
    setIsEncrypt(!isEncrypt);
    setOutputText('');
  };

  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numValue = parseInt(value);

    if (value === '' || (numValue >= 0 && numValue <= 25)) {
      setKey(value);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleProcess = () => {
    if (!key || !inputText) {
      setOutputText('');
      return;
    }

    try {
      const result = isEncrypt
        ? encrypt(key, inputText, chars)
        : decrypt(key, inputText, chars);
      setOutputText(result);
    } catch (error) {
      setOutputText('Error processing text');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Task 1.1
        </h1>

        <div className="space-y-6">
          {/* Mode Toggle */}
          <div className="flex items-center justify-center gap-4">
        <span className={`text-lg font-medium ${!isEncrypt ? 'text-gray-900' : 'text-gray-500'}`}>
          Decrypt
        </span>
            <button
              onClick={handleToggleMode}
              className="relative w-16 h-8 bg-cyan-500 rounded-full transition-colors hover:bg-cyan-600"
            >
              <div className={`absolute top-1 ${isEncrypt ? 'right-1' : 'left-1'} w-6 h-6 bg-white rounded-full transition-transform`} />
            </button>
            <span className={`text-lg font-medium ${isEncrypt ? 'text-gray-900' : 'text-gray-500'}`}>
          Encrypt
        </span>
          </div>

          {/* Key Input */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Key (0-25)
            </label>
            <input
              type="number"
              min="0"
              max="25"
              value={key}
              onChange={handleKeyChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter shift value"
            />
          </div>

          {/* Input Text */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              {isEncrypt ? 'Plain Text' : 'Cipher Text'}
            </label>
            <textarea
              value={inputText}
              onChange={handleInputChange}
              className="w-full h-32 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
              placeholder={isEncrypt ? 'Enter text to encrypt...' : 'Enter text to decrypt...'}
            />
          </div>

          {/* Process Button */}
          <button
            onClick={handleProcess}
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-md"
          >
            {isEncrypt ? 'Encrypt' : 'Decrypt'}
          </button>

          {/* Output Window */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              {isEncrypt ? 'Cipher Text' : 'Plain Text'}
            </label>
            <div className="w-full h-32 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 overflow-y-auto">
              {outputText || <span className="text-gray-400">Output will appear here...</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task1;
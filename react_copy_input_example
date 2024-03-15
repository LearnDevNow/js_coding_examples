import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [copiedText, setCopiedText] = useState('');

  const handleCopyButtonClick = () => {
    setCopiedText(inputText);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Copied text will appear here"
        value={copiedText}
        readOnly
      />
      <button onClick={handleCopyButtonClick}>Copy Text</button>
    </div>
  );
}

export default App;

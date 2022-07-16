import React from 'react';
import './App.css';
import QRCode from 'react-qr-code'

function App() {
  const [inputValue, setValue] = React.useState('')
  return (
    // https://www.google.com/

    <div className="container mx-auto w-2/4">
      <h1 className="py-4">QR code content</h1>
      <input 
      onChange={e => setValue(e.target.value)}
        type="text" 
        placeholder='Enter link to create QR'
        className="border border-gray-300 w-full h-8 p-4 font-light text-sm" />


      <QRCode
        className='mx-auto mt-20'
        value={inputValue}
      />
    </div>

    
  );
}

export default App;

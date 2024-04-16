import React, { createContext, useState } from 'react';
import B from './B';
export const MyContext = createContext();

const A = () => {
  const [message, setMessage] = useState('');

  const showMessage = (text) => {
    setMessage(text);
  };

  return (
    <MyContext.Provider value={{ showMessage }}>
      <div>
        <h1>Component A</h1>
        <B />
        <p>Message from A: {message}</p>
      </div>
    </MyContext.Provider>
  );
};

export default A;

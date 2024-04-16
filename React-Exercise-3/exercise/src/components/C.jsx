import React, { useContext } from 'react';
import D from './D';
import { MyContext } from './A';

const C = () => {
  const { showMessage } = useContext(MyContext);

  const handleClick = () => {
    showMessage('Hello from C!');
  };

  return (
    <div>
      <h3>Component C</h3>
      <button onClick={handleClick}>Show Message from A</button>
      <D />
    </div>
  );
};

export default C;

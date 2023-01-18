import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState(null);

  const handleClick = (e) => {
    const value = e.target.getAttribute('data-value');
    if (value === 'C') {
      setInputValue('');
      setResult(0);
      setOperation(null);
    } else if (value === '=') {
      if (operation === '+') {
        setResult(+(inputValue) + + (result));
        setInputValue('');
      } else if (operation === '-') {
        setResult(+(inputValue) - + (result));
        setInputValue('');
      } else if (operation === '*') {
        setResult(+(inputValue) * + (result));
        setInputValue('');
      } else if (operation === '/') {
        setResult(+(inputValue) / + (result));
        setInputValue('');
      }
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      if (operation === null) {
        setResult(+(inputValue));
        setInputValue('');
      }
      setOperation(value);
    } else {
      setInputValue(inputValue + value);
    }
  }
  const handleInputChange = (e) => {
    const input = e.target.value;
    const lastChar = input[input.length - 1]
    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
      if (!result) return;
      setResult(parseFloat(input.slice(0, -1)));
      handleClick({ target: { getAttribute: () => lastChar } });
    } else {
      setInputValue(input);
    }
  }
  return (
    <>
      <h1>My Calculator</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <br />
      <button data-value="1" onClick={handleClick}>1</button>
      <button data-value="2" onClick={handleClick}>2</button>
      <button data-value="3" onClick={handleClick}>3</button>
      <button data-value="+" onClick={handleClick}>+</button>
      <br />
      <button data-value="4" onClick={handleClick}>4</button>
      <button data-value="5" onClick={handleClick}>5</button>
      <button data-value="6" onClick={handleClick}>6</button>
      <button data-value="-" onClick={handleClick}>-</button>
      <br />
      <button data-value="7" onClick={handleClick}>7</button>
      <button data-value="8" onClick={handleClick}>8</button>
      <button data-value="9" onClick={handleClick}>9</button>
      <button data-value="*" onClick={handleClick}>*</button>
      <br />
      <button data-value="C" onClick={handleClick}>C</button>
      <button data-value="0" onClick={handleClick}>0</button>
      <button data-value="=" onClick={handleClick}>=</button>
      <button data-value="/" onClick={handleClick}>/</button>
      <br />
      <p>{result}</p>


    </>
  );
}
export default App;

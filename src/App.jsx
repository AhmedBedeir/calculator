import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [output, setOutput] = useState('....');
  const [expr, setExpr] = useState('');
  const [isDecimal, setIsDecimal] = useState(false);
  const [isOperator, setIsOperator] = useState(false);
  
  function handelClick(val) {
    if (val === '.') {
      if (isDecimal) return;
      setIsDecimal(true);
    }

    const newDisplay = display === '0' ? val : display + val;
    setDisplay(newDisplay);

    const newExpr = expr === '0' ? val : expr + val;
    setExpr(newExpr);

    setIsDecimal(val === '.');
  }
  function clear() {
    setDisplay('0');
    setOutput('....');
    setExpr('');
  }
  function calculate() {
    const ans = eval(expr);
    setOutput(ans);
    setExpr(ans);
    setDisplay(ans);
  }

  return (
    <div className="App">
      <div className="header">
        <p id="display">{display}</p>
        <p id="output">{output}</p>
      </div>
      <div className="calculator">
        <button className="item1" id="clear" onClick={clear}>
          AC
        </button>
        <button id="divide" value="/" onClick={() => handelClick('/')}>
          /
        </button>
        <button id="multiply" value="*" onClick={() => handelClick('*')}>
          *
        </button>
        <button id="seven" value="7" onClick={() => handelClick('7')}>
          7
        </button>
        <button id="eight" value="8" onClick={() => handelClick('8')}>
          8
        </button>
        <button id="nine" value="9" onClick={() => handelClick('9')}>
          9
        </button>
        <button id="subtract" value="-" onClick={() => handelClick('-')}>
          -
        </button>
        <button id="four" value="4" onClick={() => handelClick('4')}>
          4
        </button>
        <button id="five" value="5" onClick={() => handelClick('5')}>
          5
        </button>
        <button id="six" value="6" onClick={() => handelClick('6')}>
          6
        </button>
        <button id="add" value="+" onClick={() => handelClick('+')}>
          +
        </button>
        <button id="one" value="1" onClick={() => handelClick('1')}>
          1
        </button>
        <button id="two" value="2" onClick={() => handelClick('2')}>
          2
        </button>
        <button id="three" value="3" onClick={() => handelClick('3')}>
          3
        </button>
        <button id="equals" value="=" onClick={calculate}>
          =
        </button>
        <button
          className="item0"
          id="zero"
          value="0"
          onClick={() => handelClick('0')}
        >
          0
        </button>
        <button id="decimal" value="." onClick={() => handelClick('.')}>
          .
        </button>
      </div>
    </div>
  );
}

export default App;

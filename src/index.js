import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const App = (props) => {

  const [count, setCount] = useState(props.count);

  const increment = () => {
    setCount(count+1)
  }
  const decrement = () => {
    setCount(count-1)
  }
  return (
      <div>
        <div>My new content is {count}</div>
        <button onClick={decrement}>-1</button>
        <button onClick={() => setCount(props.count) }>Reset</button>
        <button onClick={increment}>+1</button>
      </div>
  )
}
App.defaultProps = {
  count: 0
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

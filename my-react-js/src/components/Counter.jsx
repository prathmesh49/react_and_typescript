import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setCount(count => count + 1)}>
        first count is {count}
      </button>
      <button onClick={() => setCount(count => count + 1)}>
        second count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default Counter;

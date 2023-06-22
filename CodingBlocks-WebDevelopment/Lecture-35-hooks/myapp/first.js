import {React, useState} from 'react'
// This useState is called a hook.


const App = function App() {
  // Without state, using this alone, updated cnt won't get rendered on the webpage.
  // let cnt = 1;
  // const updateCount = () => {
  //   cnt++;
  //   console.log(cnt);
  // }

  // useState assigns initial value of 1 to cnt.
  // We can't update directly the cnt now.
  // Now React will maintain a map of variables that can change, and will re-render it.
  // And setCnt will be used to update cnt, as shown below.
  const [cnt, setCnt] = useState(1);
  // And const, because they are immutable. 
  // That is, cnt = cnt + 1 can't be done.
  // Instead, we do setCnt(cnt + 1);

  const updateCount = () => {
    setCnt(cnt+1); // Will basically do cnt = cnt + 1.
    console.log(cnt);
  }

  return (
    <div>
      <h1>This is my app</h1>
      Counter: {cnt}
      {/* Although this function will be called, however, this won't be re-rendered */}
      {/* Thus, we'll need to tell React that this variable can change, and could be required to re-rendered */}
      {/* For this, we need to use hooks, and in this case, we'll use useState */}
      <button onClick={updateCount}>Update Count</button>
    </div>
  )
}

export default App

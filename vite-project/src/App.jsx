import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contactus from "./components/myModule/Contactus";
import Myforms from "./components/Myforms";
import List from "./components/List";

function App() {
  const [count, setCount] = useState(0);
  const [name,setName] = useState('nil');

  const handleincrement = (count) => {
    setCount((count) => count + 1);
  };
  const handledecrement = (count) => {
    setCount((count) => count - 1);
  };

  useEffect(()=>{
    console.log('object');  
  },[count])
  return (
    <>
      <h1>hello world</h1>
      {count}
      <button
       onClick={()=>{handleincrement(count)}}>increment</button>
      <button onClick={()=>{handledecrement(count)}}>decrement</button>
       <About name={name}/>
        {count>5 && <Contactus/> }
      <List/>  
      <Myforms/>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import Header from "./components/Header";

function App() {

  const [value, setValue] = useState({
    name:'sunny',
    roll:94394
  })



  return (
    <>
      <div>
        {value.name}
        {value.roll}        
        {value?.profession}
        <input type="text" name="name" id="name"/>
      </div>
    </>
  )
}

export default App

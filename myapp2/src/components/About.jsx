import { useState } from "react"

function About() {

    const [title, setTitle] = useState("Hii")
    const [color, setCoolor] = useState(true)

    function handleClick(){
       if(title === "Hii"){
        setTitle("Hello")
       }else{
        setTitle("Hii")
       }
    }
    
    function handleColor(){
        setCoolor(color ? false : true)
    }

  return (
    <div>
      <h1>About</h1>
      <h1>{title}</h1>
      <button className="btn btn-primary" onClick={handleClick}>Click</button>
      <button onClick={handleColor}>Change Color</button>
      <div className="box" style={color ? {backgroundColor : "blue"} : {backgroundColor : "red"}}></div>
    </div>
  )
}

export default About

import React, { useState } from 'react'
import Button from './Buttons'
import "../Style/DisplayScreen.css"

export default function DisplayScreen() {
    let[inputvalue,setInput]=useState("")
    let[result,setResult]=useState(0)

    function input(value){
        setInput((prev)=>prev+value)
    }
    const deleteInput=()=>{
        setInput(inputvalue.slice(0,-1))
    }
    const clear=()=>{
        setInput(" ")
    }
    const equal=()=>{
        try{
            setResult(eval(inputvalue)) 
        } catch(error){
            setResult("error")
        }
    }


  return (
    <div className='parent'>
        <h1 id='title' >CALCULATOR APP🧮</h1>
        <div id='parent-container'>
            <input className='input' id='number' type="text" placeholder='0' value={inputvalue} readOnly />
            <input className='input' id='input' type="text" placeholder='0' value={result} readOnly />

        </div>
        <div className='btn'>
            <Button value={"+"} input={input}/>
            <Button value={"-"} input={input}/>
            <Button value={"*"} input={input}/>
            <Button value={"/"} input={input}/>

            <Button value={"1"}  input={input} />
            <Button value={"2"}  input={input}/>
            <Button value={"3"}  input={input}/>
            <Button value={"4"}  input={input}/>
          

            <Button value={"5"} input={input}/>
            <Button value={"6"} input={input}/>
            <Button value={"7"} input={input}/>
            <Button value={"8"} input={input}/>

            <Button value={"9"}input={input}/>
            <Button value={"0"} input={input}/>
            <Button value={"."}input={input}/>
            <Button value={"%"} input={input}/>

            <Button value={"DEL"} input={deleteInput}/>
            <Button value={"AC"}  input={clear}/>
            <Button value={"="}  input={equal}/> 
            <Button value={""}  input={input}/> 
             
        </div>

    </div>
  )
}

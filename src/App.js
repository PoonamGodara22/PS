
import './App.css';
import { useState } from 'react';

function App() {
  const[patenttype,setpatenttype] =useState("");
  const[Isinternational,setIsinternational]=useState(false);
  const option=[
    {value:"",label:"select"},
    {value:"Granted",label:'Granted'},
    {value:"Published",label:'Published'}
  ];
  const handlechange=(event)=>{
    setpatenttype(event.target.value)
  }
  const handlecheckbox=(event)=>{
    setIsinternational(event.target.checked)
  }
  const handlesubmit=(event)=>{event.preventDefault()}
  let marks=0;
  if (patenttype==="Granted"){
    marks=10;
  }
  else if(patenttype==="Published"){
    marks=20;
  }
  if (Isinternational){
    marks+=5;
  }
  console.log("total marks:",marks)
  return (
    <div className="App">
      <h1>calculate the marks</h1>
      <form onSubmit={handlesubmit}>
      </form>
    <div className='drop'>
      <label htmlFor='dropdown'>choose your patent type</label>
      <select
      id='dropdown'
      value={patenttype}
      onChange={handlechange}
      className='drs'
      >{option.map((type)=>(<option key={type.value}
        value={type.value}>{type.label}
        </option>))}
        </select>
      </div>
      <div className='check'>
        <label>
          <input
          type="checkbox"
          checked={Isinternational}
          onChange={handlecheckbox}
          className='chcinp'/>
          Is international ?..
        </label>
      </div>
      <div className='output'>
        <h2>OUTPUT:</h2>
        <p>patent type:  {patenttype||"none selected"}
        </p>
        <p>Is international ?..  {Isinternational?"intenational":"not international"}
        </p>  
        <p>your marks {marks}</p>
      </div>
      </div>
  );
}

export default App;

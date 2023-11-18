import React,{useState} from 'react';
const A=()=>{
    const[data,setdata]=useState(false)
    const handleShow=()=>{
         setdata(!data)
    }
    return (
        <>
        <p>{data?'Hi!, How are you!!':''}</p>
        <button onClick={handleShow}>{data?'Hide Component':'Show Component'}</button>
        </>
    )
}
export default A;
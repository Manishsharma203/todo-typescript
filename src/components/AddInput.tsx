import React, { useState ,useContext }  from 'react'
import {allDataContext} from '../contexts/DataProvider'


export default function AddInput() {
    const incomingData= useContext(allDataContext)
    const [inputValue,setInputValue]= useState('')

    const changehandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let value = e.target.value
        setInputValue(value)
    }

    const clickHandler=()=>{
        let add= incomingData.addListFunc
        add(inputValue)
    }
    return (
        <div>
            <div className='d-flex my-5 justify-content-center'>
                <input type='text' onChange={changehandler} value={inputValue} placeholder='+ Enter the new Task...' />
                <button className='btn btn-success' onClick={clickHandler}>Add</button> 
            </div>
        </div>
    )
}

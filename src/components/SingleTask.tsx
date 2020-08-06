import React, {useContext, useState} from 'react'
import {allDataContext} from '../contexts/DataProvider'

interface singleData{
    text: string,
    status: boolean,
    id:number
    
}
interface singleDataTask{
    task:singleData
}
export default function SingleTask(props:singleDataTask) {
    const [editFlag,setEditFlag]=useState(false)

    const incomingData= useContext(allDataContext)
    const {task}=props
    const [editValue,setEditValue] =useState(task.text)

    const deleteHandler=(input:string)=>{
        let del=incomingData.deleteListFunc
        del(input)
    }

    const checkHandler=(inputObj:singleData)=>{
        incomingData.toggleTaskFunc(inputObj)
    }

    const editFieldGenerator=()=>{
        setEditFlag(!editFlag)
    }

    const changehandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let value = e.target.value
        setEditValue(value)
    }

    const editHandler=(inputValue:string,inputID:number)=>{
        incomingData.editTaskFunc(inputValue,inputID)
    }
    return (
        <div>
            <div className='d-flex justify-content-center'>
                    <input className='my-auto mx-1' type='checkbox' checked={task.status} onChange={()=>checkHandler(task)}/>
                    { !task.status?
                    <>
                    <p className='my-auto col-6 border text-left'>{task.text}</p>
                    <button className='btn btn-primary badge badge-pill badge-primary' onClick={editFieldGenerator}>Edit</button>
                    </>:
                    <>
                    <p className='my-auto col-7 border text-left'><s>{task.text}</s></p>
                    </>
                    }
                    <button className='btn btn-primary badge badge-pill badge-primary' onClick={()=>deleteHandler(task.text)}>Delete</button>
            </div>
            {editFlag && 
            <><input type='text' onChange={changehandler} value={editValue}/>
            <span><button className='btn btn-success badge badge-success py-auto' onClick={()=>editHandler(editValue,task.id)}>Update</button> </span>
            </>
            }
        </div>
    )
}

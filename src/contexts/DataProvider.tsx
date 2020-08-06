import React, { createContext, useState } from 'react'

interface singleData{
    text: string,
    status: boolean,
    id:number
}
interface IContext {
    state: singleData[],
    addListFunc: (input:string)=>void,
    deleteListFunc: (input:string)=>void,
    toggleTaskFunc: (input:singleData)=>void,
    editTaskFunc: (input1:string,input2:number)=>void
}
export const allDataContext = createContext<IContext>({
    state: [],
    addListFunc:()=>{},
    deleteListFunc:()=>{},
    toggleTaskFunc: ()=>{},
    editTaskFunc: ()=>{}
})

const { Provider } = allDataContext;

const DataProvider:React.FC<{ children: React.ReactNode }> =(props)=>{
    const [data, setData] = useState([
        { text: 'Task1', status: false,id:1 },
        { text: 'Task2', status: true,id:2 }
    ])

    const addList=(input:string)=>{
        setData((prevState):singleData[] =>{
            return [...prevState,{text:input,status:false,id:Math.random()*1000}]
        })
    }
    const deleteList=(input:string)=>{
        setData((prevState):singleData[] =>{
            return prevState.filter(e=>e.text!==input)
        })
    }

    const toggleTask=(inputObj:singleData)=>{
        data.forEach(e=>e.text===inputObj.text?e.status=!e.status:e)
        setData([...data])
    }

    const editTask=(inputValue:string,inputID:number)=>{
        for(let i=0;i<data.length;i++){
            if(data[i].text===inputValue){
                alert('Task is already mentioned')
                return
            }
            else{
                data.forEach(e=>e.id===inputID? e.text=inputValue:e)
                setData([...data])
                return
            }
        }
    }

    return (
        <Provider value={{state: data, addListFunc:addList, deleteListFunc:deleteList, toggleTaskFunc:toggleTask, editTaskFunc:editTask }}>
            {props.children}
        </Provider>
    )
}

export default DataProvider

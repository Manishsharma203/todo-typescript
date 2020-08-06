import React, { useContext } from 'react'
import {allDataContext} from '../contexts/DataProvider'
import SingleTask from './SingleTask'

const TasksTodo:React.FC=()=>{
    const incomingData= useContext(allDataContext)
    return (
        <div>
            <h2>Tasks to do</h2>
            <div>
                {incomingData && incomingData.state
                .filter(e=>e.status===false)
                .map(e=>
                    <SingleTask key={e.id} task={e}/>
                )}
            </div>
        </div>
    )
}

export default TasksTodo

import React, { useContext }  from 'react'
import {allDataContext} from '../contexts/DataProvider'
import SingleTask from './SingleTask'

export default function TasksCompleted() {
    const incomingData= useContext(allDataContext)
    return (
        <div>
            <h2>Tasks Completed</h2>
            <div>
                {incomingData && incomingData.state
                .filter(e=>e.status===true)
                .map(e=>
                    <SingleTask key={e.id} task={e}/>
                )}
            </div>
        </div>
    )
}

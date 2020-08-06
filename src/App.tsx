import React from 'react';
import './App.css';
import TasksTodo from './components/TasksTodo';
import DataProvider from './contexts/DataProvider';
import TasksCompleted from './components/TasksCompleted';
import AddInput from './components/AddInput';


function App() {
  return (
    <DataProvider>
    <div className="App">
      <AddInput/>
      <TasksTodo/>
      <TasksCompleted/>
    </div>
    </DataProvider>
  );
}

export default App;

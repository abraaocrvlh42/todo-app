import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <TaskProvider>
      <GlobalStyle />
      <div>
        <h1>ToDo List</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;


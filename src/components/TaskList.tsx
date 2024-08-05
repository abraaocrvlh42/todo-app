import React from 'react';
import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const TaskList: React.FC = () => {
  const { tasks } = useTasks();

  return (
    <List>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </List>
  );
};

export default TaskList;


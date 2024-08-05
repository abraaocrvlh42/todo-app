import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';
import { TaskProvider } from '../context/TaskContext';

test('renders TaskList with tasks', () => {
  render(
    <TaskProvider>
      <TaskList />
    </TaskProvider>
  );

  expect(screen.getByText(/nenhuma tarefa encontrada/i)).toBeInTheDocument();
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';
import { TaskProvider } from '../context/TaskContext';

test('renders TaskForm and adds a task', () => {
  render(
    <TaskProvider>
      <TaskForm />
    </TaskProvider>
  );

  const titleInput = screen.getByPlaceholderText(/título/i);
  const descriptionInput = screen.getByPlaceholderText(/descrição/i);
  const addButton = screen.getByText(/adicionar tarefa/i);

  fireEvent.change(titleInput, { target: { value: 'Nova Tarefa' } });
  fireEvent.change(descriptionInput, { target: { value: 'Descrição da nova tarefa' } });

  fireEvent.click(addButton);

  expect(titleInput).toHaveValue('');
  expect(descriptionInput).toHaveValue('');
});

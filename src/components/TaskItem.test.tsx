import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from './TaskItem';
import { TaskProvider, Task } from '../context/TaskContext';

describe('TaskItem', () => {
  const task: Task = {
    id: 1,
    title: 'Tarefa de Teste',
    description: 'Descrição da tarefa de teste',
    completed: false
  };

  test('should render TaskItem and toggle completion', () => {
    render(
      <TaskProvider>
        <TaskItem task={task} />
      </TaskProvider>
    );

    const taskTitle = screen.getByText(/tarefa de teste/i);
    const taskDescription = screen.getByText(/descrição da tarefa de teste/i);
    const toggleButton = screen.getByRole('button', { name: /concluir/i });

    expect(taskTitle).toBeInTheDocument();
    expect(taskDescription).toBeInTheDocument();
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);

    expect(toggleButton).toHaveTextContent(/desmarcar/i);
  });
});

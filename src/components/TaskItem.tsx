import React, { useState } from 'react';
import { Task } from '../context/TaskContext';
import styled from 'styled-components';
import { useTasks } from '../context/TaskContext';

const ListItem = styled.li<{ completed: boolean }>`
  padding: 10px;
  margin: 5px 0;
  background-color: ${props => (props.completed ? '#d4edda' : '#f8d7da')};
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 4px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Button = styled.button`
  margin: 5px 0;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (min-width: 600px) {
    margin-left: 5px;
    margin: 0 0 0 5px;
  }
`;

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const { updateTask, deleteTask, toggleTaskCompletion } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSave = () => {
    updateTask(task.id, { ...task, title, description });
    setIsEditing(false);
  };

  return (
    <ListItem completed={task.completed}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button onClick={handleSave}>Salvar</Button>
        </>
      ) : (
        <>
          <div>
            <strong>{task.title}</strong>
            <p>{task.description}</p>
          </div>
          <div>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <Button onClick={() => deleteTask(task.id)}>Excluir</Button>
            <Button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? 'Desmarcar' : 'Concluir'}
            </Button>
          </div>
        </>
      )}
    </ListItem>
  );
};

export default TaskItem;

import React, { useState } from 'react';
import './Cardscomponent.css';
import Modal from 'react-modal';

const Cardscomponent = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: '',
      description: '',
      status: '',
    },
    {
      id: 2,
      name: '',
      description: '',
      status: '',
    },
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAddTask = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const handleAddTaskModal = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      name: '',
      description: '',
      status: '',
    };
    setTasks([...tasks, newTask]);
    setModalIsOpen(false);
  };

  const handleChangeTask = (taskId, field, value) => {
    setTasks(
      tasks.map((task) => (task.id === taskId ? { ...task, [field]: value } : task))
    );
  };

  const handleRemoveTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <button className="add-task-button" onClick={handleAddTask}>
        Add Task
      </button>
      <div className="card-container">
        {tasks.map((task) => (
          <div key={task.id} className="card">
            <div className="card-body">
              <input
                type="text"
                placeholder="Card Name"
                value={task.name}
                onChange={(e) => handleChangeTask(task.id, 'name', e.target.value)}
                className="card-name-input"
              />
              <input
                type="text"
                placeholder="Description"
                value={task.description}
                onChange={(e) => handleChangeTask(task.id, 'description', e.target.value)}
                className="card-description-input"
              />
              <select
                value={task.status}
                onChange={(e) => handleChangeTask(task.id, 'status', e.target.value)}
                className="card-status-select"
              >
                <option value="">Select status</option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
              <button className="btn btn-primary card-ok-button">OK</button>
              <button className="btn btn-secondary" onClick={() => handleRemoveTask(task.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={handleModalClose}>
        <form onSubmit={handleAddTaskModal}>
          <input
            type="text"
            placeholder="Task Name"
            className="card-name-input"
          />
          <textarea
            placeholder="Description"
            className="card-description-input"
          />
          <select className="card-status-select">
            <option value="">Select status</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <button type="submit" className="btn btn-primary card-ok-button">
            OK
          </button>
          <button className="btn btn-secondary" onClick={handleModalClose}>
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Cardscomponent;

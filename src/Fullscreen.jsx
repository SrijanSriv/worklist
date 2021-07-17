import React from 'react';
import TodoTasks from './TodoTasks';
import Navbar from './Navbar';

const Fullscreen = () => {
  
    return (
    <React.Fragment>
    <Navbar />
    <div className="Fullscreen">
      <TodoTasks />
    </div>
    </React.Fragment>
    );
};

export default Fullscreen;
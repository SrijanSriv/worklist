import React from 'react';
import Navbar from './Navbar';

const Instructions = () => {

    const Source = () => {
        window.open ("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank");
    };

    return(
        <React.Fragment>
        <Navbar/>
        <div>
        <h1>Thank you for using this Simple but Sublime TodoList! Following are the Interactions.</h1>
        <p>Add a task using the input field.</p>
        <p>Double click on the task to delete it.</p>
        <h2>Want to contribute or enhance? Check out the<button className="SourceCode" onClick={Source} >sourcecode</button>.
        </h2>   
        </div>   
        </React.Fragment>
    );
};

export default Instructions;
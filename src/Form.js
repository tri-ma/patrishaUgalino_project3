import firebase from './firebase.js';
import { useState } from 'react';

const Form = () => {
    const [ taskName, setTask ] = useState('');
    const handleOnChange = (e) => {
        setTask(e.target.value);
    }

    const addTask = () => {
        const taskRef = firebase.database().ref('Task');
        const task = {
            taskName,
            complete: false,
        };
        taskRef.push(task);
        setTask('');
    }

    return (
        <div className='form'>
            <form>
                <label htmlFor="">Task Name</label>
                <input type="text" placeholder="Task Name" value={taskName} onChange={handleOnChange} />

                <label htmlFor="">Due Date</label>
                <input type="date" />

                <button className="addTask" type="submit" value="Submit" onClick={ addTask }>+</button>
            </form>

            {/* <div className='taskList'>
                <button onClick={addTask}>+</button>
                {
                    taskName === ''
                        ? <button className="addTask" type="submit" value="Submit" onClick={addTask}>+</button>
                        : <button>-</button>

                }
            </div>  */}
        </div>
    );
}

export default Form;
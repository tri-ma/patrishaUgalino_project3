import database from './firebase.js';
import { useState, useEffect } from 'react';
import Tasklist from './Tasklist.js';

function Form() {
    const [tasks, setTask] = useState([]);
    const [input, setInput] = useState('');
    console.log('T//', input);

    const addTask = (e) => {
        console.log('Hi there!')
        // e.preventDefault(); stops the refresh when we hit the button
        e.preventDefault(); 
        setTask([...tasks, input]);
        setInput('')
    }

    const handleOnChange = (e) => {
        
        setTask(e.target.value);
        console.log("It also worked!")
    }

    useEffect(() => {
        database.collection('tasks').onSnapshot(snapshot => {
            console.log()
            setTask(snapshot.docs.map(doc => doc.data().task))
        })
    }, []);
    // 1:52:24

    return (
        <div>
            <form>
                <label htmlFor="task name">Task Name</label>
                <input type="text" placeholder="Task Name" disabled={!input} value={input} onChange={ handleOnChange } />

                <label htmlFor="">Due Date</label>
                <input type="date" value={input} onChange={ handleOnChange } />

                <button className="addTask" type="submit" value="Submit" onClick={ addTask }>+</button>
            </form>

            <ul>
                {tasks.map(task => (
                    < Tasklist text={task} />
                ))}
            </ul>
        </div>
    );
}

export default Form;
import { useState, useEffect } from "react";
import firebase from './firebase';


const TaskList = () => {
    const [taskList, setTaskList ] = useState();
    useEffect(() => {
        const tlRef = firebase.database().ref('Task');
        tlRef.on('value', (upcoming) => {
            const task = upcoming.val();
            const taskList = []
            for (let id in task) {
                taskList.push({ task });
            }
            setTaskList(taskList);
        })
    }, [])

    return (
        <section>
            <h2>Upcoming:</h2>
            <ul>
                {taskList
                    ? taskList.map((task) =>
                    <li>${ task }</li>
                )
                : ''}
            </ul>
        </section>
    )
}

export default TaskList;
import { useState, useEffect } from 'react'
import { deleteTask, getAllStatus, getAllTasks, updateStatus } from '../services/api'
import styles from './TaskLog.module.css'

export default function TaskLog() {
    const [loading, setLoading] = useState(true);
    const [render, setRender] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [status, setStatus] = useState([]);

    useEffect(() => {
        getAllTasks()
            .then(setTasks)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);
    console.log("tasks : ", tasks);

    // useEffect(() => {
    //     getAllStatus()
    //         .then(setStatus)
    //         .catch(console.error)
    //         .finally(() => setLoading(false));
    // }, []);
    // console.log("status : ", status);

    function toggleTask(id){
        console.log("id : ", id)
        tasks.forEach(t => {
            if(t.id == id){
                if (!t.done){
                    updateStatus(id, true);
                    t.done = true;
                }
                else{
                    updateStatus(id, false);
                    t.done = false;
                }
            }
        });
        setRender(prev => !prev);
    }

    function toggleDeleteTask(id){
        setTasks(task =>
            task.filter(task => task.id !== id)
        );

        deleteTask(id);
    }
    

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className={styles.card}>
                <h3>Task</h3>
                <ul>
                    {tasks.map(t => (
                        <li key={t.id}>
                            <input
                                type="checkbox"
                                checked={t.done}
                                onChange={() => toggleTask(t.id)}
                            />
                            <label>{t.title}</label>
                            <p>{t.deadline
                            ? new Date(t.deadline).toLocaleDateString('fr-FR', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            }): ''}</p>
                            <button onClick={() => toggleDeleteTask(t.id)}>DELETE</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
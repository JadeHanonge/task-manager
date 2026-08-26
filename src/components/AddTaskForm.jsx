import { useState, useEffect } from 'react'
import styles from './AddTask.module.css'
import { addTask } from '../services/api';


export default function AddTaskForm() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [render, setRender] = useState(false);

    // useEffect(() => {
    //     getAllTasks()
    //         .then(setTasks)
    //         .catch(console.error)
    //         .finally(() => setLoading(false));
    // }, []);

    function addTaskbdd(formData){
        const title = formData.get("title");
        addTask(title);
        setRender(prev => !prev);
    }


    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return(
        <form className={styles.form} action={addTaskbdd}>
            <label className={styles.label}>
                Title :
                <input className={styles.input} name='title'/>
            </label>
            <button className={styles.submit} type="submit">ADD</button>
        </form>
    )

}
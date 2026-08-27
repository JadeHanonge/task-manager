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
        const deadline = formData.get("deadline");
        console.log("deadline : ", deadline);
        const final = null;
        if (deadline != ""){
            final = deadline + " 00:00:00";
        }
        console.log("final : ", final);
        addTask(title, final);
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
            <label className={styles.label}>
                Deadline :
                <input className={styles.input} name='deadline' type='date'/>
            </label>
            <button className={styles.submit} type="submit">ADD</button>
        </form>
    )

}
import { useEffect, useState } from "react"
import { getTaskRequest } from "../api/tasks.api"
import { TaskCard } from "../components/TaskCard"

export const TaskPage = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        async function loadTask() {
            const response = await getTaskRequest()
            setTasks(response.data);
        }
        loadTask()

    }, [])
    function renderMain() {

        if (tasks.length === 0) return <h1>No tasks yet</h1>

        return tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
        ))
    }
    return (
        <div>
            <h1>Lista de tareas</h1>
            {renderMain()}
        </div>
    )
}

import TaskList from '@/components/TaskList/TaskList'
import { getTasks } from '@/app/library/data'

export default async function TasksPage() {
    const todos = await getTasks()

    return (
        <main style={{ maxWidth: 700, margin: '40px auto', padding: '0 20px' }}>
            <TaskList todos={todos} />
        </main>
    )
}
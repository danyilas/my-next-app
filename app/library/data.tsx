import { cache } from 'react'
import { cacheLife, cacheTag } from 'next/cache'

export type Todo = {
    userId: number
    id: number
    title: string
    completed: boolean
}

export async function getTasks(): Promise<Todo[]> {
    'use cache'
    cacheLife('hours')
    cacheTag('tasks')

    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    return res.json()
}

export const getPost = cache(async (id: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (!res.ok) throw new Error('Failed to fetch post')
    return res.json()
})
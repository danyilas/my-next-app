import { cache } from 'react'

export type Post = {
    userId: number
    id: number
    title: string
    body: string
}

export const getPost = cache(async (id: string): Promise<Post> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (!res.ok) throw new Error('Failed to fetch post')
    return res.json()
})
import { getPost } from '@/app/library/data'
import type { Metadata } from 'next'

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const post = await getPost(id)

    return {
        title: post.title,
        description: post.body,
    }
}

export default async function PostPage({ params }: Props) {
    const { id } = await params
    const post = await getPost(id)

    return (
        <main style={{ maxWidth: 700, margin: '40px auto', padding: '0 20px' }}>
            <h1>{post.title}</h1>
            <p><strong>ID:</strong> {post.id}</p>
            <p><strong>User ID:</strong> {post.userId}</p>
            <p>{post.body}</p>
        </main>
    )
}
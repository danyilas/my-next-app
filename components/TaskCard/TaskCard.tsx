'use client'

import { useState } from 'react'

type Todo = {
    userId: number
    id: number
    title: string
    completed: boolean
}

type Props = {
    todo: Todo
}

export default function TaskCard({ todo }: Props) {
    const [isCompleted, setIsCompleted] = useState(todo.completed)

    return (
        <div
            onClick={() => setIsCompleted(!isCompleted)}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                marginBottom: 12,
                borderRadius: 12,
                border: '1px solid #e5e7eb',
                backgroundColor: isCompleted ? '#f0fdf4' : '#ffffff',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    border: isCompleted ? 'none' : '2px solid #9ca3af',
                    backgroundColor: isCompleted ? '#22c55e' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                }}>
                    {isCompleted && (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7L5.5 10.5L12 3.5" stroke="white" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </div>

                <div>
                    <p style={{
                        margin: 0,
                        fontWeight: 600,
                        fontSize: 15,
                        textDecoration: isCompleted ? 'line-through' : 'none',
                        color: isCompleted ? '#6b7280' : '#111827',
                    }}>
                        {todo.title}
                    </p>
                    <p style={{ margin: '2px 0 0', fontSize: 12, color: '#9ca3af' }}>
                        ID: {todo.id} · User: {todo.userId}
                    </p>
                </div>
            </div>

            <span style={{
                padding: '4px 12px',
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 500,
                backgroundColor: isCompleted ? 'rgba(72,112,46,0.9)' : 'transparent',
                color: isCompleted ? '#ffffff' : '#6b7280',
                border: isCompleted ? 'none' : '1px solid #d1d5db',
                whiteSpace: 'nowrap',
            }}>
        {isCompleted ? 'Completed' : 'In Progress'}
      </span>
        </div>
    )
}
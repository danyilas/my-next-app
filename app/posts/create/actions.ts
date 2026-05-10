"use server";

import { revalidatePath } from 'next/cache';

export async function revalidatePostsPage(): Promise<void> {
    revalidatePath('/posts');
}
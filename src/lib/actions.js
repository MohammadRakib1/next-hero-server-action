import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";
import { redirect } from "next/navigation";

export const createATask = async (formData) => {
    'use server'

    const newTask = Object.fromEntries(formData.entries());

    console.log('Name:', newTask);

    const res = await postTask(newTask);
    if (res.ok) {
        revalidatePath('/tasks');
    }
    return res;
}

export const newTaskAction = async (formData) => {
    'use server'
    const newTask = Object.fromEntries(formData.entries());

    console.log('Name:', newTask);

    const res = await postTask(newTask);
    if (res.ok) {
        revalidatePath('/tasks');
        redirect('/tasks');
    }
}
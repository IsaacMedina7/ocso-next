"use server";
import { cookies } from "next/headers";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { Location } from "@/entities";

export default async function updateEmployee(employeeId: string, formData: FormData) {
    const cleanData = new FormData()
    for (const [key, value] of formData.entries()) {
        if (!key.startsWith("$")) {
            cleanData.append(key, value);
        }
    }
    const response = await fetch(`${API_URL}/employees/${employeeId}`, {
        method: "PATCH",
        headers: {
            ...authHeaders()
        },
        body: cleanData,
    })
    if (response.status === 200) revalidateTag("dashboard:employees")
    if (response.status === 200) revalidateTag(`dashboard:employees:${employeeId}`);
    return;
}
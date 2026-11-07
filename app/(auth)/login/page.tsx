'use client';
import { API_URL } from "@/constants";
import { Button, Input, Spinner } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function LoginPage() {
    const [submitting, setSubmitting] = useState(false)
    const router = useRouter()
    const hanldeSubmit = async (e: any) => {
        setSubmitting(true);
        e.preventDefault()
        const formData = new FormData(e.target);

            // Mapeo directo de los inputs del formulario
            const authData = {
                userEmail: formData.get("userEmail"),
                userPassword: formData.get("userPassword"),
            };
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
            },
                body: JSON.stringify(authData),
                credentials: 'include',
            });
            if (response.status === 201) router.push('/dashboard');
            setSubmitting(false)
        } catch (e) {
            setSubmitting(false);
        }
        return;
    }
    return (
        <form className="bg-orange-500 px-10 py-2 rounded-md" onSubmit={hanldeSubmit}>
            <p className="text-3xl my-4 text-white"> Iniciar Sesión <span></span></p>
            <div className="flex flex-col gap-2 py-10 my-4 items-center">
                <Input label="Email" name="userEmail" type="email" isRequired={true} size="sm" />
                <Input label="Contraseña" name="userPassword" type="password" isRequired={true} size="sm" />
            </div>
            <div className="flex flex-col items-center gap-2">
            </div>
            <Button color="primary" type="submit" disabled={submitting}> {submitting ? <Spinner size='md' /> : " Iniciar Sesión"} </Button>
            <p>¿No tienes una cuenta? <Link href="/signup" className="text-red-600 underline"> Regístrate </Link></p>
        </form>
    );
}
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export default function LoginPage(){
    return(
        <div className="bg-orange-500 px-10 py-2 rounded-md">
            <p className="text-3xl my-4 text-white"> Iniciar Sesión <span></span></p>
            <div className="flex flex-col gap-2 py-10 my-4 items-center">
            <Input label="Email" type="email" isRequired={true} size="sm" />
            <Input label="Contraseña" type="password" isRequired={true} size="sm" />
            </div>
            <div className="flex flex-col items-center gap-2">
            </div>
            <Button color="primary"> Iniciar Sesión </Button>
            <p>¿No tienes una cuenta? <Link href="/signup" className="text-red-600 underline"> Regístrate </Link></p>
        </div>
    );
}
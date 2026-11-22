import { Card, CardHeader, Divider, CardBody } from "@nextui-org/react"
import { Manager } from "@/entities"
import Link from "next/link"
import FormUpdateUser from "./FormUpdateUser"
import { LuPlus } from "react-icons/lu"
import FormCreateUserEmployee from "./FormCreateUser"
import FormCreateUserManager from "./FormCreateUser"
import ModalGeneric from "@/app/dashboard/_components/ModalGeneric"

export default function ManagerCard({ manager }: { manager: Manager }) {
    return (
        <Card className="mx-10 py-4 px-6 min-w-[500px] text-center">
            <CardHeader className="flex flex-row items-center justify-between gap-12 px-4">
                <p className="text-3xl font-bold">
                    {manager.managerFullName}
                </p>
                {manager.user ? (
                    <ModalGeneric icon={<LuPlus size="20" />}>
                        <FormUpdateUser user={manager.user} />
                    </ModalGeneric>
                ) : (
                    <ModalGeneric icon={<LuPlus size="20" />}>
                        <FormCreateUserManager manager={manager} />
                    </ModalGeneric>
                )}
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-row flex-grow-0 items-center gap-10 justify-center">
                <div className="flex flex-col text-lg">
                    <p className="w-full">Email: <b>{manager.managerEmail}</b></p>
                    <p className="w-full">Telefono: <b>{manager.managerPhoneNumber}</b></p>
                    <p className="w-full">Salario: <b>{manager.managerSalary}</b></p>
                    <p className={manager.location ? "" : "hidden"}>
                        Tienda: <Link href={{
                            pathname: '/dashboard',
                            query: {
                                store: manager?.location?.locationId
                            }
                        }}>
                            <b className="underline"> {manager?.location?.locationName}</b>
                        </Link>
                    </p>
                    {
                        manager.location ? (
                            <>
                            </>
                        ) : (<p className="w-full text-2xl"> No tiene tienda asignada</p>)
                    }
                </div>
            </CardBody>
        </Card>
    )
}
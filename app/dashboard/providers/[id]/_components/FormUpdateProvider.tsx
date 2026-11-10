import updateProvider from "@/actions/providers/update";
import { Provider } from "@/entities";
import { Button, Input } from "@nextui-org/react";

export default function FormUpdateProvider({ provider }: { provider: Provider }) {
    const { providerId } = provider;
    const updateProviderWithId = updateProvider.bind(null, providerId)
    return (
        <>

            <form action={updateProviderWithId} className="flex flex-wrap gap-4 flex-grow-0 bg-orange-200 rounded-md px-10 py-10 mr-20 items-center justify-center">
                <Input defaultValue={provider.providerName} label="Nombre" placeholder="Pecsi" name="providerName" />
                <Input defaultValue={provider.providerEmail} label="Correo Electrónico" placeholder="businees@pecsi.com" name="providerEmail" />
                <Input defaultValue={provider.providerPhoneNumber} label="Número Teléfonico" placeholder="4423789021" name="providerPhoneNumber" />

                <Button type="submit" color="primary"> Actualizar </Button>
            </form>
        </>
    )
}
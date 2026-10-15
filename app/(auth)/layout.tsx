import Image from "next/image";

export default function AuthLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-orange-200 min-h-screen grid place-items-center p-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <Image 
          src="/OxxoLogo.png" 
          alt="Oxxo" 
          width={250} 
          height={100} 
          style={{ height: "auto" }}
          priority
        /> 
        {children} 
      </div>
    </div>
  );
}
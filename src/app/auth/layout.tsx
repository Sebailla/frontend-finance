
import Notifications from "@/components/ui/Notifications/Notifications";



export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="relative min-h-screen w-full overflow-hidden">
                {/* 1) Imagen de fondo (z-0) */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/img/Imagen1.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />

                {/* 2) Overlay derecho con blur (z-10) */}
                <div
                    aria-hidden
                    className="absolute inset-y-0 right-0 w-1/2 z-10 pointer-events-none"
                    style={{
                        /* bg semitransparente: ajustar alpha (0.25 = 25%) */
                        background: "rgba(255,255,255,0.7)",
                        /* respaldo explícito para navegadores (incluye Safari) */
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                    }}
                />

                {/* 3) Contenido encima (z-20) */}
                <div className="relative z-20 grid lg:grid-cols-2 min-h-screen">
                    {/* Mitad izquierda: ocupada por la imagen (no necesitamos contenido aquí) */}
                    <section className="hidden lg:block" />

                    {/* Mitad derecha: fondo sólido para children */}
                    <section className="flex flex-col items-center justify-center py-10 px-5 lg:px-0">
                        <div className="max-w-3xl mx-auto">{children}</div>
                    </section>
                </div>
            </div>
            <Notifications/>
        </>
    );
}



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
                        backgroundImage: "url('/assets/images/Imagen7.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />

                {/* 2) Overlay de blur: oculto en < lg, ocupa toda la pantalla (inset-0)
          pero el rectángulo visible con blur está alineado a la derecha y ocupa 50% (w-1/2). */}
                <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
                    <div
                        aria-hidden
                        className="absolute inset-y-0 right-0 w-1/2 h-full"
                        style={{
                            /* semitransparente para que backdrop-filter tenga efecto */
                            /* puedes ajustar el alpha (0.22, 0.35, 0.5...) según gusto */
                            background: "rgba(255,255,255,0.32)",
                            /* blur (incluye prefijo para Safari) */
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                        }}
                    />
                </div>

                {/* 3) Contenido encima (z-20). Las cards dentro deben llevar z mayor (ej. z-30) */}
                <div className="relative z-20 grid lg:grid-cols-2 min-h-screen">
                    {/* Mitad izquierda: ocupada por la imagen (solo se muestra la imagen de fondo) */}
                    <section className="hidden lg:block" />

                    {/* Mitad derecha: transparente para que el overlay pueda verse detrás en desktop */}
                    <section className="flex flex-col items-center justify-center py-10 px-5 lg:px-0">
                        <div className="max-w-3xl mx-auto">{children}</div>
                    </section>
                </div>
            </div>

            <Notifications />
        </>
    );
}


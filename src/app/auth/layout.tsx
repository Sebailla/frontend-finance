
import DarkLogo from "@/components/ui/logos/DarkLogo";
import Notifications from "@/components/ui/Notifications";



export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="lg:grid lg:grid-cols-2 min-h-screen absolute top-0 left-0 leading-5 h-full w-full overflow-hidden">

                {/* Left side of the auth layout */}
                <section className="flex flex-col  items-center">
                    <div className="">
                        <DarkLogo />
                    </div>
                    <div className="hidden lg:flex flex-col justify-center items-center mx-40">
                        <p className="text-4xl text-primary font-outfix font-semibold mb-10 text-pastel-yellow"></p>
                        
                    </div>

                </section>

                {/* Right side of the auth layout */}
                <section className="lg:pt-30 items-center justify-items-center relative flex flex-col lg:gap-0 gap-10  py-10 px-5 lg:px-0 h-full">
                    <div className="max-w-3xl mx-auto">
                        {children}
                    </div>
                </section>
            </div>
            <Notifications/>
        </>
    );
}
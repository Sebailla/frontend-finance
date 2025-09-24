import { HeaderCard, RegisterForm } from "@/components"
import Link from "next/link"


const Register = () => {
    return (
        <div className="relative z-50 flex w-auto md:w-96 mt-10 md:mt-20 lg:mt-0 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">

            <HeaderCard 
            title={'Sign Up'}
            color={"green"}
            />

            < RegisterForm />

            <div className="p-6 pt-0">
                <p className="mt-6 flex justify-center font-body text-sm font-light leading-normal text-inherit antialiased">
                    Are you already registered?
                    <Link
                        href="/auth/login"
                        className="ml-1 block font-body text-sm font-bold leading-normal text-green-apple-700 antialiased"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register
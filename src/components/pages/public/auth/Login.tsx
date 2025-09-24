import { HeaderCard, LoginForm } from "@/components"
import Link from "next/link"


const Login = () => {
    return (
        <div className="relative z-50 flex w-auto md:w-96 pt-10 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">

            <HeaderCard 
            title={'Sign In'} 
            color={'yellow'}/>

            <LoginForm />

            <div className="p-6 pt-0">
                <p className="mt-6 flex justify-center font-body text-sm font-light leading-normal text-inherit antialiased">
                    Do not have an account?
                    <Link
                        href="/auth/register"
                        className="ml-1 block font-body text-sm font-bold leading-normal text-pastel-yellow-700 antialiased"
                    >
                        Sign up
                    </Link>
                </p>
                <p className="mt-6 flex justify-center font-body text-sm font-light leading-normal text-inherit antialiased">
                    Forgot you password?
                    <Link
                        href="/auth/forgot-pass"
                        className="ml-1 block font-body text-sm font-bold leading-normal text-pastel-yellow-700 antialiased"
                    >
                        Password Recovery
                    </Link>
                </p>

            </div>
        </div> 
    )
}

export default Login
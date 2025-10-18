import Link from "next/link"
import { HeaderCard } from "../ui/cards/HeaderCard"
import { ForgotPass } from "../forms/ForgotPass"


const ForgotPassword = () => {
    return (
        <div className="relative z-50 flex w-auto md:w-96 mt-10 md:mt-20 lg:mt-0 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">

            <HeaderCard
                title={'Reset Password'}
                color={'yellow'}
            />

            <ForgotPass />

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
                    Are you already registered?
                    <Link
                        href="/auth/login"
                        className="ml-1 block font-body text-sm font-bold leading-normal text-pastel-yellow-700 antialiased"
                    >
                        Sign In
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default ForgotPassword
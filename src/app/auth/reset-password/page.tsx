import { HeaderCard, PasswordResetHandler} from "@/components"

const ResetPasswordPage = () => {
    return (
        <div className="relative z-50 flex w-auto md:w-96 mt-10 md:mt-20 lg:mt-0 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">

            <HeaderCard 
            title={'Reset Password'} 
            color={"yellow"}
            />

            <PasswordResetHandler/>

        </div>
    )
}

export default ResetPasswordPage
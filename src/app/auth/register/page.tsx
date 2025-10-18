import Register from '@/components/auth/Register'
import Notifications from '@/components/ui/Notifications/Notifications'
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Personal Finance - Sing Up',
    description: 'Register page for the Personal Finance application',
    icons: {
        icon: '/img/logo.svg'
    }
}

const RegisterPage = () => {
    return (
        <>
            <Register />
            <Notifications />
        </>
    )
}
export default RegisterPage

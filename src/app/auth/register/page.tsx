import type { Metadata } from 'next'
import Register from '@/components/pages/public/auth/Register'

export const metadata: Metadata = {
    title: 'Personal Finance - Sing Up',
    description: 'Register page for the Personal Finance application',
    icons: {
        icon: '/img/logo.svg'
    }
}

const RegisterPage = () => {
    return (
        <Register />
    )
}
export default RegisterPage

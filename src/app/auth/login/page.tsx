import Login from '@/components/auth/Login'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Personal Finance - Sing In',
    description: 'Login page for the Personal Finance application',
    icons:{
        icon: '/img/logo.svg'
    }
}

const LoginPage = () => {
    return (
        <Login/>
    )
}

export default LoginPage

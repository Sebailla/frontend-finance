
import ForgotPassword from '@/components/auth/ForgotPassword'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Budget Tracker - Forgot password',
    description: 'Forgot password page for the Budget Tracker application',
}

const ForgotPassPage = () => {
    return (

        <ForgotPassword/>
    )
}

export default ForgotPassPage
'use client'
import { resetPassword } from "@/actions"
import { useState, useActionState, useEffect } from "react"
import { toast } from "react-toastify"
import Button from "../ui/buttons/Button"
import SpinIcon from "../ui/icons/spinIcon"
import { useRouter } from "next/navigation"
import { FormField } from "./FormField"
import Notifications from "../ui/Notifications/Notifications"


export const ResetPassForm = ({ token }: { token: string }) => {

    const router = useRouter()

    const [isComplete, setIsComplete] = useState(false)

    const resetPasswordWithToken = resetPassword.bind(null, token)

    const [state, dispatch] = useActionState(resetPasswordWithToken, {
        errors: [],
        success: '',
    })

    useEffect(() => {
        if (state.errors) {
            state.errors.forEach(e => {
                toast.error(e)
            })
            setIsComplete(false)
        }
        if (state.success) {
            toast.success(state.success)
            setIsComplete(false)
            router.push('/auth/login')
        }
    }, [state, router])

    const send = () => {
        setIsComplete(true)
    }

    return (
        <>
            <form
                className="flex flex-col gap-4 p-6 mt-10"
                noValidate
                action={dispatch}
            >

                <FormField
                    label={'Password'}
                    type="password"
                    name="password"
                    id="password"
                />

                <FormField
                    label={'Confirm Password'}
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                />

                <Button
                    className={'btn-primary mt-10'}
                    type={"submit"}
                    name={"Save New Password"}
                    onClick={send}
                />
                {
                    isComplete &&
                    <div className="flex flex-row justify-center items-center gap-4 text-red-400 text-xl">
                        <SpinIcon />
                        Saving New Password ...
                    </div>
                }

            </form>

            <Notifications />

        </>
    )
}

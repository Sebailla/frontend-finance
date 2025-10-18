'use client'
import { validateResetPassToken } from '@/actions'
import { PinInput, PinInputField } from '@chakra-ui/pin-input'
import { Dispatch, SetStateAction, useActionState, useEffect, useState, useTransition } from 'react'
import toast from 'react-hot-toast'
import SpinIcon from '../ui/icons/spinIcon'
import Notifications from '../ui/Notifications/Notifications'

type ResetPasswordTokenProps = {
    setIsValidToken: Dispatch<SetStateAction<boolean>>
    token: string
    setToken: Dispatch<SetStateAction<string>>
}

export const ResetPasswordToken = ({ setIsValidToken, token, setToken }: ResetPasswordTokenProps) => {

    const [isComplete, setIsComplete] = useState(false)

    const validateResetPassTokenInput = validateResetPassToken.bind(null, token)

    const [state, dispatch] = useActionState(validateResetPassTokenInput, {
        errors: [],
        success: ''
    })

    useEffect(() => {
        if (isComplete) {
            dispatch()
        }
    }, [isComplete])

    useEffect(() => {
        if (state.errors) {
            state.errors.forEach(e => {
                toast.error(e)
                setIsComplete(false)
            })
        }

        if (state.success) {
            toast.success(state.success)
            setIsValidToken(true)
        }
        

    }, [state, setIsValidToken])

    const handleChange = (token: string) => {
        setIsComplete(false)
        setToken(token)
    }

    const handleComplete = () => {
        setIsComplete(true)
    }



    return (
        <form className="flex flex-col gap-4 p-6">

            <p className="p-6 text-center font-body text-md leading-normal text-inherit antialiased">
                Please enter the 6-digit code you received in your email box provided.
            </p>

            <section className="flex justify-center gap-3 my-10">
                <PinInput
                    value={token}
                    onChange={handleChange}
                    onComplete={handleComplete}
                    
                // si querés longitud distinta, podés controlar la cantidad de <PinInputField />
                >
                    {Array.from({ length: 6 }).map((_, i) => (
                        <PinInputField
                            key={i}
                            className="w-10 h-12 rounded-lg border border-slate-400 text-center placeholder-white shadow-md"
                        />
                    ))}
                </PinInput>

            </section>
            <section >
                {
                    isComplete &&
                    <div className="flex flex-row justify-center items-center gap-4 text-red-400 text-xl">
                        <SpinIcon />
                        Confirming ...
                    </div>
                }
            </section>
            <Notifications/>

        </form>
    )
}
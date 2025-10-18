'use client'

import { confirmAccountAction } from "@/actions"
import { useRouter } from "next/navigation"
import { useActionState, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { PinInput, PinInputField } from "@chakra-ui/pin-input"
import SpinIcon from "../../../public/assets/icons/spinIcon"

export const BoxsConfirm = () => {

    const router = useRouter()

    const [token, setToken] = useState('')
    const [isComplete, setIsComplete] = useState(false)

    const confirmAccountWithToken = confirmAccountAction.bind(null, token)

    const [state, dispatch] = useActionState(confirmAccountWithToken, {
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
            router.push('/auth/login')
        }

    }, [state, router])

    const handleChange = (token: string) => {
        setIsComplete(false)
        setToken(token)
    }

    const handleComplete = () => {
        setIsComplete(true)
    }

    return (
        <div className=" flex flex-col justify-center gap-4">
            <section className="flex justify-center gap-3 my-10">

                    <PinInput
                        value={token}
                        onChange={handleChange}
                        onComplete={handleComplete}
                        otp
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
        </div>
    )
}

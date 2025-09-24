'use client'

import { createAccountAction } from "@/actions"
import { useActionState, useEffect } from "react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { FormField } from "@/components/ui/forms/FormField"
import Button from "@/components/ui/buttons/Button"


const initialState = {
    errors: [],
    success: '',
    status: undefined,
    values: {
        name: "",
        lastName:"",
        email: "",
        password: "",
        confirmPassword: ""
    },
}

export const RegisterForm = () => {

    const router = useRouter()

    const [state, dispatch] = useActionState(createAccountAction, initialState)

    useEffect(() => {
        if (state.errors) {
            state.errors.forEach(e => {
                toast.error(e)
            })
        }
        if (state.status === 409) {
            toast.error(state.success)
        }
        if (state.success && state.status === 201) {
            toast.success(state.success)
            router.push('/auth/post-token-send-info')
        }
    }, [state, router])

    return (
        <form
            className="flex flex-col gap-4 p-6"
            noValidate
            action={dispatch}
        >

            <FormField
                label={'Name'}
                type="text"
                name="name"
                id="name"
                color="green"
                defaultValue={state.values.name}
            />

            <FormField
                label={'Lastname'}
                type="text"
                name="lastName"
                id="lastName"
                color="green"
                defaultValue={state.values.name}
            />

            <FormField
                label={'Email'}
                type="email"
                name="email"
                id="email"
                color="green"
                defaultValue={state.values.email}
            />

            <FormField
                label={'Password'}
                type="password"
                name="password"
                id="password"
                color="green"
                defaultValue={state.values.password}
            />

            <FormField
                label={'Confirm Password'}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                color="green"
                defaultValue={state.values.confirmPassword}
            />

            <Button
                className={'btn-primary'}
                color="green"
                type={"submit"}
                name={"Sign Up"}
            />

        </form >

    )
}


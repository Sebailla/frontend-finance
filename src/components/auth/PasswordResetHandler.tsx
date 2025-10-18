'use client'
import { useState } from "react"
import { ResetPasswordToken } from "../forms/ResetPasswordToken"
import { ResetPassForm } from "../forms/ResetPassForm"
import Notifications from "../ui/Notifications/Notifications"


export const PasswordResetHandler = () => {

    const [token, setToken] = useState<string>('')

    const [isValidToken, setIsValidToken] = useState<boolean>(false)


    console.log({token, isValidToken})


    return (
        <>
            {
                !isValidToken
                    ?
                    <ResetPasswordToken
                        setIsValidToken={setIsValidToken}
                        token={token}
                        setToken={setToken}
                    />
                    :
                    <ResetPassForm
                        token={token}
                    />
            }
            <Notifications/>
        </>
    )
}

'use client'

import Button from "../ui/buttons/Button"
import { HeaderCard } from "../ui/cards/HeaderCard"
import { FormField } from "../ui/forms/FormField"
import ThemeButtons, { ButtonColor } from "./ThemeButtons"
import { useEffect, useRef, useState } from "react"

const TestComponent = () => {
    const [theme, setTheme] = useState<ButtonColor>("rose") // 👈 estado global del componente
    const passRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        passRef.current?.focus()
    }, [theme])

    return (
        <div className="container md:max-w-[980px] flex flex-col justify-center items-center gap-5">

            <h4 className="text-subTitle">Selecciona el tema</h4>

            <ThemeButtons theme={theme} setTheme={setTheme} />

            <h1 className="text-title-large text-center bg-background-nav p-4 mb-8">
                H1 - Bienvenidos a Personal Finance
            </h1>

            <div className="relative z-50 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <HeaderCard title={'Sign Up'} color={theme} /> {/* 👈 usa el theme */}

                <form className="flex flex-col gap-4 p-6" noValidate>
                    <FormField label={'Password'} type="password" name="password" id="password" color={theme} inputRef={passRef} />
                    <FormField label={'Confirm Password'} type="password" name="confirmPassword" id="confirmPassword" color={theme} />

                    <Button
                        className="btn-primary"
                        color={theme}
                        type="submit"
                        name="Sign Up"
                    />
                </form>

            </div>

            <h2 className="text-title">H2 - Título</h2>

            <h3 className="text-headline text-[#6e6e73] hover:font-semibold">
                H3 - HeadLine - #6e6e73
            </h3>
            <h3 className="text-headline">H3 - HeadLine</h3>

            <h4 className="text-subTitle">H4 - Sub-Title</h4>

            <p className="text-body">
                Body(p) - Texto principal, Crea un public carpeta en la raíz de su proyecto para <strong>(strong) - almacenar activos estáticos </strong>como imágenes, fuentes, etc. A continuación, el código puede hacer referencia a los archivos que contiene a partir de la URL base.public/
            </p>
            <span className="text-footnote">
                Nota al pie de pagina: <strong>Autor - </strong>Sebastian Illa
            </span>
        </div>
    )
}

export default TestComponent
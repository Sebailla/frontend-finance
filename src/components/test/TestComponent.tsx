import Button from "../ui/buttons/Button"


const TestComponent = () => {
    return (
        <div className="container md:max-w-[980px] flex flex-col justify-center items-center gap-5">
            
            <h1 className="text-title-large text-center bg-background-nav p-4">H1 - Bienvenidos a Personal Finance</h1>
            
            <h2 className="text-title">H2 - Título</h2>

            <h3 className="text-headline text-[#6e6e73] hover:font-semibold">H3 - HeadLine - #6e6e73</h3>
            <h3 className="text-headline">H3 - HeadLine </h3>
            
            <h4 className="text-subTitle">H4 - Sub-Title</h4>
            
            <p className="text-body">Body(p) - Texto principal, Crea un public carpeta en la raíz de su proyecto para <strong>(strong) - almacenar activos estáticos </strong>como imágenes, fuentes, etc. A continuación, el código puede hacer referencia a los archivos que contiene a partir de la URL base.public/
            </p>
            <Button
            color="green"
            name="Button"
            />
            <span className="text-footnote">Nota al pie de pagina: <strong>Autor - </strong>Sebastian Illa</span>
        </div>
    )
}

export default TestComponent
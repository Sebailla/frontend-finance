'use client'
import Button from '../ui/buttons/Button'

export type ButtonColor = "rose" | "lira" | "yellow" | "green" | "sky" | "red"

const colors: Array<{ id: number; name: ButtonColor }> = [
    { id: 1, name: 'rose' },
    { id: 2, name: 'lira' },
    { id: 3, name: 'yellow' },
    { id: 4, name: 'green' },
    { id: 5, name: 'sky' },
    { id: 6, name: 'red' },
]

interface ThemeButtonsProps {
    theme: ButtonColor
    setTheme: (col: ButtonColor) => void
}

const ThemeButtons = ({ theme, setTheme }: ThemeButtonsProps) => {
    return (
        <div className="flex justify-center gap-3">
            {colors.map((c) => (
                <Button
                    key={c.id}
                    color={c.name}
                    name=""
                    onClick={() => setTheme(c.name)}
                    className={`rounded-full p-0 ${theme === c.name ? 'ring-2 ring-offset-2 ring-black' : ''}`}
                />
            ))}
        </div>
    )
}

export default ThemeButtons
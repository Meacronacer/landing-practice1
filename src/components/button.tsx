import { VariantProps, cva } from "class-variance-authority"
import { cn } from "../utils"

const buttonsVariants = cva(
    "py-4 px-[50px] h-[60px] w-[221px] rounded-[20px] font-bold transition-all hover:bg-gray-300",
    {
        variants: {
            variant: {
                default: 'text-green',
                contained: 'text-white bg-green hover:bg-gray-400',
                outline: 'text-green bg-green-light'
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
)


interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement>,
VariantProps<typeof buttonsVariants> {}

const Button: React.FC<ButtonProps> = ({className, variant, ...props}) => {
    return <button className={cn(buttonsVariants({variant, className}))} {...props} />
}

export { Button, buttonsVariants}
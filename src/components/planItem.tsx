import { ArrowRight, Check } from "lucide-react"
import { Button } from "./button"

interface props {
    title: string
    price: string
    detail: string
    buttonText: string
    textColor?: string
    bgColor?: string
    arrowRight?: boolean
}

const PlanItem: React.FC<props> = ({title, price, detail, buttonText, arrowRight=false,  textColor='text-[#000]', bgColor='bg-white'}) => {
    return (
        <div className={`rounded-[20px] max-w-[370px] lg:max-w-full w-full px-[30px] py-10 ${bgColor} ${textColor}`}>
            <h6 className="text-[21px] font-[Mulish]">{title}</h6>

            <div>
                <span className="font-bold font-[Poppins] text-[50px]">${price}</span>
                <span className="font-[Mulish] font-bold ml-3">/ month</span>
            </div>
            <span className="font-[Mulish]">{detail}</span>

            <ul className="mt-6 flex flex-col gap-y-[12px]">
                <li className="flex items-center font-bold gap-x-3 font-[Mulish]"><Check size={20} /> Write feature details here</li>
                <li className="flex items-center font-bold gap-x-3 font-[Mulish]"><Check size={20} /> Write feature details here</li>
                <li className="flex items-center font-bold gap-x-3 font-[Mulish]"><Check size={20} /> Write feature details here</li>
            </ul>

            <Button variant='outline' className="w-full mt-8 tracking-wider flex items-center gap-x-2 justify-center group">
                {buttonText} {arrowRight && <ArrowRight className="group-hover:translate-x-6 transition-transform" size={20} />}
            </Button>

        </div>
    )
}

export default PlanItem
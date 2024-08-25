import { ArrowRight } from "lucide-react"

interface props {
    svg: string
    bg: string
    title: string
    description: string
}

const FeaturesItem:React.FC<props> = ({svg, bg, title, description}) => {
    return (
        <div className="bg-white px-[30px] py-10 max-w-[370px] lg:max-w-full rounded-[20px] shadow-md">
            <div className={`${bg} p-5 w-fit mx-auto rounded-[20px]`}>
                <img src={svg} alt='icon' />
            </div>
            <h3 className="font-semibold font-[Poppins] text-[27px] md:text-[21px] sm:text-[28px] text-center mt-[27px]">{title}</h3>
            <p className="text-center mt-[22px] font-[Mulish]">{description}</p>
            <a className="flex font-[Poppins] text-green font-bold items-center gap-x-2 justify-center mt-[33px] group cursor-pointer hover:text-gray-400">
                Learn More <ArrowRight className="group-hover:translate-x-4 transition-transform" size={20}  />
            </a>
        </div>
    )
}

export default FeaturesItem
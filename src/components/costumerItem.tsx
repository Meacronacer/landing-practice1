import star from '../assets/Star Icon.svg'
import emptyStar from '../assets/Empty Star Icon.svg'

interface props {
    avatar: string
    name:string
    position: string
    comment: string
    stars: number
}

const CostumerItem:React.FC<props> = ({avatar, name, position, comment, stars}) => {
    return (
        <div className="relative flex flex-col gap-y-[30px] max-w-[370px] w-full h-fit min-h-[434px] lg:flex-row lg:max-w-full lg:min-h-[271px] lg:gap-x-4 sm:flex-col px-[30px] py-10 bg-white shadow-md rounded-[20px]">
            <div className='text-center  lg:m-auto'>
                <img className='mx-auto' src={avatar} alt='avatar' />
                <h6 className='font-semibold text-[21px] font-[Poppins] mt-[14px]'>{name}</h6>
                <span className='text-[14px] font-[Mulish] text-[#374151]'>{position}</span>
            </div>
            <div className='lg:m-auto lg:flex lg:flex-col gap-y-[24px]'>
                <p title={comment} className='font-[Mulish] mt-[1px] text-center max-w-[309px] line-clamp-6'>
                    {comment}
                </p>

                <div className="flex w-fit absolute lg:static sm:mx-auto bottom-10 left-[30%] gap-x-[4px]">
                    {[1,2,3,4,5].map((item) =>  {
                        if (stars >= item) {
                            return <img key={item} src={star} alt='star' />
                        }

                        return <img key={item} src={emptyStar} alt='star' />
                    })}
                </div>
            </div>

          </div>
    )
}

export default CostumerItem
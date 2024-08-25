import twitter from '../assets/twitterIcon.svg'
import social2 from '../assets/social2.svg'
import instagram from '../assets/instagramIcon.svg'

interface props {
    image: string
    name: string
    position: string
}

const TeamItem:React.FC<props> = ({image, name, position}) => {
    return (
        <div className="bg-white rounded-[20px] max-w-[370px] pb-[30px]">
            <img src={image} alt="team" />
            <h6 className='font-semibold text-[21px] font-[Poppins] text-center mt-4'>{name}</h6>
            <p className='font-[Mulish] text-center mt-[5px]'>{position}</p>

            <hr className='my-5' />

            <div className='flex items-center justify-center gap-x-4'>
                <img className='cursor-pointer transition-transform hover:scale-110' src={twitter} alt='twiiter' />
                <img className='cursor-pointer transition-transform hover:scale-110' src={social2} alt='social' />
                <img className='cursor-pointer transition-transform hover:scale-110' src={instagram} alt='instagram' />
            </div>
        </div>
    );
}
 
export default TeamItem;
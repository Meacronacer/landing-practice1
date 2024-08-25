

interface props extends React.HTMLProps<HTMLInputElement> {}


const Input: React.FC<props> = ({...props}) => {
    return <input className="rounded-[20px] border-2 border-[#d8d8d8] font-[Mulish] py-[18px] pl-[61px] pr-[20px] h-[60px] w-[465px] md:w-full" {...props} />;
}
 
export default Input;
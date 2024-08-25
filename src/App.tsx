import { Button } from "./components/button";
import { ArrowRight, Rocket } from "lucide-react";
import phone from "./assets/Visuals.png";
import phoneCrop from "./assets/visualCrop.png";
import logo from "./assets/logo.svg";
import airbnb from "./assets/airbnb.svg";
import google from "./assets/google.svg";
import amazon from "./assets/amazon.svg";
import microsoft from "./assets/microsoft.svg";
import fedex from "./assets/fedex.svg";
import hubspot from "./assets/hubspot.svg";
import magicWand from "./assets/MagicWand.svg";
import boundingBox from "./assets/BoundingBox.svg";
import confeti from "./assets/Confetti.svg";
import FeaturesItem from "./components/featuresItem";
import mockPhone from "./assets/Mockup.png";
import CostumerItem from "./components/costumerItem";
import avatar1 from "./assets/Photo.png";
import avatar2 from "./assets/photo 2.png";
import avatar3 from "./assets/photo 3.png";
import PlanItem from "./components/planItem";
import sarah from "./assets/sarah.png";
import michel from "./assets/michael.png";
import lauren from "./assets/lauren.png";
import TeamItem from "./components/teamItem";
import phoneCall from "./assets/PhoneCall.svg";
import email from "./assets/EnvelopeSimple.svg";
import instagramIcon from "./assets/Social Icons.svg";
import basketIcon from "./assets/Social Icons (1).svg";
import beIcon from "./assets/Social Icons (2).svg";
import twitterIcon from "./assets/Social Icons (3).svg";
import Input from "./components/input";
import user from './assets/User.svg'
import emailSmall from './assets/emailSmall.svg'
import youtube from './assets/youtubeBlack.svg'
import instagramBlack from './assets/instagramBlack.svg'
import github from './assets/githubBlack.svg'
import linkedin from './assets/linkedinBlack.svg'
import { useMediaQuery } from 'react-responsive'


function App() {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' })


  return (
    <div className="max-w-[1280px] bg-[#f8f9ff] container mx-auto">
      <header className="flex items-center justify-between px-[50px] py-[34px] lg:px-[30px] sm:w-fit sm:mx-auto sm:py-[20px]">
        <div className="flex items-center gap-x-[6px]">
          <img src={logo} alt="logo" />
          <p className="text-[21px]  font-bold font-[Poppins]">
            Landing<span className="font-normal">Page</span>
          </p>
        </div>

        <div className="flex items-center gap-x-5">
          {!isTablet && <a className="mr-[30px] cursor-pointer font-bold text-green tracking-wider hover:text-gray-400">
            Contact
          </a>}
          {!isMobile && <Button className="font-[Poppins] font-semibold w-[202px]" variant="outline">
            How it works
          </Button>}
          {!isTablet && <Button
            variant="contained"
            className="flex items-center tracking-[0.5px] gap-x-[9px]"
          >
            <Rocket size={20} /> Get Started
          </Button>}
        </div>
      </header>

      {/* top content */}
      <div className="mt-[108px] lg:mt-[40px] flex lg:flex-col gap-x-[23px]">
        <div className="max-w-[748px] ml-1 px-[50px] lg:px-[30px] flex flex-col gap-y-4 lg:mx-auto lg:text-center">
          <h1 className="text-[67px] sm:text-[38px] pt-[46px] sm:pt-[20px] font-[Poppins] font-bold tracking-[-1.5px] sm:tracking-normal leading-[130%]">
            Create Engaging Landing Pages
          </h1>
          <p className="text-[21px] sm:text-[16px] mt-1 font-[Mulish] leading-[150%]">
            Build beautiful landing pages in record time with Anima’s Landing
            Page UI kit for Figma. No code required!
          </p>
          <div className="flex items-center gap-x-[18px] mt-[25px] lg:mt-[13px]">
            <Button
              variant="contained"
              className="flex items-center tracking-[0.5px] gap-x-[9px] lg:mx-auto"
            >
              <Rocket size={20} /> Get Started
            </Button>
            {!isTablet && <Button className="font-[Poppins] w-[202px] tracking-tight border-2 border-green">
              How it works
            </Button>}
          </div>
        </div>

        <div className="lg:mx-auto lg:mt-10">
          <img src={phone} className="lg:w-[320px] lg:h-[340px]" />
        </div>
      </div>

      {/* brands */}
      <div className="flex  border-y-2 items-center justify-between px-[55px] py-[58.5px] mt-[155px] lg:mt-[120px] lg:py-[40px] lg:px-[64px]
      md:flex-wrap md:px-[30px] sm:gap-x-[52px] sm:gap-y-[40px] sm:px-[18px] sm:mt-[44px]
      ">
        <img className="lg:w-[70px] lg:h-[23px]" src={airbnb} alt="brand" />
        <img className="lg:w-[70px] lg:h-[23px]" src={google} alt="brand" />
        <img className="lg:w-[70px] lg:h-[23px]" src={amazon} alt="brand" />
        <img className="lg:w-[70px] lg:h-[23px]" src={microsoft} alt="brand" />
        <img className="lg:w-[70px] lg:h-[23px]" src={fedex} alt="brand" />
        <img className="lg:w-[70px] lg:h-[23px]" src={hubspot} alt="brand" />
      </div>

      {/* Features */}
      <div className="mt-[175px] md:mt-[135px] sm:mt-[60px]">
        <h2 className="text-[38px] font-[Poppins] font-bold text-center">
          Features
        </h2>
        <p className="font-[Mulish] text-center mt-4">
          These are just a few features you’ll get using Anima Landing Page Ui
          Kit.
        </p>
      </div>

      <div className="flex items-center gap-5 justify-between mt-[60px] px-[55px] lg:flex-col lg:px-[30px] md:mt-[40px] sm:mt-[60px]">
        <FeaturesItem
          svg={magicWand}
          bg="bg-[#ff625a]/20"
          title="Fast building"
          description="Tailor Anima's Landing Page UI Kit to your unique style and brand with customisable components, in no time!"
        />
        <FeaturesItem
          svg={boundingBox}
          bg="bg-[#009378]/20"
          title="Responsive Design"
          description="No need to worry about screen size. Anima's Landing Page UI Kit adapts to any screen size, from desktop to mobile."
        />
        <FeaturesItem
          svg={confeti}
          bg="bg-[#f8d57e]/20"
          title="No Code Needed"
          description="Zero coding skills required, Anima's Landing Page UI Kit empowers you to create stunning landing pages with ease."
        />
      </div>

      {/* Our Metrics tell the story */}
      <div className="mt-[240px] sm:mt-[80px]">
        <h4 className="text-center font-bold text-[38px] font-[Poppins] tracking-tight">
          Our Metrics Tell the Story
        </h4>
        <p className="text-center mt-4 font-[Mulish] px-[30px]">
          Our metrics component gives you the inside scoop on your success and
          helps you stay on top of your game in style.
        </p>

        <div className="grid grid-cols-4 gap-5 md:grid-cols-2 flex-wrap items-center px-[55px] md:px-[30px] justify-between mt-[52px]">
          <div className="px-4 py-[48px] md:py-[30px] md:mx-auto rounded-t-[20px] bg-white shadow-md max-w-[270px] w-full max-h-[171px] border-b-4 border-[#f2bfaf]">
            <h5 className="text-center text-[38px] md:text-[28px]  font-bold font-[Poppins]">
              10k+
            </h5>
            <p className="text-center font-[Mulish]">Website launched</p>
          </div>
          <div className="px-4 py-[48px] md:py-[30px] md:mx-auto rounded-t-[20px] bg-white shadow-md max-w-[270px] w-full max-h-[171px] border-b-4 border-[#f2bfaf]">
            <h5 className="text-center text-[38px] md:text-[28px]  font-bold font-[Poppins]">
              931k+
            </h5>
            <p className="text-center font-[Mulish]">
              Projects created with Anima
            </p>
          </div>
          <div className="px-4 py-[48px] md:py-[30px] md:mx-auto rounded-t-[20px] bg-white shadow-md max-w-[270px] w-full max-h-[171px] border-b-4 border-[#f2bfaf]">
            <h5 className="text-center text-[38px] md:text-[28px]  font-bold font-[Poppins]">
              240k+
            </h5>
            <p className="text-center font-[Mulish]">New users joined Anima</p>
          </div>
          <div className="px-4 py-[48px] md:py-[30px] md:mx-auto rounded-t-[20px] bg-white shadow-md max-w-[270px] w-full max-h-[171px] border-b-4 border-[#f2bfaf]">
            <h5 className="text-center text-[38px] md:text-[28px]  font-bold font-[Poppins]">
              12k+
            </h5>
            <p className="text-center font-[Mulish]">Teams used Anima</p>
          </div>
        </div>
      </div>

      {/* Get Landing Page UI Kit Today! */}
      <div className="flex md:flex-col mt-[242px] sm:mt-[100px] gap-x-[30px] px-[55px]">
        <div className="w-full">
        <img src={phoneCrop} alt="phone" />
        </div>

        <div className="mt-[70px] w-full">
          <h5 className="font-bold text-[50px] lg:text-[38px] sm:text-[28px] sm:text-center font-[Poppins] tracking-[-1px] leading-[130%]">
            Get Landing Page UI Kit Today!
          </h5>
          <p className="font-[Mulish] text-[21px] sm:text-[16px] sm:text-center leading-[150%] mt-[20px]">
            Break the Figma limits and explore the endless possibilities with
            Anima.
          </p>

          <Button
            variant="contained"
            className="flex gap-x-2 sm:mx-auto items-center font-[Poppins] font-semibold group mt-[40px]"
          >
            Get Started{" "}
            <ArrowRight
              className="group-hover:translate-x-4 transition-transform"
              size={20}
            />
          </Button>
        </div>
      </div>

      {/* Real Stories from Satisfied Customers */}
      <div className="mt-[235px] sm:mt-[100px]">
        <h5 className="font-bold text-[38px] font-[Poppins] tracking-[-0.8px] text-center">
          Real Stories from Satisfied Customers
        </h5>
        <p className="text-center font-[Mulish] mt-4">
          See how our landing page ui kit is making an impact.
        </p>

        <div className="px-[55px] mt-[58px] gap-5 flex lg:flex-col lg:px-[30px] items-center justify-between">
          <CostumerItem
            avatar={avatar1}
            name="Sarah K."
            position="UX Designer @Brello"
            stars={5}
            comment='"I was looking for a way to streamline my design process and the Anima’s Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!"'
          />
          <CostumerItem
            avatar={avatar2}
            name="Michael L."
            position="Creative Director @Yo"
            stars={4}
            comment='“The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!"'
          />
          <CostumerItem
            avatar={avatar3}
            name="Lauren M."
            position="UI Designer @Boo"
            stars={5}
            comment={`"Anima’s Landing Page UI Kit has become a staple in my design toolkit. Whether I'm working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently."`}
          />
        </div>
      </div>

      {/* Pick Your Perfect Plan */}

      <div className="mt-[235px] sm:mt-[100px]">
        <h6 className="font-bold text-[38px] font-[Poppins] text-center tracking-tight">
          Pick Your Perfect Plan
        </h6>
        <p className="text-center font-[Mulish] mt-4">
          Find the perfect plan for your business with our flexible pricing
          options.
        </p>

        <div className="flex lg:flex-col px-[55px] lg:px-[30px] gap-x-[30px] justify-between mt-[60px]">
          <PlanItem
            title="Free"
            price="0"
            detail="Best for Small Teams or Individuals."
            buttonText="Get Started"
          />
          <PlanItem
            title="Professional"
            price="19"
            detail="Ideal for Growing Companies."
            buttonText="Get Started"
          />
          <PlanItem
            title="Enterprise"
            price="49"
            detail="Ultimate for Enterprise Solutions."
            buttonText="Get Started"
            arrowRight={true}
            bgColor="bg-green"
            textColor="text-white"
          />
        </div>
      </div>

      {/* Meet our team */}
      <div className="mt-[235px] sm:mt-[100px]">
        <h6 className="font-bold tracking-tight text-[38px] font-[Poppins] text-center">
          Meet our team
        </h6>
        <p className="font-[Mulish] text-center mt-4 sm:px-[30px]">
          Get to know the faces behind the scenes and learn about the values
          that drive us.
        </p>

        <div className="flex sm:flex-col items-center gap-5 justify-between px-[55px] lg:px-[30px] lg:gap-3 mt-[60px]">
          <TeamItem image={sarah} name="Sarah K." position="UX Designer" />
          <TeamItem image={michel} name="Michael L." position="Lead Designer" />
          <TeamItem
            image={lauren}
            name="Lauren M."
            position="Product Designer"
          />
        </div>
      </div>

      {/* Get Landing Page UI Kit Today! */}

      <div className="bg-[#f2bfaf] mt-[180px] sm:mt-[100px] flex lg:flex-col mx-[55px] lg:mx-[30px]">
        <div className="p-[60px] lg:p-[30px] flex flex-col gap-y-5">
          <h6 className="font-bold font-[Poppins] leading-[130%] tracking-[-1px] text-[50px] md:text-[28px] ">
            Get Landing Page UI Kit Today!
          </h6>
          <p className="font-[Mulish] text-[21px] md:text-[16px]">
            Break the Figma limits and explore the endless possibilities with
            Anima.
          </p>
          <Button
            className="mt-5 flex md:mx-auto items-center tracking-wider gap-x-[9.5px] font-semibold group"
            variant="contained"
          >
            Get Started{" "}
            <ArrowRight
              className="transition-transform group-hover:translate-x-4"
              size={20}
            />
          </Button>
        </div>
        <div>
        <img className="h-full w-full " src={mockPhone} alt="mockphone" />
        </div>
      </div>

      {/* Let’s get in touch! */}
      <div className="px-[55px] md:px-[30px] mt-[115px]">
        <div className="bg-white rounded-[20px] p-[60px] md:p-[30px] shadow-md">
          <h6 className="font-bold font-[Poppins] text-[38px] tracking-[-0.8px]">
            Let’s get in touch!
          </h6>
          <p className="font-[Mulish] mt-[5px]">
            Got questions about the Landing Page UI Kit? Our team is here to
            help. Contact us for quick and friendly support.
          </p>

          <div className="mt-[60px] flex lg:flex-col gap-y-5 justify-between">
            <div className="flex flex-col  gap-y-4">
              <h6 className="flex items-center tracking-wide gap-x-3">
                <img src={phoneCall} alt="phone" />
                +012 345 6789
              </h6>
              <h6 className="flex items-center tracking-wide gap-x-3">
                <img src={email} alt="email" /> Hello@animaapp.com
              </h6>

              <div className="mt-12">
                <h6 className="font-bold font-[Poppins] text-[21px]">
                  Connect with us
                </h6>

                <div className="flex items-center mt-4 gap-x-[13.5px]">
                  <img className="cursor-pointer transition-transform hover:scale-110" src={instagramIcon} alt="social" />
                  <img className="cursor-pointer transition-transform hover:scale-110" src={basketIcon} alt="social" />
                  <img className="cursor-pointer transition-transform hover:scale-110" src={beIcon} alt="social" />
                  <img className="cursor-pointer transition-transform hover:scale-110" src={twitterIcon} alt="social" />
                </div>
              </div>
            </div>
            <div className="flex flex-col mr-[80px] md:mr-0 gap-y-2">
              <div className="relative">
                <img className="absolute top-5 left-5 border-r-2 pr-2" src={user} alt='user' />
                <Input  placeholder="Full Name" />
              </div>
              <div className="relative">
                <img className="absolute top-5 left-5 border-r-2 pr-2" src={emailSmall} alt='user' />
                <Input placeholder="Email"/>
              </div>
            <Button variant='contained' className="mt-3 w-[159px] font-semibold tracking-wider">Submit</Button>
            </div>
          </div>
        </div>
      </div>


      {/* Foooter */}
      <div className="bg-[#2d2d2d] h-[80px] sm:h-fit w-full flex sm:flex-col-reverse sm:justify-start sm:items-start items-center gap-y-5 justify-between px-[60px] sm:px-[20px] sm:py-[24px] mt-[60px]">
        <h6 className="text-[14px] font-[Mulish] text-white leading-[143%]">© 2023 Anima’s Landing Page Ui Kit. </h6>

        <ul className="flex items-center gap-x-4">
          <li><img className="cursor-pointer transition-transform hover:scale-110" src={youtube} alt='social' /></li>
          <li><img className="cursor-pointer transition-transform hover:scale-110" src={instagramBlack} alt='social' /></li>
          <li><img className="cursor-pointer transition-transform hover:scale-110" src={github} alt='social' /></li>
          <li><img className="cursor-pointer transition-transform hover:scale-110" src={linkedin} alt='social' /></li>
        </ul>

      </div>

    </div>
  );
}

export default App;

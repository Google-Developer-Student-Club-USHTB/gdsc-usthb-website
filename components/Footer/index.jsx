import logo from '../../assets/lgo-white-background.png'
import Image from 'next/image';
import {AiOutlineHeart} from 'react-icons/ai'
import ContactUS from './ContactUS'
import Comp from './Comp';
import Social from './social';
import Comp2 from './Comp2';
const Footer = () => {
    return ( 
        <div className='bg-gdsc-blue text-[white] p-4'>
            <div className='hidden md:grid md:grid-cols-5 md:items-center'>
            <div className="logo">
            <Image src={logo.src} alt="" 
            width="190" height="100"
            />
            </div>
            <div className="aboutus">
                <h1 className='text-lg lg:text-xl font-semibold pb-2'>About us</h1>
                <p className='text-sm lg:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni soluta assumenda explicabo</p>
            </div>
            <div className='flex gap-2'>
            <Comp/>
            <Comp2/>
            </div>
            
            <ContactUS/>
            <Social />
            </div>
            <div className='flex mobile flex-wrap  gap-2 p-2 md:hidden '>
                <div className='flex justify-between'>
                    <div className="logo min-w-[180px]">
                            <Image src={logo.src} alt="" 
                            width="190" height="120"
                            />
                    </div>
                    <div className="aboutus mb-2 w-[40%]">
                            <h1 className='text-base font-semibold pb-2'>About us</h1>
                            <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni soluta assumenda explicabo</p>
                    </div>
                </div>
                <div className='flex w-full justify-between'>
                    <ContactUS/>
                    <Comp2/>
                </div>
                <div className="flex justify-between w-full items-center">
                <Comp/>
                <Social />
                </div>
            </div>
            <div className='flex flex-col items-center p-4'>
                <p className='flex gap-1 items-center'>Made with <AiOutlineHeart/> by humans of GDSC USTHB</p>
                <p>Gdsc usthb - all rights reserved</p>
            </div>
        </div>
     );
}
 
export default Footer;
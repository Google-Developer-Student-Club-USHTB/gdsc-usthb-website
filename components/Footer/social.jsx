import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {AiFillTwitterSquare} from 'react-icons/ai'

const Social = () => {
return ( 
    
<div className="flex flex-col md:gap-2 items-center">
    <div>
        <p className='bg-[white] text-center w-[100px] text-sm p-2  text-gdsc-blue'>Follow Us On</p>
    </div>
    <div className='bg-[white] w-[80px] p-2 mt-2 flex justify-center gap-2'>
                    <div> <AiFillFacebook color='#4285F4' size='16'  /></div>
                    <div><BsInstagram color='#4285F4' size='15' /></div>
                    <div><AiFillTwitterSquare color='#4285F4' size='18' /></div>
    </div>
</div>
    
    );
}
 
export default Social;
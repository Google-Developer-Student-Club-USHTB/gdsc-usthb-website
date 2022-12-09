import {MdNavigateNext} from 'react-icons/md'
const Comp= () => {
    return ( 
        <div className='flex flex-col gap-2 text-[12px] lg:text-base'>
        <p className="flex gap-[1px] items-center"><MdNavigateNext color='#ffff' size='20' />Home</p>
        <p className="flex gap-[1px] items-center"><MdNavigateNext color='#ffff' size='20' />Events</p>
        <p className="flex gap-[1px] items-center"><MdNavigateNext color='#ffff' size='20' /> Member of the month</p>
        <p className="flex gap-[1px] items-center"><MdNavigateNext color='#ffff' size='20' /> Club members</p>
    </div>
     );
}
 
export default Comp;
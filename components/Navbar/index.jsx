import logo from '../../assets/Copy of Google-DSC-Lockup-LeftAligned.png'
import Image from 'next/image';
const NavBar = () => {
    return ( 
        <div>
            <Image src={logo.src} alt='logo' width='800' height='30' />
        </div>
     );
}
 
export default NavBar;
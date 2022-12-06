import bg from "../../assets/bg-contact-us.png"
import Msg from "../../assets/pic contact us.png"
import Title from '../shared/title';
const Contactus = () => {
    console.log(bg);
    return ( 
        <div  className=" w-full overflow-hidden font-IBM-Plex">
 <Title title={'Contact Us'} image={bg.src}/>

 <div className="p-4">
<form action="">
    <div className="flex justify-between p-8">
        <div className="flex flex-col gap-3">
            <div>
                <label For="name"   className="m-4 p-2 font-bold">Full Name</label>
                <br />
                <input type="text" id="name" className="mt-2 p-6 focus-visible:outline-1 outline-gdsc-blue-project bg-[white] placeholder-gdsc-blue shadow rounded-3xl h-8 w-[300px]" placeholder="Example exemple"/>
            </div>
            <div>
                <label For="email" className="m-4 p-2 font-bold">Email</label>
                <br />
                <input type="text" id="email" className="mt-2 p-6 focus-visible:outline-1 outline-gdsc-blue-project bg-[white] placeholder-gdsc-blue shadow rounded-3xl h-8 w-[300px]" placeholder="Exemple@exemple"/>
            </div>
            <div>
                <label For=""  className="m-4 p-2 font-bold">Reason Of Contact</label>
                <br />
                <select class="mt-2 p-4 block appearance-none w-[300px] text-gdsc-blue focus-visible:outline-1 outline-gdsc-blue-project bg-[white] rounded-3xl">
                    <option>option1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>
            <div>
                <label For="msg" className="font-bold">Message</label>
                <br />
                <textarea name="msg" id="msg" cols="30" rows="10" className="mt-2 p-4 resize-none"></textarea>
            </div>
        </div>
    <div className="hidden  md:max-w-[300px] md:block lg:block lg:max-w-full">
    <p className="text-center font-[25px] capitalize w-[600px] h-[155px] " > Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
   Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam
    Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea</p>

        <div className="flex justify-center">
        <img src={Msg.src} className=" w-[300px] lg:w-[400px]" /> 
        </div>
    </div>
    </div>
</form>
 </div>
        </div>
       
     );
}
 
export default Contactus;
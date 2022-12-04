import Title from '../shared/title';
import "../../assets/bg-our-projects.png"
const OurProjects = () => {
    const dumpTable=[{id:1,title:"Mobile App",text:"Developer Student Clubs are university-based community groups that help student developers learn together and work with their communities to solve real-life problems.."}
    ,{id:2,title:"Mobile App",text:"Developer Student Clubs are university-based community groups that help student developers learn together and work with their communities to solve real-life problems."},
    {id:3,title:"Mobile App",text:"Developer Student Clubs are university-based community groups that help student developers learn together and work with their communities to solve real-life problems."}
]
const bgImage=new URL('./../../assets/bg-our-projects.png',import.meta.url)
    return ( 
        <div>
                <Title title={'Our Projects'} image={bgImage}/>
            <div className="grid grid-cols-[300px] justify-center md:grid-cols-[repeat(2,300px)] lg:grid-cols-[repeat(3,300px)] gap-2 ">
            {dumpTable.map(el=>{
                return(
                    <div key={el.id} className="BG_OurProjects flex h-[400px] items-end rounded-[17px] p-4 m-3 text-center text-[#FAFAFA]">
                       <div>
                       <h1 className="text-2xl p-4 font-bold">{el.title}</h1>
                        <p className="text-sm pb-2 pl-4 pr-4 text-center">{el.text}</p>
                        <button className="p-2 text-md font-medium">Discover</button>
                       </div>
                    </div>
                )
            })}
        </div>
        </div>
     );
}
 
export default OurProjects;
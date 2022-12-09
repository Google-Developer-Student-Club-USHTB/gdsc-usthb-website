import "../../assets/left-side.png"
import "../../assets/right-side.png"

const AboutGDSC  = () => {

    const leftSide = new URL("./../../assets/left-side.png", import.meta.url);
    const rightSide = new URL("./../../assets/right-side.png", import.meta.url);
    return (
        <div className="about-gdsc mt-24 mb-32">
            <div className="text-center">
                <div className="displayflex flex justify-between align-center">
                    <span className="left-side"><img className="w-4/6" src={leftSide} alt="left-side" /></span>
                    <div className="title text-xl font-bold w-96">What is Google Developers Student Clubs</div>
                    <span className="right-side"><img className="ml-auto w-4/6" src={rightSide} alt="right-side" /></span>
                </div>
                <div className="description">
                    <div className="m-auto max-w-xl">Developer Student Club are university-based community groups that help student developers learn together and workd with hteir communities to solve real-life problems</div>
                </div>
            </div>
        </div>
    )
}

export default AboutGDSC

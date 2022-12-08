import Title from '../shared/title';
import "../../assets/we are trusted by.png"

const Image=new URL("../../assets/we are trusted by.png",import.meta.url)

const TrustedBy = () => {
    return (
        <div className='trusted-by text-center rounded-xl px-0.5 mt-16 relative z-0'>
            {/* pseudo element */}
            <div className="before" style={
                {
                    position: "absolute",
                    top: "-15px",
                    bottom: "-15px",
                    left: "0px",
                    right: "0px",
                    backgroundColor: "#4285F4",
                    zIndex: "-1",
                    borderRadius: "10px"
                }
            }></div>
            <div className='rounded-xl bg-gdsc-background'>
                <div className="container mx-auto bg-gdsc-background px-2.5 py-3.5
                                flex-col justify-between rounded-xl"
                                >
                    <div className='title capitalize text-xl font-bold text-gdsc-blue my-4' >
                        <h3>we are trusted by</h3>
                    </div>
                    <div className='trusters my-7'>
                        <img src={Image} alt="trusters" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrustedBy
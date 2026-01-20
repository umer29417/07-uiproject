
import gsap from "gsap";

const About = (props) => {

    return (
        <div className="h-90 p-2" id="box">
            <div className="h-85 w-90 p-5">
                <div className="flex justify-center items-center">
                    <img src={props.imgsrc} alt="" />
                </div>
                <h2 className="text-[30px] text-center">Business Planning</h2>
                <p className="pt-8 text-[22px] text-center">{props.tag1}</p>
                <p className="pt-2 text-[20px] text-center">{props.tag2}</p>
            </div>
        </div>
    );
};

export default About;

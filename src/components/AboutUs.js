import "./navbar.css"
import ImageSlider from "./ImageSlider";
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import yourImage from "../images/about-img.jpg";

const IMAGES = [
    { url: img1, alt: "img One" , quote: "Working towards India free of hunger and malnutrition"},
    { url: img2, alt: "img Two" , quote: "Qoute 2"},
    { url: img3, alt: "img Three", quote: "Quote 3" },
  ]

export default function AboutUs(){
    return (
        <>
            <div 
                className='image-slider-container'
                style={{
                maxWidth: "100%",
                top: 0,
                paddingBottom: "20px",
                margin: "0 auto",
                }}
            >
                <ImageSlider images={IMAGES}/>
                <h1 className="about-head">Working towards an India free of hunger and malnutrition.</h1>
            </div>
            <div className="vision">
                <h1>Our Vision</h1>
                <div className="vision-content">
                    <p>Share Meal is a non-profit organization dedicated to eradicate hunger and improve malnutrition outcomes in India.
                    <p>We work toward this mission by supporting large-scale systemic interventions as well as providing essential food support to underserved communities in the form of raw grains and freshly cooked food.</p>
                    <p>Share Meal works with on-ground non profit partners working on education and child/maternal malnutrition by providing regular meals to dependents.</p>
                    </p>
                    <img src={yourImage}/>
                </div>
                <h1>Meet the Team</h1>
                <div className="vision-content">
                    <p>meet the team members</p>
                </div>
            </div>  
        </>
    )
}


import ImageSlider from "./ImageSlider";
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";

const IMAGES = [
    { url: img1, alt: "img One" , quote: "Working towards India free of hunger and malnutrition"},
    { url: img2, alt: "img Two" , quote: "Qoute 2"},
    { url: img3, alt: "img Three", quote: "Quote 3" },
  ]

export default function Home(){
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
            <div>
                <p>Home</p>
                <div>
                    <p>dheuifheiieojvido</p>
                    <p>dheuifheiieojvido</p>
                    <p>dheuifheiieojvido</p>
                    <p>dheuifheiieojvido</p>
                    <p>dheuifheiieojvido</p>
                    <p>dheuifheiieojvido</p>
                </div>
            </div>  
        </>
    )
}

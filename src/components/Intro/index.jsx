import "./index.scss";
import sparkles from "../../assets/ShiningStars.svg";

export default function Intro(){
    return(
        <div className="intro-container">

            <div className="content-container">
                <div className="healthy-container">
                    <p className="special-text">Healthy & Tasty Food</p>
                    <br className="rectangle" />
                </div>
                <div className="heading-container">
                    <p className="heading">
                        Enjoy Healthy Life <br/> & Tasty Food.
                    
                        <img src={sparkles} className="sparkles" />
                    </p>
                </div>

                <p className="btext">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Varius sed pharetra dictum neque massa congue
                </p>

                <div className="buttons-container">
                    <button className="primary-button">Show more</button>
                    <buttton className="secondary-button">Place an order</buttton>
                </div>
            </div>

            
            <div className="scrolldown-container">
                <p className="scrolldown-text">Scrolldown</p>
                <hr className="line"/>
            </div>
        </div>
    );
}
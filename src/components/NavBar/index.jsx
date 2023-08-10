import "./index.scss";
import logo from "/food.svg";
import magnifyingglass from "../../assets/MagnifyingGlass.svg";
import user from "../../assets/User.svg";
import tote from "../../assets/Tote.svg";
import food from "../../assets/food.svg";

export default function NavBar() {
    return(
        <>
            <img src={food} className="foodpng" />
            <div className="container">

                <div className="left-container">
                    <img src={logo} />
                    <div className="options-container">
                        <p className="options">Home</p>
                        <p className="options">Menu</p>
                        <p className="options">Blog</p>
                        <p className="options">Pages</p>
                        <p className="options">About</p>
                        <p className="options">Shop</p>
                        <p className="options">Contact</p>
                    </div>
                </div>

                <div>
                    <img src={magnifyingglass} className="icon" />
                    <img src={user} className="icon" />
                    <img src={tote} className="icon" />                
                </div>
            </div>
        </>
    );
}
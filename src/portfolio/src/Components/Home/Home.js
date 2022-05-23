import "../../Resources/shared.css";
import "./Home.css";
import NavBar from "../Navbar/Navbar";
import Button from "../Button/Button";

export default function Home(){
    return(
        <div>
            <NavBar/>
            <div className="home_content">
                <div className="home_list">
                    <Button type="about"/>
                    <Button type="live"/>
                    <Button type="timeline"/>
                    <Button type="releases"/>
                </div>
            </div>
        </div>
    )
}
import {react,useState} from "react"
import {useHistory} from "react-router-dom"
import testlogo from '../../assets/peerone.jpeg'
import'./header.css'

const Header = () => {
    const history = useHistory();
    const [buttontxt,changeText] = useState("Blog")

    const screenHandler = () => {
        const size = window.screen.width;
        if (size < 981) {
            window.scrollTo({top:1020,behavior:'smooth'})
        }
        else {
            window.scrollTo({top:750,behavior:'smooth'})
        }
    }

    const textChange = (e) => {
        // USE USE EFFECT
        changeText(e)
    }

    const routeChange = () => { 
        let path = "";
        const currpath = window.location.href;
        if (currpath.substring(currpath.lastIndexOf('/') + 1) === "blog")
        {   
            path = "/"
            history.goBack();
            textChange("Home")
        }
        else
        {   
            path = "/blog"
            history.push(path);
            textChange("Blog")
        }
    }
     
    return(
        <div className="elements">
            <div className="browsecomponent">
                <img src={testlogo} id="logo" />
                    <button className="routerbutton" onClick={() => {routeChange();}}>{buttontxt}</button>
                    <a id="browsebutton" href="" onClick={(e)=>{e.preventDefault(); screenHandler();}}>Browse Mentors</a>
            </div>
        </div>
    )
}

export default Header
import {FaPython, FaDocker, FaReact} from "react-icons/fa";
import {SiJavascript} from "react-icons/si"
import "./Badge.css";
import { Tooltip } from 'react-tooltip'

export default function Badge(props:any){
    if(props.type === "python"){
        return(
            <>
            <FaPython id={props.project + "_" + props.type} className="badge hvr-float" size={30} color={"white"} />
            <Tooltip anchorId={props.project + "_" + props.type} content={props.type} place="bottom" style={{ backgroundColor: "#636262"}}/>
            </>
        )
    }
    if(props.type === "javascript"){
        return(
            <>
            <SiJavascript id={props.project + "_" + props.type} className="badge hvr-float" size={30} color={"white"} />
            <Tooltip anchorId={props.project + "_" + props.type} content={props.type} place="bottom" style={{ backgroundColor: "#636262"}}/>
            </>
        )
    }
    if(props.type === "docker"){
        return(
            <>
            <FaDocker id={props.project + "_" + props.type} className="badge hvr-float" size={30} color={"white"} />
            <Tooltip anchorId={props.project + "_" + props.type} content={props.type} place="bottom" style={{ backgroundColor: "#636262"}}/>
            </>
        )
    }
    if(props.type === "react"){
        return(
            <>
            <FaReact id={props.project + "_" + props.type} className="badge hvr-float" size={30} color={"white"} />
            <Tooltip anchorId={props.project + "_" + props.type} content={props.type} place="bottom" style={{ backgroundColor: "#636262"}}/>
            </>
        )
    }
    return(
        <p>error</p>
    )
}
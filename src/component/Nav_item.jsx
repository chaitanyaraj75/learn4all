import { useNavigate } from "react-router-dom";

function Nav_item(props){
    const navigate = useNavigate();
    function handleClick() {
        if (props.title === "Home") {
            navigate("/");
        } else navigate(`/${props.title.toLowerCase()}`);
    }
    return(
        <li onClick={()=> {handleClick()}} className={`hover:text-blue-800 hover:underline underline-offset-8 transition duration-200 cursor-pointer ${props.heading === props.title ? "text-blue-500" : ""}`}>{props.title}</li>
    )
}

export default Nav_item;
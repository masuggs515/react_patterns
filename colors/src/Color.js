import { Redirect, useParams } from "react-router";
import { Link } from "react-router-dom";
import './Color.css'


const Color = ({colors}) => {
    const colorName = useParams();
    const filtered = colors.filter(color => color === colorName.color);
    const color = filtered[0]
    if(!color) return <Redirect to='/colors'/>
    return (
        <div className='Color' style={{backgroundColor: color}}>
            <h1>{color}</h1>
            <Link to='/color'>Back to Color List</Link>
        </div>
    );
};

export default Color;
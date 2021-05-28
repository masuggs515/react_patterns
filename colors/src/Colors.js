import { NavLink, Link } from "react-router-dom"

const Colors = ({ colors }) => {
    const listOfColors = colors.map(color => {
        return (
            <li key={color}>
                <NavLink to={`/colors/${color}`}>{color}</NavLink>
            </li>
        )
    })

    return (
        <div className='Colors'>
            <Link to='/colors/new'>Add Color Form</Link>
            <ul>
                {listOfColors}
            </ul>
        </div>
    );
};

export default Colors;
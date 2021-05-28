import { NavLink } from "react-router-dom"


const NavBar = ({dogs}) =>{
    const navLinks = dogs.dogs.map(dog =>{
       return <NavLink to={`/dogs/${dog.name}`} key={dog.name}>{dog.name}</NavLink>
    })
    return (
        <div className='NavBar'>
            <NavLink to='/dogs'>All Dogs</NavLink>
            {navLinks}
        </div>
    );
};

export default NavBar;
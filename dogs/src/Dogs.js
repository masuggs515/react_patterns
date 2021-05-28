import { Link } from "react-router-dom";

const Dogs = ({dogs}) =>{
    const allDogs = dogs.dogs.map(dog =>{
        return(
            <div className='Dogs-dog' key={dog.name}>
                <Link to={`/dogs/${dog.name}`} >
                <h4>{dog.name}</h4>
                <img src={dog.src} alt={dog.name}/>
                </Link>
            </div>
        )
    })
    return (
    <div className='Dogs'>
        {allDogs}
    </div>
    );
};

export default Dogs;
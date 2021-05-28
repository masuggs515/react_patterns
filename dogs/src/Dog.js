import { Redirect, useParams } from "react-router";


const Dog = ({ dogs }) => {
    const { name } = useParams();
    const currentDog = dogs.dogs.filter(dog => dog.name === name);
    const dog = currentDog[0];
    if (!dog) return <Redirect to='/dogs' />
    const facts = dog.facts.map(fact => {
        return (
            <li key={fact}>{fact}</li>
        )
    })
    return (
        <div className='Dog'>
            <h1>Meet {dog.name}</h1>
            <h3>Age: {dog.age}</h3>
            <ul>
                {facts}
            </ul>
            <img src={dog.src} alt={dog.name} />

        </div>
    );
};

export default Dog;
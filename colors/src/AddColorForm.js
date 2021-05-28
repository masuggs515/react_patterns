import { useState } from "react";
import { useHistory } from "react-router";

const AddColorForm = ({ addColor }) => {
    const [input, setInput] = useState('')
    const history = useHistory();

    const handleSumbit = (e) => {
        e.preventDefault();
        addColor(input);
        setInput('');
        history.push('/colors')
    }
    return (
        <div>
            <h1>Add Color Form</h1>
            <form onSubmit={handleSumbit}>
                <input type='text' name='color' value={input}
                    onChange={e => setInput(e.target.value)} />
                <button type='submit'>Add Color</button>
            </form>
        </div>
    );
};

export default AddColorForm;
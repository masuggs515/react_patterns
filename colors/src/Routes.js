import { Redirect, Route, Switch } from "react-router"
import Colors from './Colors'
import Color from './Color'
import AddColorForm from './AddColorForm'
import { useState } from "react";


const Routes = () => {

    const[colors, setColors] = useState(["red", "blue", "green"]);

    const addColor = color => {
        setColors([...colors, color])
    }
    return (
        <div className='Routes'>
            <Switch>
                <Route path='/colors/new'><AddColorForm addColor={addColor} /></Route>
                <Route path='/colors/:color'><Color colors={colors} /></Route>
                <Route exact path='/colors'><Colors colors={colors} /></Route>
                <Redirect to='/colors' />
            </Switch>
        </div>
    );
};

export default Routes;
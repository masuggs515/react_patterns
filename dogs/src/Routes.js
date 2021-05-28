import { Redirect, Route, Switch } from "react-router";
import Dog from './Dog';
import Dogs from './Dogs';

const Routes = ({ dogs }) => {
    return (
        <div className='Routes'>
            <Switch>
                <Route exact path='/dogs/:name'><Dog dogs ={dogs}/></Route>
                <Route path='/dogs' ><Dogs dogs={dogs}/></Route>
                <Redirect to='/dogs' />
            </Switch>
        </div>
    );
};

export default Routes;
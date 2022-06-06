import { Switch, Route } from "react-router-dom"; 

import Home from './routes/Home'; 
import SeasonInfo from './routes/SeasonInfo'; 
import ServerPCSpecs from './routes/ServerPCSpecs'; 
import About from './routes/About'; 
import Rules from './routes/Rules'; 
import HowToJoin from './routes/HowToJoin'; 
import Announcements from './routes/Announcements'; 

export default function AllRoutes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/season-info" component={SeasonInfo} /> 
            <Route exact path="/server-pc-specs" component={ServerPCSpecs} /> 
            <Route exact path="/about" component={About} /> 
            <Route exact path="/rules" component={Rules} /> 
            <Route exact path="/how-to-join" component={HowToJoin} /> 
            <Route exact path="/announcements" component={Announcements} /> 
        </Switch>
    ); 
}
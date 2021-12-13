import { Switch, Route } from "react-router-dom"
import ErrorPage from "../pages/Error/Error"
import Home from "../pages/Home/Home"


const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />    
            </Route>
            <Route>
                <ErrorPage />   
            </Route>
        </Switch>
    )
}

export default Router;
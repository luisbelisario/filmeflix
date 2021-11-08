import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Filme from './pages/Filme'
import Favoritos from './pages/Favoritos'
import Erro from './pages/Erro'


const Routes = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/filme/:id">
                    <Filme/>
                </Route>
                <Route exact path="/favoritos">
                    <Favoritos/>
                </Route>
                <Route path="*" component={Erro}/>
            </Switch>
        </Router>
    )
}

export default Routes
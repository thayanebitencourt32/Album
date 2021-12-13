
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from './style'
import Router from './routes/Router'
import {Route} from 'react-router-dom/Route';


  const App = () => {
    return (
    <AppContainer>
  
      <BrowserRouter>
        <Router />
      </BrowserRouter>

    </AppContainer>
  )
    }

export default App;
// import logo from './logo.svg';
import './App.css';
// import "./categories.styles.scss"
import { BrowserRouter } from 'react-router-dom';
// import Directory from './components/directory/directory.component';
import Home from './routes/home/home.component';
import {Routes,Route,Outlet} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';
const App=()=> {

return (
  <Routes>
    <Route path="/" element={<Navigation />}>
    <Route index element={<Home/>}/>
    <Route path="sign-in" element={<SignIn/>}/>
    </Route>
    
  </Routes>
)

 
}

export default App;

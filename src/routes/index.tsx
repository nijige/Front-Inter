import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

export const Router = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/home';
// @ts-ignore
import Login from './routes/login';
import Dash from './routes/dash/index.jsx';
import Signup from './routes/signup';
// @ts-ignore
import Nav from './components/navbar.jsx'
import Error from './routes/404/index.jsx'
import Contact from './routes/contact/index.jsx'
import { Divider } from '@nextui-org/react';

function App() {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/login" Component={Login} />
                    <Route path="/signup" Component={Signup} />
                    <Route path="/dashboard" Component={Dash} />
                    <Route path='/contact' Component={Contact}/>
                    <Route path="*" Component={Error}></Route>
                </Routes>
            </BrowserRouter>
            <Divider/>
            <footer className="mt-3 pb-4 text-center">Made by team BYTEOVERFLOW</footer>
        </>
    );
}

export default App;

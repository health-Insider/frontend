// import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/home';
import Login from './routes/login';
import Dash from './routes/dash';
import Signup from './routes/signup';
import Nav from './components/navbar.jsx'
import { Divider } from '@nextui-org/react';

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/login" Component={Login} />
                    <Route path="/signup" Component={Signup} />
                    <Route path="/dashboard" Component={Dash} />
                </Routes>
            </BrowserRouter>
            <Divider/>
            <footer className="mt-3 pb-4 text-center">Made by team BYTEOVERFLOW</footer>
        </>
    );
}

export default App;

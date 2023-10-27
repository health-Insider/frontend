import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/home';
import Login from './routes/login';
import Dash from './routes/dash';

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/login" Component={Login} />
                    <Route path="/dashboard" Component={Dash} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

import express from 'express';
import login from './auth/login.js';
import logout from './auth/logout.js';
import dailystats from './tracker/dailystats.js';
import monthlystats from './tracker/monthlystats.js';
const server = express();

server.listen(process.env.PORT ?? '3000', () => {
    console.log('App active');
});

server.use(express.static('./../dist '));

server.get('/api/auth/login', async (req, res) => {
    await login(req, res);
});

server.post('/api/auth/logout', async (req, res) => {
    await logout(req, res);
});

server.get('/api/tracker/dailystats', async (req, res) => {
    await dailystats(req, res);
});

server.get('/api/tracker/monthlystats', async (req, res) => {
    await monthlystats(req, res);
});

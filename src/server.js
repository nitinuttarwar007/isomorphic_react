import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './components/App'
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.get('*', (req, res) => {
    const context = {};
    res.render('layout', {
        content: ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <App/>
            </StaticRouter>
        )
    });
});
app.listen(3000, () => console.log('App listening at 3000'));

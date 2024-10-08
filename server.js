const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {

    console.log(req.query.code);
    axios.post(`https://gitee.com/oauth/token`, {
        grant_type: 'authorization_code',
        code: `${req.query.code}`,
        client_id: '37d0a28b705ae4f2b93d2710ef911647c4611af0c5a7729b2604900930cee8bf',
        redirect_uri:'http://localhost:8088/',
        client_secret: 'dbebd081da34d3ef92b51f1a49ed5ad519a6b0a7ddc233d9cb3900f82fb542d5',

    }, {
        Headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    )
        .then(res => { console.log(res); })
    res.send('Hello World')
})
app.get('/oauth/redirect', (req, res) => {
    // console.log(req);
    res.send('/oauth/redirect')
})




app.listen(8088, () => {
    console.log('http://localhost:8088');
})
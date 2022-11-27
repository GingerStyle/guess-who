const express = require('express');

const app = express();
const port = 5001;

app.use(express.static('server/public'));

app.listen(port, () => {
    console.log('listening on port', port);
});

app.get('/peopleArray', function(req, res){
    console.log('request for /peopleArray was made');
    res.send(people);
});
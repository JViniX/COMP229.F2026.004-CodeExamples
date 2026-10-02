const connect = require('express');

const app = connect();

function logger(req, res, next){
    console.log(req.method, req.url);

    next();
}

function helloWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello World');
};

function goodBye(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Good bye');
};

function notfound(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Not Found');
};

const temp = {
    name: "John Smith",
    email: "john@smith.ca"
}
function getUser(req, res, next){

    res.json(temp);
}

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodBye);
app.use('/getuser', getUser)

app.get('/api/users/:id', (req, res, next) => {
    console.log("===> User ID: " + req.params.Id);

    res.send("===> User ID: " + req.params.Id);
})

app.use(notfound);

app.listen(3000);

console.log('Server running at http://localhost:3000/');
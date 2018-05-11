const routes = (app) => {
    app.route('/artist')
    .get((req, res, next) =>{
        //middleware
        console.log(`Request from ${req.originalUrl}`);
        console.log(`Request from ${req.method}`);
        next();
    }, (req, res, next) => {
        res.send('GET request successful!')
    })
    .post((req, res) =>
    res.send('POST request successful!'));


    app.route('/artist/:contactId')
    .put((req, res) =>
        res.send('PUT request successful!'))
    .delete((req, res) =>
    res.send('DELETE request successful!'));
    
}

export default routes;
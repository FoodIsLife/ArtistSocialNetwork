import { addNewUser } from "../controllers/userController";

const routes = (app) => {

    //home
    app.route('/')
    .get((req,res,next)=>{
        console.log(`Request from ${req.originalUrl}`);
        console.log(`Request from ${req.method}`);
        next();
    }, (req, res, next) => {
        res.send('GET request successful!')
    });

    //login
    app.route('/login')
    .get((req, res, next) =>{
        //middleware
        console.log(`Request from ${req.originalUrl}`);
        console.log(`Request from ${req.method}`);
        next();
    }, (req, res, next) => {
        res.send('GET request successful!')
        //displaylogin form
    })
    .post((req, res) =>
        res.send('POST request successful!'
    ));

    //signup
    app.route('/signup')
    .get((req, res, next) =>{
        //middleware
        console.log(`Request from ${req.originalUrl}`);
        console.log(`Request from ${req.method}`);
        next();
    }, (req, res, next) => {
        res.send('GET request successful!')
        //display signup form
    })
    //POST endpoint
    .post(addNewUser);



    app.route('/user')
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




    //todo: for edit and delete
    app.route('/artist/:contactId')
    .put((req, res) =>
        res.send('PUT request successful!'))
    .delete((req, res) =>
    res.send('DELETE request successful!'));
    
}

export default routes;
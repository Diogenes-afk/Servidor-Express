module.exports= (app => {

        app.get('/', (req, res) => {
                 res.statusCode = 200;
                res.setHeader('content-type', 'text/html');

                res.end('<h1> Servidor utilizando node.js </h1>');
        });


    });
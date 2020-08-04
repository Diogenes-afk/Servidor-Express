module.exports= {
        user:(app, req, res) =>{
                req.assert('name', 'O nome é obrigatorio.').notEmpty();
                req.assert('email', 'O email é obrigatorio.').notEmpty().isEmail();

            let erros = req.ValidationErrors();
            
            if (erros) {

                app.utils.error.send(erros, req, res);
                return false;
            }else{

                return true;
            }
        }

}
const Users = require('../models/users');

exports.add = async(req, res)=>{
    const user = new Users(req.body)
    try{
        await
        user.save()
        res.json("Nuevo usuario agregado");
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
}

exports.list = async(req, res)=>{
    try{
        const users = await
        Users.find({})
        res.status(200).json(users);
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
}

exports.login = async(req, res)=>{
    try{
        const users = await
        Users.findOne({codigo:req.body.codigo})
        const passwordDeco= new Buffer.from(users.password, 'base64').toString();
        const password= new Buffer.from(req.body.password, 'base64').toString();
        if(password===passwordDeco){
            res.status(200).json({
                message:'validado'
            });
        }else{
            res.status(200).json({
                message:'invalido'
            });
        }
        if(!users){
            res.status(200).json({
                message:'El usuario no existe'
            });
        }
    }catch(error){
        console.log(error);
        res.status(200).json({
            message:'El usuario no existe'
        });
    }
}

exports.show = async(req, res)=>{
    try{
        const users = await
        Users.findOne({codigo:req.body.codigo})
        // console.log("entro",users);
        if(!users){
            res.status(200).json({
                message:'El usuario no existe',
            });
        }else{
            res.status(200).json(users);
        }
    }catch(error){
        console.log(error);
        res.status(200).json({
            message:'Se ha presentado un erorr al ejecutar la petición'
        });
    }
}

exports.update = async(req, res)=>{
    try{
        const users = await
        Users.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            {new:true}
        );
        res.status(200).json({
            message:'El usuario se ha actualizado',
            status:true,
        });
    }catch(error){
        console.log(error);
        res.status(200).json({
            message:'Se ha presentado un erorr al ejecutar la petición',
            status:false,
        });
    }
}
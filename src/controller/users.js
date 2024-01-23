const UsersModel = require("../models/users");

const getAllUsers = async (req,res)=>{
    const [data] = await UsersModel.getAllUsers();
    try{
        res.json({
            message:'Get All Users Success',
            data : data
        });

    }
    catch(err){
        res.status(500).json({
            message:'Server Error',
            serverError : err
        });
    }
}

const createNewUser = async (req,res)=>{
    const {body} = req;

    if(!body.name || !body.email || !body.password){
        return res.status(400).json({
            message : "Data masih salah",
            data : null
        });
    }

    try{
        await UsersModel.createNewUser(body);
        res.status(201).json({
            message:'Create New User Success',
            data : body
        });

    }
    catch(err){
        res.status(500).json({
            message:'Server Error',
            serverError : err
        });
    }
}

const updateUser = async (req,res)=>{
    const {body} = req;
    const {id} = req.params
    try{
        await UsersModel.updateUser(body,id);
        res.status(200).json({
            message:'Update User Success',
            data : {
                id,
                ...body
            }
        });

    }
    catch(err){
        res.status(500).json({
            message:'Server Error',
            serverError : err
        });
    }
}

const deleteUser = async (req,res)=>{
    const {id} = req.params;

    try{
        await UsersModel.deleteUser(id);
        res.json({
            message:'Delete User Success',
            data :null
        });

    }
    catch(err){
        res.status(500).json({
            message:'Server Error',
            serverError : err
        });
    }
}

module.exports = {getAllUsers,createNewUser,updateUser,deleteUser};
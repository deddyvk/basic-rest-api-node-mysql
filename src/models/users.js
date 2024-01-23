const dbPool = require("../config/db");

const getAllUsers = ()=>{
    const sqlQuery = "SELECT * FROM users";
    return dbPool.execute(sqlQuery);
}

const createNewUser = (body)=>{
    const sqlQuery = `INSERT INTO users(name,email,password) values('${body.name}','${body.email}','${body.password}')`;
    return dbPool.execute(sqlQuery);
}

const updateUser = (body,id)=>{
    const sqlQuery = `UPDATE users SET name='${body.name}', email='${body.email}', password='${body.password}' where id=${id} `;
    return dbPool.execute(sqlQuery);
}

const deleteUser = (id)=>{
    const sqlQuery = `DELETE from users where id=${id}`;
    return dbPool.execute(sqlQuery);
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}
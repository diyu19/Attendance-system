import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config()
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'school'
}).promise()

export async function  getData(){

    const [res]=await pool.query("select * from user")
    return res
}
export async function getDataId(id){
    const [res]=await pool.query(`select * from user where id=?`,[id])
    return res
}
export async function createUser(id,name,address,role){
  const create= await pool.query(` insert into user(id,name,address,role)
    Values(?,?,?,?) `,[id,name,address,role])
    const iid=create.id
    return getDataId(iid)

}


export async function UpdateUser( name, address,id){
    const update = await pool.query(
        `UPDATE user SET name = ?, address = ? WHERE id = ?`,
        [name, address,id]
    );
    // Return the updated user data to confirm the changes
    
    return update;
}
export async function DeleteUser(id) {
    const del = await pool.query(`DELETE FROM user WHERE id = ?`, [id]);
    return { message: `User with id ${id} deleted successfully.` };
}
const data=await getData();
const getId=await getDataId(2)
const update=await UpdateUser('Tushar','pune',1)

    // const del = await DeleteUser(3);
    // console.log(del);
console.log(update)
console.log(data)

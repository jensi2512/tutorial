import axios from "axios";

const API = "http://localhost:3000/users"
async function postUser(obj){
  await axios.post(API, obj)
}

async function getUser(){
    const response = await axios.get(API)
    return response.data
}

async function deleteUser(id) {
    await axios.delete(`${API}/${id}`)
}

async function editUser(id, obj){
    await axios.put(`${API}/${id}`, obj)
}

export {postUser, getUser, deleteUser, editUser}
import  axios from 'axios'

const API = "http://localhost:3002/users"

async function getData(){
  const response =  await axios.get(API)
  return response.data
}

async function postData(obj){
  try {
    await axios.post(API, obj)
  } catch (error) {
    console.log(error)
  }
}

async function deleteData(id){
  try {
    await axios.delete(`http://localhost:3002/users/${id}`)
  } catch (error) {
    console.log(error)
  }
}


export {getData, postData, deleteData}
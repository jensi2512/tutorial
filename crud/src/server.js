import  axios from 'axios'


async function getData(){
  const response =  await axios.get("http://localhost:3002/users")
  return response.data
}


export {getData}
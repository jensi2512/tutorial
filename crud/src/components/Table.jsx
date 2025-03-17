import { useNavigate } from "react-router-dom"
import { getData, deleteData } from "../server"
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';
function Table() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [pageRefresh, setPagerefresh] = useState(false)


  useEffect(() => {
    async function fetchData(){
      const response  = await getData()
      setData(response)
    }
    fetchData()
    setPagerefresh(false)
  }, [pageRefresh])

  async function handleDelete(id){
    toast.dismiss()
    await deleteData(id)
    toast.success(`${id} User delete successfully`)
    setPagerefresh(true)
  }


  return (
    <div>
        <div className="container mt-5">
            <div className="row">
               <div className="col-7 m-auto">
               <button className="btn btn-outline-info" onClick={() => navigate('/form')}>Add User</button>
                   <table className="table">
                      <thead>
                         <tr>
                           <th>No.</th>
                           <th>Username</th>
                           <th>Email</th>
                           <th>Mobile</th>
                           <th>Action</th>
                         </tr>
                      </thead>
                        <tbody>
                            {data.length > 0 && data.map((element, index) => {
                              return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{element.username}</td>
                                    <td>{element.email}</td>
                                    <td>{element.mobile}</td>
                                    <td>
                                      <button className="btn"><i className="bi bi-pencil-square text-primary fs-5"  ></i></button>
                                      <button className="btn" onClick={() => handleDelete(element.id)}><i className="bi bi-trash3 text-danger fs-5" ></i></button>
                                    </td>
                                </tr>
                              )
                            })}
                        </tbody>
                   </table>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Table

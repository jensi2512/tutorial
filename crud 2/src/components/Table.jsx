import React, { useEffect, useState } from 'react'
import { deleteUser, getUser } from '../server'
import { useNavigate } from 'react-router-dom'
import EditModal from './EditModal'
function Table() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [pageRefresh, setPageRefresh] = useState(false)
    const [editObj, setEditObj] = useState({})
    const [edit, setEdit] = useState(false)
    useEffect(() => {
        async function fetchUsers() {
            const response = await getUser()
            setData(response)
        }
        fetchUsers()
        setPageRefresh(false)
    }, [pageRefresh])

    async function handleDelete(id) {
        await deleteUser(id)
        setPageRefresh(true)
    }

    function handleEdit(id) {
        const obj = data.find(element => element.id === id)
        setEditObj(obj)
        setEdit(true)
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-5 m-auto">
                        <button onClick={() => navigate('/form')} className='btn btn-info'>Add user</button>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 && data.map((element) => (
                                    <tr key={element.id}>
                                        <td>{element.username}</td>
                                        <td>{element.email}</td>
                                        <td>
                                            <button onClick={() => handleEdit(element.id)} className='btn text-primary' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                            <button className='btn text-danger' onClick={() => handleDelete(element.id)}>
                                                <i className="bi bi-trash3-fill"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <EditModal
                editObj={editObj}
                setPageRefresh={setPageRefresh}
                setEdit={setEdit}
                edit={edit}
            />
        </div>
    )
}

export default Table

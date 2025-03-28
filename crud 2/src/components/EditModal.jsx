import React, { useEffect, useState } from 'react'
import { editUser } from '../server'
function EditModal(props) {
    const { editObj,setPageRefresh,setEdit, edit } = props
    const [formData, setFormData] = useState({ username: "", email: "" })

    function handleChange(e) {
        setFormData(preval => ({ ...preval, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        setFormData({username : editObj.username, email : editObj.email})
        console.log(editObj)
        setEdit(false)
    }, [edit])

    async function handleSubmit(e) {
        e.preventDefault()
        await editUser(editObj.id, formData)
        setPageRefresh(true)
    }
    return (
        <div>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" onSubmit={handleSubmit}>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name='username' value={formData.username} onChange={handleChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" aria-label="email" aria-describedby="basic-addon1" name='email' value={formData.email} onChange={handleChange} />
                                </div>
                                <button className='btn btn-success' type='submit' data-bs-dismiss="modal">Submit</button>
                                <button type="button" className="btn ms-4 btn-secondary" data-bs-dismiss="modal">Close</button>
                            </form>
                        </div>
                        <div className="modal-footer">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal

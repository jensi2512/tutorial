import { useEffect, useState } from "react"
import { editData } from "../server"

function EditForm({editObj, edit, setEdit, setPagerefresh}) {
    
    const [formData, setFormData] = useState({ username: editObj.username, email: editObj.email, mobile: editObj.mobile })
    
    function handleChange(e) {
        setFormData(preval => ({...preval, [e.target.name] : e.target.value}))
     }

    async function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        await editData(editObj.id, formData)
        setPagerefresh(true)
    }
    useEffect(() => {
        setFormData({ username: editObj.username, email: editObj.email, mobile: editObj.mobile})
        setEdit(false)
    }, [edit])
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" onSubmit={handleSubmit}>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="username" value={formData.username} onChange={handleChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" name="email" value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="tel" className="form-control" placeholder="Mobile" aria-label="Username" aria-describedby="basic-addon1" name="mobile" value={formData.mobile} onChange={handleChange} />
                                </div>
                                <div className="modal-footer">

                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditForm

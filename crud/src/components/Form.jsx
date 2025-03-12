import { useNavigate } from "react-router-dom"
import { postData } from "../server"
import { useState } from "react"
import { toast } from 'react-toastify';

function Form() {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({username : "", email : "", mobile : ""})

    function handleChange(e){
        setFormData(preval => ({...preval, [e.target.name] : e.target.value}))
    }

   async function handleSubmit(e){
        e.preventDefault()
        await postData(formData)
        toast.success("User add Successfully")
        setFormData({username : "", email : "", mobile : ""})
        navigate('/')
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-5 m-auto">

                        <form action="" onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="username" value={formData.username} onChange={handleChange} required/>
                            </div>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" aria-label="email" aria-describedby="basic-addon1" name="email" value={formData.email} onChange={handleChange} required/>
                            </div>
                            <div className="input-group mb-3">
                                <input type="tel" className="form-control" placeholder="Mobile" aria-label="Mobile" aria-describedby="basic-addon1" name="mobile" value={formData.mobile} onChange={handleChange} required/>
                            </div>
                        <button className="btn btn-success" type="submit">Sunmit</button>
                        <button className="btn btn-warning ms-3" onClick={() => navigate('/')}>Close</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form

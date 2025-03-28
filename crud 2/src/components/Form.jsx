import React, { useState } from 'react'
import { postUser } from '../server'
import { useNavigate } from 'react-router-dom'

function Form() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({username : "", email : ""})
    function handleChange(e){
        setFormData(preval => ({...preval, [e.target.name] : e.target.value}))
        
    }

    async function handleSubmit(e){
        e.preventDefault()
        await postUser(formData)
        setFormData({username : "", email : ""})
        navigate('/')
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-5 m-auto">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name='username' value={formData.username} onChange={handleChange} />
                            </div>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" aria-label="email" aria-describedby="basic-addon1" name='email' value={formData.email} onChange={handleChange} />
                            </div>
                            <button className='btn btn-success' type='submit'>Submit</button>
                            <button className='btn btn-warning ms-3' type='submit' onClick={() => navigate('/')}>Close</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form

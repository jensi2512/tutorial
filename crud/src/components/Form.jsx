import { useNavigate } from "react-router-dom"

function Form() {

    const navigate = useNavigate()

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-5 m-auto">
                        
                        <form action="">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" aria-label="email" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="tel" className="form-control" placeholder="Mobile" aria-label="Mobile" aria-describedby="basic-addon1" />
                            </div>
                        </form>
                        <button className="btn btn-success">Sunmit</button>
                        <button className="btn btn-warning ms-3" onClick={() => navigate('/')}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form

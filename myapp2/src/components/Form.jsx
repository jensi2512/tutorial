import { useState } from "react"


function Form() {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [data, setData] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    setData((preval) => [...preval, { username, email }])
    setEmail("")
    setUsername("")
  }

  function handleUsername(e) {
    setUsername(e.target.value)
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5 m-auto">
            <form action="" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={username} onChange={handleUsername} />
              </div>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" value={email} onChange={handleEmail} />
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-5 m-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 && data.map((ele, index) => (
                  <tr key={index}>
                    <td>{ele.username}</td>
                    <td>{ele.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form

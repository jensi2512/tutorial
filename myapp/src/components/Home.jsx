function Home(){

    // const username = "Hello world"
    // const color = "blue"
    // const val = true
    // const x = 10 == 11 ? "true" : "false"
    // console.log(x)


    const user = ["hello", "hii", "namaste"]
    const users = [
        {name : "hello", age : 21},
        {name : "Hii", age : 25},
        {name : "hello", age : 21},
        {name : "Hii", age : 25},
        {name : "hello", age : 21},
        {name : "Hii", age : 25},
        {name : "hello", age : 21},
        {name : "Hii", age : 25},
    ]

    return (
        <>
          {/* <h1>Home</h1>
          <h1>{username}</h1>
          <h1 style={{color : color}}>Hii</h1>
          <h1 style={val ? {color : "green"} : {color : "red"}}>Hii</h1> */}

          {
            user.map((element, index) => {
                return <h1 key={index}>{element}</h1>
            })
          }
        <hr />
           <table border={1}>
               <thead>
                  <tr>
                    <th>Username</th>
                    <th>Age</th>
                  </tr>
               </thead>
               <tbody>
                    {
                        users.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{element.name}</td>
                                    <td>{element.age}</td>
                                </tr>
                            )
                        })
                    }
               </tbody>
           </table>
        </>
    )
}


export default Home;
import Table from "./Table"

function Home() {
    const user = {
        name : "Hello",
        age : 21
      }

      const username = "Hii"

    function getData(arr){
        console.log(arr)
    }  
    
  return (
    <div>
      <h1>Home</h1>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <hr />
      <Table xyz={user} username={username} getData={getData}/>
    </div>
  )
}

export default Home

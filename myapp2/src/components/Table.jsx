

function Table(abc) {
    const {xyz, username, getData} = abc
    const num = [1, 2, 3, 4, 5]
    getData(num)

  return (
    <div>
      <h1>Table</h1>
      <h1>{xyz.name}</h1>
      <h1>{xyz.age}</h1>
      <h1>{username}</h1>
    </div>
  )
}

export default Table

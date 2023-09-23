const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const friends = [
    {name: 'Peter', age: 4},
    {name: 'Maya', age: 10},
    {name: 'Hola', age: 11}
  ]

  return (
    <>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{friends[2].name} {friends[2].age}</p>
    </>
  )
}

export default App  

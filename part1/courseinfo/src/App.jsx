const Header = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.desc} {props.number}</p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part desc = {props.text[0].desc} number = {props.text[0].number} />
      <Part desc = {props.text[1].desc} number = {props.text[1].number} />
      <Part desc = {props.text[2].desc} number = {props.text[2].number} />
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.sum}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const exercises = [
    {desc: 'Fundamentals of React', number: 10},
    {desc: 'Using props to pass data', number: 7},
    {desc: 'State of a component', number: 14}
  ]
  const aux = exercises[0].number + exercises[1].number + exercises[2].number

  return (
    <div>
      <Header title = {course}/>
      <Content text = {exercises}/>
      <Total sum = {aux} />
    </div>
  )
}

export default App
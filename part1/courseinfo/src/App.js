
const Header = (props) => {
  return (
    <div><h1>{props.course}</h1></div>
  )
}

const Part = (props) => {
  return (
    <div><p>{props.part}{props.exercices}</p></div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercices={props.exercices1}/>
      <Part part={props.part2} exercices={props.exercices2}/>
      <Part part={props.part3} exercices={props.exercices3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div><p>Number of exercices {props.exercices1 + props.exercices2 + props.exercices3}</p></div>
  )
}

const App = () => {
  const course = {
   name : 'Half Stack application developpement',
   parts :[
    {
      name :'Fundamantals of React',
      exercices:10
    },
   {
      name :'Using props to pass data',
      exercices:7
    },
     {
      name :'State of a component',
      exercices:14
    }
  
  ]
}
  
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts.exercices} />
    </div>
  )
}

export default App;

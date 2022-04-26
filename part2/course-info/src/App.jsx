import Course from './components/Course'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2,
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3,
    },
  ]
  //const Total = ({ sum }) => <p>Number of exercises {sum}</p>

  return (
    <div>
      <Course course={course} parts={parts} />
      {/* <Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises} /> */}
    </div>
  )
}

export default App

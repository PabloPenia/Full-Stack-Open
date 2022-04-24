import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course={course} />
      <Content>
        <Part part={part1} number={exercises1} />
        <Part part={part2} number={exercises2} />
        <Part part={part3} number={exercises3} />
      </Content>
      <Total ex={[exercises1, exercises2, exercises3]} />
    </div>
  )
}
const Header = ({ course }) => <h1>{course}</h1>
const Content = ({ children }) => children
const Part = ({ part, number }) => <p>{`${part} ${number}`}</p>
const Total = ({ ex }) => <p>Number of exercises {ex[0] + ex[1] + ex[2]}</p>
// render application
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

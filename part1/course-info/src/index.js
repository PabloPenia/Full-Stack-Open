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
        <p>
          {part1} {exercises1}
        </p>
        <p>
          {part2} {exercises2}
        </p>
        <p>
          {part3} {exercises3}
        </p>
      </Content>
      <Total ex={[exercises1, exercises2, exercises3]} />
    </div>
  )
}
const Header = course => <h1>{course}</h1>
const Content = ({ children }) => {
  return children
}
const Total = ({ ex }) => {
  return <p>Number of exercises {ex[0] + ex[1] + ex[2]}</p>
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

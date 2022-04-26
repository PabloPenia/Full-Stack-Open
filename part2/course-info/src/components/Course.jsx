const Header = ({ title }) => <h2>{title}</h2>
const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
)

const Content = ({ parts }) => (
  <>
    {parts.map(part => (
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    ))}
  </>
)
const Total = ({ parts }) => {
  let sum = parts.reduce((prev, curr) => prev + curr.exercises, 0)
  return (
    <p>
      <strong>Number of exercises {sum}</strong>
    </p>
  )
}
const Course = ({ name, parts }) => {
  return (
    <div>
      <Header title={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
export default Course

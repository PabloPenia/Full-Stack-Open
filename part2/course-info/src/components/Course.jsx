const Header = ({ course }) => <h1>{course}</h1>
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
const Course = ({ course, parts }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
    </div>
  )
}
export default Course

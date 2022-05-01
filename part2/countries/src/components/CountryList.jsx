import Country from './Country'
const CountryList = ({ data, setter }) => {
  return (
    <article>
      {data.length > 1 ? (
        <ul>
          {data.map(country => (
            <li key={country.name.common}>
              {country.name.common} <button onClick={() => setter(country.name.common)}>Show</button>
            </li>
          ))}
        </ul>
      ) : (
        <Country data={data[0]} />
      )}
    </article>
  )
}
export default CountryList

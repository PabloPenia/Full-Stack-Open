const CountryList = ({ data, setter }) => {
  const renderList = data.length > 1

  return (
    <>
      {renderList ? (
        <ul>
          {data.map(country => (
            <li key={country.name.common}>
              {country.name.common} <button onClick={() => setter(country.name.common)}>Show</button>
            </li>
          ))}
        </ul>
      ) : (
        <article>
          <h1>{data[0].name.common}</h1>
          <p>
            <strong>Capital:</strong> {data[0].capital}
          </p>
          <p>
            <strong>Population:</strong> {data[0].population}
          </p>
          <h2>Language</h2>
          <ul>
            {Object.values(data[0].languages).map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <img style={{ maxWidth: '400px' }} src={data[0].flags.svg} alt={`${data[0].name.common} flag`} />
        </article>
      )}
    </>
  )
}
export default CountryList

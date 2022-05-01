import axios from 'axios'
import { useEffect, useState } from 'react'
import CountryList from './components/CountryList'
import Search from './components/Search'
const App = () => {
  const [keyword, setKeyword] = useState('')
  const [countries, setCountries] = useState([])
  const [message, setMessage] = useState('')
  const [filtered, setFiltered] = useState([])
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
      .catch(error => setMessage(`Cannot retrieve data. Error: ${error}`))
  }, [])
  useEffect(() => {
    if (keyword !== '') {
      const filter = countries.filter(country => country.name.common.toLowerCase().includes(keyword.toLowerCase()))
      if (filter.length === 0) {
        setMessage('There are no matches')
        setFiltered([])
      } else if (filter.length > 10) {
        setMessage('Too many matches, specify another filter')
        setFiltered([])
      } else {
        setMessage('')
        setFiltered(filter)
      }
    } else {
      setMessage('Enter a keyword or country name to search in our database.')
    }
  }, [countries, keyword])

  // handlers
  const handleKeyword = e => setKeyword(e.target.value)
  return (
    <>
      {countries.length > 0 ? (
        <>
          <header>
            <Search filter={keyword} handler={handleKeyword} />
          </header>
          <main>
            {message !== '' && <h3>{message}</h3>}
            {filtered.length > 0 && <CountryList data={filtered} setter={setKeyword} />}
          </main>
        </>
      ) : (
        <h1>Please, wait. Loading...</h1>
      )}
    </>
  )
}

export default App

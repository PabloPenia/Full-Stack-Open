import { useEffect, useState } from 'react'
import CountryList from './components/CountryList'
import Search from './components/Search'
function App() {
  const [keyword, setKeyword] = useState('')
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [result, setResult] = useState([])
  useEffect(() => {
    setLoading(true)
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {
        setCountries(json)
        setLoading(false)
      })
  }, [])
  useEffect(() => {
    setResult([])
    if (keyword !== '') {
      const filtered = countries.filter(country => country.name.common.toLowerCase().includes(keyword.toLowerCase()))

      if (filtered.length === 0) {
        setMessage('There are no matches')
      } else if (filtered.length > 10) {
        setMessage('Too many matches, specify another filter')
      } else {
        setMessage('')
        setResult(filtered)
      }
    } else {
      setMessage('Enter a keyword or country name to search in our DB.')
    }
  }, [countries, keyword])

  const handleKeyword = e => setKeyword(e.target.value)
  return (
    <>
      {loading ? (
        <h1>Please, wait. Loading...</h1>
      ) : (
        <>
          <Search filter={keyword} handler={handleKeyword} />
          <div>
            <p>{message}</p>
            {result.length > 0 && <CountryList data={result} />}
          </div>
        </>
      )}
    </>
  )
}

export default App

const Search = ({ filter, handler }) => {
  return (
    <div>
      keyword/name <input value={filter} onChange={handler} />
    </div>
  )
}
export default Search

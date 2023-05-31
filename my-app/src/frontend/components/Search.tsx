const Search = () => {
  return (
    <input
      placeholder="Search Contact..."
      onChange={(e) => {console.log(e.target.value)}}
      className="input"
    />
  )
}

export default Search;

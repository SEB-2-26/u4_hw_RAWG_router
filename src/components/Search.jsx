const Search = ({onSubmit, onChange, value}) => {

  return (
    <form>
      <input type="text"
        name="search"
        value={value}
        placeholder="Search Games"
        onChange={onChange}
      />
      <button type="submit" onClick={onSubmit}>Search</button>
    </form>
  )
}

export default Search

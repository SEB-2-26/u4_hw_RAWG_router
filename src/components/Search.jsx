
function Search({onSubmit, handleChange, value}){

  return (
    <form onSubmit={(e)=>(onSubmit(e))}>
    <input type="text" name="search" value={value} placeholder="Search Games" onChange={(e)=>(handleChange(e))} />
    <button type="submit">Search</button>
    </form>
  )
}

export default Search

const Search = (props) => {
  const handleSubmit = (e) => {
    e.preventDefualt();
    props.onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Search Game"
        onChange={props.onChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;

function SearchForm() {
  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ width: '480px' }}>
      <h4 className="mb-3">Search Game</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label className="form-label">Game Name</label>
          <input type="text" className="form-control" placeholder="Search for a game..." />
        </div>
        <button type="submit" className="btn btn-warning w-100">Search</button>
      </form>
    </div>
  )
}
export default SearchForm
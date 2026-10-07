function SuggestGameForm() {
  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ width: '480px' }}>
      <h4 className="mb-3">Suggest a Game</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label className="form-label">Game Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Why should we add this game?</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-warning w-100">Submit Suggestion</button>
      </form>
    </div>
  )
}
export default SuggestGameForm
function RatingForm() {
  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ width: '480px' }}>
      <h4 className="mb-3">Rate this Game</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label className="form-label">Game Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Your Rating (1 to 10)</label>
          <input type="number" className="form-control" min="1" max="10" />
        </div>
        <button type="submit" className="btn btn-warning w-100">Submit Rating</button>
      </form>
    </div>
  )
}
export default RatingForm
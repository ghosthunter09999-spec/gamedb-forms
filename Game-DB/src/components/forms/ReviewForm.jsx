function ReviewForm() {
  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ width: '480px' }}>
      <h4 className="mb-3">Write a Game Review</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label className="form-label">Game Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Rating (1-10)</label>
          <input type="number" className="form-control" min="1" max="10" />
        </div>
        <div className="mb-3">
          <label className="form-label">Your Review</label>
          <textarea className="form-control" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-warning w-100">Submit Review</button>
      </form>
    </div>
  )
}
export default ReviewForm
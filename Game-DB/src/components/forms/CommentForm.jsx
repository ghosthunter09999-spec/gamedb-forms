function CommentForm() {
  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ width: '480px' }}>
      <h4 className="mb-3">Add a Comment</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Comment</label>
          <textarea className="form-control" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-warning w-100">Post Comment</button>
      </form>
    </div>
  )
}
export default CommentForm
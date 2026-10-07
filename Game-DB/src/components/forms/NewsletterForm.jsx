function NewsletterForm() {
  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ width: '480px' }}>
      <h4 className="mb-3">Subscribe to Newsletter</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-control" placeholder="Enter your email" />
        </div>
        <button type="submit" className="btn btn-warning w-100">Subscribe</button>
      </form>
    </div>
  )
}
export default NewsletterForm
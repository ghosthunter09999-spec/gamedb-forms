function PremiumForm() {
  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ width: '480px' }}>
      <h4 className="mb-3">Subscribe to Premium</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Select Plan</label>
          <select className="form-select">
            <option>Monthly - $4.99</option>
            <option>Yearly - $39.99</option>
          </select>
        </div>
        <button type="submit" className="btn btn-warning w-100">Subscribe Now</button>
      </form>
    </div>
  )
}
export default PremiumForm
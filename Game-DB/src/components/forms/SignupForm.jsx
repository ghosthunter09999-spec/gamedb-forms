function SignupForm() {
  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ width: '480px' }}>
      <h4 className="mb-3">Sign Up - GameDB</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" placeholder="Enter full name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Create password" />
        </div>
        <button type="submit" className="btn btn-warning w-100">Create Account</button>
      </form>
    </div>
  )
}
export default SignupForm
const formLinks = [
  ['login-form', 'Login'],
  ['signup-form', 'Sign up'],
  ['search-form', 'Search'],
  ['contact-form', 'Contact'],
]

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="GameDB home">
          <span className="brand-mark">G</span>
          <span>Game<span>DB</span></span>
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#forms">Forms</a>
          {formLinks.map(([id, label]) => <a className="nav-quick-link" href={`#${id}`} key={id}>{label}</a>)}
        </div>
        <a className="nav-cta" href="#signup-form">Join the community <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  )
}

export default Navbar

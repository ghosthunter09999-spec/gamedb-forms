import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import LoginForm from './components/forms/LoginForm.jsx'
import SignupForm from './components/forms/SignupForm.jsx'
import ContactForm from './components/forms/ContactForm.jsx'
import NewsletterForm from './components/forms/NewsletterForm.jsx'
import ReviewForm from './components/forms/ReviewForm.jsx'
import SearchForm from './components/forms/SearchForm.jsx'
import FeedbackForm from './components/forms/FeedbackForm.jsx'
import SuggestGameForm from './components/forms/SuggestGameForm.jsx'
import ReportBugForm from './components/forms/ReportBugForm.jsx'
import CommentForm from './components/forms/CommentForm.jsx'
import RatingForm from './components/forms/RatingForm.jsx'
import PremiumForm from './components/forms/PremiumForm.jsx'

const formRoutes = [
  { path: 'login', label: 'Login', component: LoginForm },
  { path: 'signup', label: 'Signup', component: SignupForm },
  { path: 'contact', label: 'Contact', component: ContactForm },
  { path: 'newsletter', label: 'Newsletter', component: NewsletterForm },
  { path: 'review', label: 'Write Review', component: ReviewForm },
  { path: 'search', label: 'Search', component: SearchForm },
  { path: 'feedback', label: 'Feedback', component: FeedbackForm },
  { path: 'suggest', label: 'Suggest Game', component: SuggestGameForm },
  { path: 'report', label: 'Report Bug', component: ReportBugForm },
  { path: 'comment', label: 'Comment', component: CommentForm },
  { path: 'rating', label: 'Rating', component: RatingForm },
  { path: 'premium', label: 'Premium', component: PremiumForm },
]

function App() {
  return (
    <BrowserRouter>
      <div className="container py-4">
        <h2 className="mb-4 text-center fw-bold">GameDB - 12 Forms</h2>

        <nav className="d-flex flex-wrap gap-2 justify-content-center mb-5" aria-label="Form navigation">
          <Link to="/" className="btn btn-dark btn-sm">Home</Link>
          {formRoutes.map(({ path, label }) => (
            <Link key={path} to={`/${path}`} className="btn btn-outline-primary btn-sm">
              {label}
            </Link>
          ))}
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div className="text-center mt-5">
                <h4>Welcome to GameDB Forms</h4>
                <p className="text-muted">Upar se koi form select karo</p>
              </div>
            }
          />
          {formRoutes.map(({ path, component: Form }) => (
            <Route key={path} path={`/${path}`} element={<Form />} />
          ))}
          <Route
            path="*"
            element={
              <div className="text-center mt-5" role="status">
                <h4>Page not found</h4>
                <p className="text-muted">This form page does not exist.</p>
                <Link to="/" className="btn btn-dark btn-sm">Back to Home</Link>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
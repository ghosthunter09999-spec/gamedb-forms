import { useState } from 'react'

function FormCard({ title, description, submitLabel = 'Submit', fields, onSubmit }) {
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('')
    setIsSubmitting(true)

    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    try {
      if (onSubmit) await onSubmit(data)
      setStatus('Thanks! Your submission has been received.')
      form.reset()
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="form-content" onSubmit={handleSubmit}>
      {title && (
        <div className="card-heading">
          <span className="card-marker" aria-hidden="true" />
          <h3>{title}</h3>
        </div>
      )}
      {description && <p className="form-description">{description}</p>}
      <div className="form-fields">
        {fields.map((field) => (
          <label className={`field field-${field.type || 'text'}`} key={field.name} htmlFor={field.name}>
            <span className="field-label">{field.label}{field.required && <span className="required-mark"> *</span>}</span>
            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                rows={field.rows || 3}
                required={field.required}
                minLength={field.minLength}
              />
            ) : field.type === 'select' ? (
              <select id={field.name} name={field.name} required={field.required} defaultValue="">
                <option value="" disabled>{field.placeholder || 'Choose an option'}</option>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            ) : field.type === 'checkbox' ? (
              <span className="checkbox-control">
                <input id={field.name} name={field.name} type="checkbox" required={field.required} />
                <span>{field.description || field.placeholder}</span>
              </span>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type || 'text'}
                placeholder={field.placeholder}
                required={field.required}
                min={field.min}
                max={field.max}
                minLength={field.minLength}
                autoComplete={field.autoComplete}
              />
            )}
          </label>
        ))}
      </div>
      <button className="submit-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : submitLabel}
        {!isSubmitting && <span aria-hidden="true">→</span>}
      </button>
      {status && <p className="form-status" role="status">{status}</p>}
    </form>
  )
}

export default FormCard

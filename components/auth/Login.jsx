import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    setMessage('Interface de démonstration : aucun serveur d’authentification n’est connecté.')
    setPassword('')
  }

  return (
    <section aria-labelledby="login-title">
      <h2 id="login-title">Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login-email">Adresse e-mail :</label>
          <input id="login-email" type="email" autoComplete="email" value={email} onChange={event => setEmail(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="login-password">Mot de passe :</label>
          <input id="login-password" type="password" autoComplete="current-password" value={password} onChange={event => setPassword(event.target.value)} required />
        </div>
        <button type="submit">Se connecter</button>
      </form>
      <p role="status" aria-live="polite">{message}</p>
    </section>
  )
}

export default Login

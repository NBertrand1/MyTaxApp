import { useState } from 'react'

const initialForm = {
  nom: '',
  prenoms: '',
  dateNaissance: '',
  lieuNaissance: '',
  nin: '',
  sexe: '',
  etatCivil: '',
  nationalite: '',
  motDePasse: '',
  confirmationMotDePasse: '',
}

function Signup() {
  const [formData, setFormData] = useState(initialForm)
  const [message, setMessage] = useState('')

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(current => ({ ...current, [name]: value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    if (formData.motDePasse !== formData.confirmationMotDePasse) {
      setMessage('Les mots de passe ne correspondent pas.')
      return
    }
    setMessage('Interface de démonstration : aucune inscription n’est envoyée ni enregistrée.')
    setFormData(initialForm)
  }

  return (
    <section aria-labelledby="signup-title">
      <h2 id="signup-title">Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div><label htmlFor="nom">Nom :</label><input id="nom" name="nom" value={formData.nom} onChange={handleChange} autoComplete="family-name" required /></div>
        <div><label htmlFor="prenoms">Prénoms :</label><input id="prenoms" name="prenoms" value={formData.prenoms} onChange={handleChange} autoComplete="given-name" required /></div>
        <div><label htmlFor="dateNaissance">Date de naissance :</label><input id="dateNaissance" name="dateNaissance" type="date" value={formData.dateNaissance} onChange={handleChange} /></div>
        <div><label htmlFor="lieuNaissance">Lieu de naissance :</label><input id="lieuNaissance" name="lieuNaissance" value={formData.lieuNaissance} onChange={handleChange} /></div>
        <div><label htmlFor="nin">NIN :</label><input id="nin" name="nin" value={formData.nin} onChange={handleChange} /></div>
        <div><label htmlFor="sexe">Sexe :</label><select id="sexe" name="sexe" value={formData.sexe} onChange={handleChange}><option value="">Sélectionner</option><option value="masculin">Masculin</option><option value="feminin">Féminin</option></select></div>
        <div><label htmlFor="etatCivil">État civil :</label><select id="etatCivil" name="etatCivil" value={formData.etatCivil} onChange={handleChange}><option value="">Sélectionner</option><option value="marie">Marié(e)</option><option value="celibataire">Célibataire</option><option value="divorce">Divorcé(e)</option><option value="veuf">Veuf / Veuve</option><option value="autre">Autre</option></select></div>
        <div><label htmlFor="nationalite">Nationalité :</label><input id="nationalite" name="nationalite" value={formData.nationalite} onChange={handleChange} /></div>
        <div><label htmlFor="motDePasse">Mot de passe :</label><input id="motDePasse" name="motDePasse" type="password" autoComplete="new-password" minLength={8} value={formData.motDePasse} onChange={handleChange} required /></div>
        <div><label htmlFor="confirmationMotDePasse">Confirmer le mot de passe :</label><input id="confirmationMotDePasse" name="confirmationMotDePasse" type="password" autoComplete="new-password" minLength={8} value={formData.confirmationMotDePasse} onChange={handleChange} required /></div>
        <button type="submit">S’inscrire</button>
      </form>
      <p role="status" aria-live="polite">{message}</p>
    </section>
  )
}

export default Signup

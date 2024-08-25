import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
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
  });

  // ... fonction handleChange pour gérer les modifications des champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation des données
    if (formData.motDePasse !== formData.confirmationMotDePasse) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
    // Envoi des données au serveur
    console.log(formData);
  };

  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom:</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="prenoms">Prénoms:</label>
          <input
            type="text"
            id="prenoms"
            name="prenoms"
            value={formData.prenoms}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="dateNaissance">Date de naissance:</label>
          <input
            type="date"
            id="dateNaissance"
            name="dateNaissance"
            value={formData.dateNaissance}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lieuNaissance">Lieu de naissance:</label>
          <input
            type="text"
            id="lieuNaissance"
            name="lieuNaissance"
            value={formData.lieuNaissance}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="nin">NIN:</label>
          <input
            type="text"
            id="nin"
            name="nin"
            value={formData.nin}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="sexe">Sexe:</label>
          <select
            id="sexe"
            name="sexe"
            value={formData.sexe}
            onChange={handleChange}
          >
            <option value="">Sélectionnez votre sexe</option>
            <option value="masculin">Masculin</option>
            <option value="féminin">Féminin</option>
          </select>
        </div>
        <div>
          <label htmlFor="etatCivil">Etat civil:</label>
          <select
            id="etatCivil"
            name="etatCivil"
            value={formData.etatCivil}
            onChange={handleChange}
          >
            <option value="">Sélectionnez votre civilité</option>
            <option value="marie">Marie</option>
            <option value="celibataire">Celibataire</option>
            <option value="divorce">Divorce</option>
            <option value="veuf">Veuf</option>
            <option value="concubin">Concubin</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div>
          <label htmlFor="nationalite">Nationalité:</label>
          <input
            type="text"
            id="nationalite"
            name="nationalite"
            value={formData.nationalite}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="motDePasse">Mot de passe:</label>
          <input
            type="password"
            id="motDePasse"
            name="motDePasse"
            value={formData.motDePasse}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirmationMotDePasse">Confirmer le mot de passe:</label>
          <input
            type="password"
            id="confirmationMotDePasse"
            name="confirmationMotDePasse"
            value={formData.confirmationMotDePasse}
            onChange={handleChange}
          />
        </div>
        {/* ... autres champs */}
        <button type="submit">Sinscrire</button>
      </form>
    </div>
  );
}

export default Signup;
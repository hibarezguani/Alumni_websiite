import React, { useState } from "react";
import { navigate } from "gatsby";

const ModeDePasseOublie = () => {
  const um5Domain = '@um5.ac.ma'; // Le domaine UM5
  const [emailPrefix, setEmailPrefix] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation de l'envoi du code de vérification
    sendVerificationCode();
  };
  const sendVerificationCode = () => {
    // Simulation de l'envoi du code de vérification à l'adresse e-mail
    console.log(`Envoi du code de vérification à : ${emailPrefix}${um5Domain}`);
    
    // Simulation d'un délai pour l'envoi du code et redirection
    setTimeout(() => {
      // Simulation de la génération d'un code à 4 chiffres
      const verificationCode = Math.floor(1000 + Math.random() * 9000);
      console.log("Code de vérification :", verificationCode);

      // Redirection vers la page de vérification avec le code dans l'URL
      navigate(`/verification?code=${verificationCode}`);
    }, 2000); // Simulation d'un délai de 2 secondes (2000 millisecondes)
  };

  const handleSignInClick = () => {
    navigate("/signin");
  };

  return (
    <div className="flex h-screen">
      {/* Partie gauche pour l'image */}
      <div className="w-11/12 flex items-center justify-center">
      <form className="max-w-md bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        {/* Titre du formulaire */}
        <h1 className="text-4xl font-bold text-center mb-8" style={{ color: "#7D0909", fontFamily: "Inter", fontWeight: "bold" }}>
          <span style={{ textDecoration: "underline" }}>Mode de passe oublié ?</span>
        </h1>
       
        {/* Champ pour l'email */}
        <div className="flex flex-col">
        <div style={{ marginBottom: "10px" }}></div>
          <label htmlFor="email" className="mb-4 font-bold" style={{ color: "#956464", fontFamily: "Inter", fontWeight: "medium", fontSize: "1.2rem" }}>
            Email
          </label>
          <div className="flex items-center mb-4">
            <input
              id="email"
              type="text"
              value={emailPrefix}
              onChange={(e) => setEmailPrefix(e.target.value)}
              placeholder={`prenom_nom`}
              className="p-2 mr-2 rounded-l-md"
              style={{
                fontSize: "1rem",
                lineHeight: "1.5rem",
                backgroundColor: "#E1BFBA",
                color: "#FFFFFF",
                fontFamily: "Inter",
                fontWeight: "light",
                border: "none",
                outline: "none",
                height: "2.5rem",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            />
            <span className="p-2 rounded-r-md bg-gray-500 text-white font-bold" style={{
              fontSize: "1rem",
              lineHeight: "1.5rem",
              backgroundColor: "rgba(225, 191, 186, 0.41)",
              color: "#000000",
              fontFamily: "Inter",
              fontWeight: "light",
              border: "none",
              outline: "none",
              height: "2.5rem",
            }}>{um5Domain}</span>
          </div>
        </div>
        {/* Message */}
        <p className="text-red-900 text-center">Nous enverrons un code de vérification à cette adresse e-mail si un compte Alumni existant correspond.</p>
        {/* Bouton de soumission */}
        <button
  type="submit"
  className="w-full  align-center font-semibold py-2 px-4 rounded-md transition-all duration-300 cursor-pointer"
  style={{
    backgroundColor: "#7D0909", // Couleur de fond
    color: "#E1BFBA", // Couleur du texte
    textAlign: "center", // Centrer le texte
    border: "none", // Supprimer la bordure
    outline: "none", // Supprimer la bordure du focus
  }}
>
  Envoyer le code de vérification
</button>
<div style={{ marginBottom: "8px" }}></div>
<div className="text-sm ">Remembered your password? {" "}
            <span className="underline cursor-pointer"  onClick={handleSignInClick} style={{
                    color: "#7D0909",
                    fontFamily: "Inter",
                    fontWeight: "light",
                    textDecoration: "underline",
                  }}>
              Sign In
            </span>
          </div>
      </form>
      </div>

      {/* Partie droite pour le logo, le titre et la barre de séparation */}
      <div className="w-1/12 flex flex-col items-center justify-center relative bg-white">
        <div className="absolute top-0 right-0">
          <img
            className="w-12 h-12"
            src="/chapeau.jpeg"
            alt="Your Logo"
          />
        </div>
        <div className="absolute flex flex-col items-center justify-center right-0" style={{ color: "#7D0909", fontFamily: "Lexend Tera", fontWeight: "regular", fontSize: "0.65rem", top: "50px" }}>
          <span>Alumni</span>
        </div>
        <div className="absolute h-full w-1 bg-black top-0 right-14" style={{ backgroundColor: "#6B4242" }}></div>
        {/* <div className="w-1/4 relative flex flex-col items-center justify-center"></div> */}
      </div>
    </div>
  );
};

export default ModeDePasseOublie;

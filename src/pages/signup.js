import * as React from "react";
import { useState, useCallback } from "react";
import { navigate } from "gatsby";
import firebase from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [emailPrefix, setEmailPrefix] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const um5Domain = '@um5.ac.ma'; // Le domaine UM5

  const onSignInClick = useCallback(() => {
    navigate("/signin");
  }, []);

  
  const onSignUpButtonClick = useCallback(async () => {
    try {
      const email = `${emailPrefix}${um5Domain}`;
      if (!email.endsWith(um5Domain)) {
        throw new Error("Please use a valid UM5 email address");
      }
      const emailWithoutDomain = `${emailPrefix}`;
      const completeEmail = `${emailWithoutDomain}${um5Domain}`;
      // Utilisation de completeEmail pour affichage ou validation
      console.log('Complete Email:', completeEmail);
  
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Utilisateur enregistré avec succès:', userCredential.user);
      setSignUpSuccess(true);
      setTimeout(() => {
        navigate('/signin');
      }, 2000);
    } catch (error) {
      console.error("Error signing up:", error.message);
      setSignUpSuccess(false);
      if (error.code === 'auth/email-already-in-use') {
        console.error("Email already in use. Please use a different email.");
      } else {
        console.error("Error signing up:", error.message);
      }
    }
  }, [emailPrefix, password, confirmPassword]);
  

  return (
    <div className="flex h-screen">
      {/* Partie gauche pour l'image */}
      <div className="w-1/2 flex items-center justify-center">
        <img
          className="max-w-[100%] max-h-[80%]"
          src="/grad.png"
          alt="Your Image"
        />
      </div>

      {/* Partie droite pour le logo, le titre et la barre de séparation */}
      <div className="w-1/2 flex flex-col items-center justify-center relative bg-white">
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
        <div className="w-1/4 relative flex flex-col items-center justify-center"></div>

        {/* Partie centrale pour les champs de création de compte */}
        <div className="w-3/4 relative">
          <div className="max-w-md w-full p-4">
            <h1 className="text-4xl font-bold mb-8 text-center mx-auto" style={{ color: "#7D0909", fontFamily: "Inter", fontWeight: "bold" }}>
              Sign Up
            </h1>
            <div className="flex flex-col items-start">
              <label htmlFor="email" className="mb-4" style={{ color: "#956464", fontFamily: "Inter", fontWeight: "medium", fontSize: "1.2rem" }}>
                Email
              </label>
              <div className="flex items-center mb-4">
                <input
                  id="email"
                  type="text"
                  value={emailPrefix}
                  onChange={(e) => setEmailPrefix(e.target.value)}
                  placeholder={`prenom_nom`}
                  className="p-2 mr-2 rounded-l-md flex-grow"
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                    backgroundColor: "#E1BFBA",
                    color: "#FFFFFF",
                    fontFamily: "Inter",
                    fontWeight: "light",
                    border: "none",
                    outline: "none",
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
                }}>{um5Domain}</span>
              </div>
              <label htmlFor="password" className="mb-4" style={{ color: "#956464", fontFamily: "Inter", fontWeight: "medium", fontSize: "1.2rem" }}>
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mb-4 p-2"
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  borderRadius: "10px",
                  backgroundColor: "#E1BFBA",
                  color: "#FFFFFF",
                  fontFamily: "Inter",
                  fontWeight: "light",
                  paddingLeft: "15px",
                  padding: "10px",
                  marginBottom: "1rem",
                  border: "none",
                  outline: "none",
                  width: "100%",
                  "::placeholder": { color: "#FFFFFF" }
                }}
              />
              <label htmlFor="confirmPassword" className="mb-4" style={{ color: "#956464", fontFamily: "Inter", fontWeight: "medium", fontSize: "1.2rem" }}>
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="mb-4 p-2"
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  borderRadius: "10px",
                  backgroundColor: "#E1BFBA",
                  color: "#FFFFFF",
                  fontFamily: "Inter",
                  fontWeight: "light",
                  paddingLeft: "15px",
                  padding: "10px",
                  marginBottom: "1rem",
                  border: "none",
                  outline: "none",
                  width: "100%",
                  "::placeholder": { color: "#FFFFFF" }
                }}
              />
              <div style={{ marginBottom: "8px" }}></div>
              <p>
                Already have an account?{" "}
                <span
                  className="underline cursor-pointer"
                  onClick={onSignInClick}
                  style={{
                    color: "#7D0909",
                    fontFamily: "Inter",
                    fontWeight: "light",
                    textDecoration: "underline",
                  }}
                >
                  Sign In
                </span>
              </p>
              <div style={{ marginBottom: "8px" }}></div>
              <button
                onClick={onSignUpButtonClick}
                className="p-2 inline-block mx-auto h-[40px] min-w-[120px] cursor-pointer"
                style={{
                  backgroundColor: "#6B4242",
                  color: "#E1BFBA",
                  borderRadius: "40px",
                  fontFamily: "Inter",
                  fontWeight: "bold",
                  border: "none",
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  padding: "10px",
                }}
              >
                Sign Up
              </button>
              {/* Affichage conditionnel du message de succès ou d'échec de l'inscription */}
              {signUpSuccess === true && <p style={{ color: 'green' }}>Inscription réussie ! Connectez-vous maintenant.</p>}
              {signUpSuccess === false && <p style={{ color: 'red' }}>Erreur lors de l'inscription. Veuillez réessayer.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

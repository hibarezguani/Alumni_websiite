import * as React from "react";
import { useState, useCallback } from "react";
import { navigate } from "gatsby";
import firebase from '../firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
  const um5Domain = '@um5.ac.ma'; // Le domaine UM5
  const [emailPrefix, setEmailPrefix] = useState('');
  const [password, setPassword] = useState('');
  const [signInSuccess, setSignInSuccess] = useState(null); // Ajout de l'état pour gérer le succès de la connexion

  const handleSignIn = async () => {
    const auth = getAuth();
  
    try {
      const enteredEmail = `${emailPrefix}${um5Domain}`;
      const trimmedEmail = enteredEmail.trim();
      const trimmedPassword = password.trim();
  
      if (!trimmedEmail || !trimmedPassword) {
        throw new Error("Please enter both email and password");
      }
  
      console.log('Tentative de connexion avec l\'email :', trimmedEmail); // Ajout du log pour l'email utilisé
      const userCredential = await signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
      console.log('Utilisateur connecté avec succès :', userCredential.user);
      setSignInSuccess(true);
      // Ne naviguez pas ici, utilisez setTimeout pour la redirection après un délai
    setTimeout(() => {
      navigate('/acceuil');
    }, 2000); // Redirection après 2 secondes (2000 millisecondes)
    } catch (error) {
      console.error('Erreur lors de la connexion :', error.message);
      setSignInSuccess(false);
    }
  };
  
  const onForgotPasswordClick = useCallback(() => {
    navigate("/mode-de-passe-oublie");
  }, []);

  const onSignUpClick = useCallback(() => {
    navigate("/signup");
  }, []);

  const onSignInButtonClick = useCallback(async () => {
    try {
      const enteredEmail = `${emailPrefix}${um5Domain}`;
  
      if (!enteredEmail.endsWith(um5Domain)) {
        throw new Error("Please use a valid UM5 email address");
      }
    
  
      // Utilisation de la logique existante pour gérer la connexion
      await handleSignIn();
      const auth = getAuth();
    } catch (error) {
      console.error("Error signing in:", error.message);
      // Gérer l'erreur d'authentification, afficher un message à l'utilisateur, etc.
    }
  }, [emailPrefix, um5Domain, handleSignIn]);
  const renderSignInMessage = () => {
    if (signInSuccess === true) {
      return <p style={{ color: 'green' }}>Connexion réussie ! Redirection...</p>;
    } else if (signInSuccess === false) {
      return <p style={{ color: 'red' }}>Échec de la connexion. Veuillez réessayer.</p>;
    }
    return null;
  };


  
  return (
    <div className="flex h-screen">
      {/* Partie gauche pour les champs de connexion */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="max-w-md w-full p-4">
          <h1 className="text-4xl font-bold text-center mx-auto mb-15" style={{ color: "#7D0909", fontFamily: "Inter", fontWeight: "bold" }}>
            Sign In
          </h1>
          <div style={{ marginBottom: "10px" }}></div>
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
            height: "25%",
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
            height: "25%",
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
                height: "25%",
                "::placeholder": { color: "#FFFFFF" }
              }}
            />
            <div style={{ marginBottom: "8px" }}></div>
            <p>
              Don't have an Account?{" "}
              <span
                className="underline cursor-pointer"
                onClick={onSignUpClick}
                style={{
                  color: "#7D0909",
                  fontFamily: "Inter",
                  fontWeight: "light",
                  textDecoration: "underline",
                }}
              >
                Sign Up
              </span>
            </p>
            <div style={{ marginBottom: "10px" }}></div>
            <button
              onClick={onForgotPasswordClick}
              className="underline mb-4 mr-auto mb-[4px] cursor-pointer"
              style={{ color: "#7D0909", fontFamily: "Inter", fontWeight: "light",textAlign:"center" }}
            >
              Forgot Password?
            </button>
            <div style={{ marginBottom: "15px" }}></div>
            
            <button
              onClick={onSignInButtonClick}
              className="p-2 inline-block mx-auto h-[40px] min-w-[120px] cursor-pointer"
              style={{
                backgroundColor: "#7D0909",
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
              Sign In
            </button>
            {renderSignInMessage()}
          </div>
        </div>
      </div>
      {/* Partie droite pour l'image, le logo et le tri */}
      {/* Partie droite pour l'image, le logo et le tri */}
      <div className="w-1/2 flex items-center justify-center bg-white">
      <div className="w-3/4 relative">
      <div className="flex flex-col items-center justify-center">
          <img
            className="max-w-[70%] max-h-[80%]"
            src="/graduation.jpg"
            alt="Your Image"
          />
        </div>
        </div>
        <div className="absolute h-full w-1 bg-black top-0 right-14" style={{ backgroundColor: "#6B4242" }}></div>
        <div className="w-1/4 relativeflex flex-col items-center justify-center">
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
</div>
      </div>

    </div>
  );
};

export default SignIn;
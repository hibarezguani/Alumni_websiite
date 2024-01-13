import React, { useState } from "react";
import { navigate } from "gatsby";
import firebase from 'firebase/app';
import 'firebase/auth';

const VerificationPage = () => {
  const [verificationCode, setVerificationCode] = useState('');

  const handleVerification = async () => {
    try {
      const actionCodeSettings = {
        url: 'https://yourapp.com/verification-success', // URL vers la page de succès de vérification
        handleCodeInApp: true,
      };

      const userEmail = 'user@example.com'; // Remplacez par l'email de l'utilisateur

      await firebase.auth().sendSignInLinkToEmail(userEmail, actionCodeSettings);
      navigate('/verification-success'); // Rediriger vers la page de vérification
    } catch (error) {
      console.error('Erreur lors de l\'envoi du code de vérification :', error);
    }
  };

  const handleVerificationCodeSubmit = async () => {
    try {
      const user = firebase.auth().currentUser;

      await firebase.auth().signInWithEmailLink(user.email, verificationCode);

      navigate('/verification-success'); // Rediriger vers la page de succès de vérification
    } catch (error) {
      console.error('Erreur lors de la vérification du code :', error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form className="max-w-md bg-white p-8 rounded-lg shadow-lg" onSubmit={handleVerification}>
        <h1 className="text-4xl font-bold text-center mb-8">Vérification</h1>
        <div className="mb-4">
          <label htmlFor="verificationCode" className="block font-bold mb-2">Entrez le code de vérification :</label>
          <input
            id="verificationCode"
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="p-2 rounded-md border border-gray-300 w-full"
          />
        </div>
        <button
          type="button" // Utilisez type="button" pour éviter le rechargement de la page
          onClick={handleVerificationCodeSubmit}
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer"
        >
          Vérifier
        </button>
      </form>
    </div>
  );
};

export default VerificationPage;

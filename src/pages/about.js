import React from "react";
import Navbar from '../components/navbar';

const AboutPage = () => {
 

  return (
    <div className="relative bg-white w-full overflow-hidden text-center text-2xl text-white font-inter h-screen">
      <Navbar />
      <div className="flex items-center justify-center h-screen">
      <div className="w-2/3 mx-8 text-left flex  justify-center h-full mt-64">
  <p className="mb-4 text-center" style={{ color: 'black' }}>
  ALUMNI est bien plus qu'une application ; c'est votre lien essentiel avec la communauté des anciens élèves de l'Université Mohammed V de Rabat. Notre plateforme facilite la création de votre identité académique et professionnelle, permettant de partager votre parcours, créer un CV interactif et de connecter avec d'autres anciens élèves. Rejoignez-nous pour élargir vos horizons et faire partie d'une communauté engagée !
  </p>
</div>



        <div className="w-1/3 mx-8 my-auto">
          {/* Insérer ici votre image */}
          <img
            className="mx-auto h-auto max-h-85 object-cover"
            alt="Votre image"
            src="/pic.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
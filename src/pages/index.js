import * as React from "react";
import { useCallback } from "react";
import { navigate } from "gatsby";

const Index1 = () => {
  const onLOGOContainerClick = useCallback(() => {
    navigate("/");
  }, []);

  const onAProposTextClick = useCallback(() => {
    // Rediriger vers la page "about"
    navigate("/about"); // Assurez-vous que "/about" correspond à la route de votre page "about"
  }, []);

  const onContactUsTextClick = useCallback(() => {
    // Sync "contact us" to the project
  }, []);

  const onSignInContainerClick = useCallback(() => {
    // Sync "Sign In" to the project
    navigate("/signin");
  }, []);

  const onSignUpContainerClick = useCallback(() => {
    // Sync "Sign Up" to the project
    navigate("/signup");
  }, []);


  return (
    <div className="relative bg-white w-full overflow-hidden text-center text-2xl text-white font-inter h-screen">
      <div className="h-20 flex justify-between items-center px-4 sm:px-8 lg:px-16">
        <div className="cursor-pointer text-3xl font-semibold" onClick={onLOGOContainerClick}>
          <span style={{ color: "#7D0909", fontSize: "40px", fontFamily: "Monoton" }}>A| </span>
          <span style={{ color: "#7D0909", fontSize: "35px", fontFamily: "ABeeZee", fontWeight: "regular" }} className="font-abeezee">Alumni</span>
        </div>
        <div className="flex space-x-10 cursor-pointer">
          <div className="font-light" onClick={onAProposTextClick} style={{ color: "#7D0909", fontSize: "30px", fontFamily: "Inter", fontWeight: "lighter", textAlign: "center" }}>
            A propos
          </div>
          <div onClick={onContactUsTextClick} style={{ textAlign: "center" }}>
            <span style={{ color: "#7D0909", fontSize: "30px", fontFamily: "Inter", fontWeight: "lighter" }}>Contact us</span>
          </div>
        </div>
        <div className="flex space-x-8 cursor-pointer">
          <div
            className="text-rosybrown font-semibold"
            onClick={onSignInContainerClick}
            style={{
              backgroundColor: "#7D0909",
              color: "#E1BFBA",
              borderRadius: "20px",
              fontFamily: "Inter",
              fontWeight: "bold",
              border: "none",
              padding: "12px 30px", // Espacement supplémentaire
            }}
          >
            Sign In
          </div>
          <div
            className="text-mistyrose font-semibold"
            onClick={onSignUpContainerClick}
            style={{
              backgroundColor: "#6B4242",
              color: "#E1BFBA",
              borderRadius: "20px",
              fontFamily: "Inter",
              fontWeight: "bold",
              border: "none",
              padding: "12px 30px", // Espacement supplémentaire
            }}
          >
            Sign Up
          </div>
        </div>
      </div>
      <div className="relative">
    <img
      className="w-full h-screen object-cover"
      alt=""
      src="pexels-george-pak-7973112.jpg"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
      <p style={{ textAlign: 'center', color: 'white', fontSize:'24px' , fontFamily: 'Inter'}}>Connectons les Histoires, Partageons le Présent!
    Bienvenue sur ALUMNI, l'Application des Anciens de l'UM5. </p>
    </div>
  </div>
</div>
  );
};

export default Index1; 
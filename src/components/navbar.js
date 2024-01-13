import React, { useState } from 'react';
import { navigate } from 'gatsby';

const Navbar = () => {
  const [selected, setSelected] = useState('');

  const onLOGOContainerClick = () => {
    navigate('/');
    setSelected('');
  };

  const onAProposTextClick = () => {
    navigate('/about');
    setSelected('about');
  };

  const onContactUsTextClick = () => {
    navigate('/contactus');
    setSelected('contact');
  };

  const onSignInContainerClick = () => {
    navigate('/signin');
    setSelected('');
  };

  const onSignUpContainerClick = () => {
    navigate('/signup');
    setSelected('');
  };
  return (
    <div className="h-20 flex justify-between items-center px-4 sm:px-8 lg:px-16">
      {/* Votre en-tête ici */}
      {/* ... */}
      <div className="cursor-pointer text-3xl font-semibold" onClick={onLOGOContainerClick}>
          <span style={{ color: "#7D0909", fontSize: "40px", fontFamily: "Monoton" }}>A| </span>
          <span style={{ color: "#7D0909", fontSize: "35px", fontFamily: "ABeeZee", fontWeight: "regular" }} className="font-abeezee">Alumni</span>
        </div>
        <div className="flex space-x-10 cursor-pointer">
        <div
          className={`font-light ${selected === 'about' ? 'underline' : ''}`}
          onClick={onAProposTextClick}
          style={{ textDecoration: selected === 'about' ? 'underline' : 'none', color: '#7D0909', fontSize: '30px', fontFamily: 'Inter', fontWeight: 'lighter', textAlign: 'center' }}
        >
          A propos
        </div>
        <div
          className={`font-light ${selected === 'contact' ? 'underline' : ''}`}
          onClick={onContactUsTextClick}
          style={{ textDecoration: selected === 'contact' ? 'underline' : 'none', color: '#7D0909', fontSize: '30px', fontFamily: 'Inter', fontWeight: 'lighter', textAlign: 'center' }}
        >
          Contact us
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
  );
};

export default Navbar;

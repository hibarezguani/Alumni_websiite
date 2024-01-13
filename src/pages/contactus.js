import React from 'react';
import Navbar from '../components/navbar';

const ContactUs = () => {
  return (
    <div>
      {/* Header */}
      <div className=" p-4">
        {/* Contenu du header ici */}
        <Navbar />
      </div>

      {/* Image de fond avec le formulaire */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/contact.jpg')"}}>
        {/* Container principal prenant 100% de la largeur */}
        <div className="relative grid grid-cols-2 h-full">
          {/* Partie avec opacité contenant les informations de contact */}
          <div className="bg-gray-200 bg-opacity-75 p-8 flex flex-col items-center justify-center w-1/2 mx-auto mt-20 h-80">
            <div className="mb-6" style={{ color: '#000000', fontSize: '1rem', fontFamily: 'Inter', fontWeight: "bold", }}>CONTACT US</div>
            <div className="flex items-center mb-2">
              <img
                src="/phone.svg"
                alt="Phone Icon"
                className="w-6 h-6 mr-2"
              />
            </div>
            <div style={{ color: '#000000', fontSize: '1rem', fontFamily: 'Inter' }}> +212631115257</div>
            <div className="flex items-center mt-6">
              <img
                src="/email.svg"
                alt="Email Icon"
                className="w-6 h-6 mr-2"
              />
            </div>
            <div style={{ color: '#000000', fontSize: '1rem', fontFamily: 'Inter' }}>
              rezguanihiba012@gmail.com
            </div>
          </div>
          {/* Partie prenant 40% de la largeur pour le formulaire */}
          <div className="relative p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#7D0909" }}>Tell us how we can help you</h2>
            <div className="mb-6 w-full">
              <label htmlFor="name" style={{ color: "#000000" }}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="email" style={{ color: "#000000" }}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="message" style={{ color: "#000000" }}>Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-2 border rounded"
              />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" style={{
              backgroundColor: "#7D0909",
              color: "#E1BFBA",
            }}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

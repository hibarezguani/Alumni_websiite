import React from "react";
import { useCallback } from "react";
import { navigate } from "gatsby";

const Accueil = () => {
  const onPublicationContainerClick = useCallback(() => {
    navigate("/add-post");
  }, []);

  const onSortDownImageClick = useCallback(() => {
    navigate("/accuei-vous");
  }, []);

  const onReseauContainerClick = useCallback(() => {
    navigate("/resaux");
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/rectangle-32@2x.png')"}}>
      {/* Header */}
      <div className="flex items-center justify-between bg-dimgray-200 bg-opacity-60 text-white h-1/4 px-6">
        {/* A| Alumni */}
        <div className="flex items-center">
          <div className="text-[2.31rem] font-inter">
            <div className="text-3.31rem font-monoton">
              <span>A|</span>
              <span className="font-meie-script text-black">{` `}</span>
              <span className="font-abeezee">Alumni</span>
            </div>
          </div>
        </div>
        {/* Recherche */}
        <div className="cursor-pointer" onClick={onSortDownImageClick}>
          <img className="w-6 h-6 mr-2" src="/search@2x.png" alt="" />
          <div className="text-[1.94rem] font-inter">Recherche</div>
        </div>
        {/* Accueil */}
        <div className="cursor-pointer" onClick={() => navigate("/accueil")}>
          <img className="w-6 h-6 mr-2" src="/home.svg" alt="" />
          <div className="text-[2.31rem] font-bold">Accueil</div>
        </div>
        {/* Réseau */}
        <div className="cursor-pointer" onClick={onReseauContainerClick}>
          <img className="w-6 h-6 mr-2" src="/people@2x.png" alt="" />
          <div className="text-[1.94rem] font-inter">Réseau</div>
        </div>
        {/* Vous */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-rosybrown-100 rounded-full mr-2">
            <div className="text-black text-center">N</div>
          </div>
          {/* Sort Down */}
          <div className="cursor-pointer" onClick={onSortDownImageClick}>
            <img className="w-4 h-4" src="/sort-down@2x.png" alt="" />
          </div>
        </div>
      </div>

      {/* Section principale avec le contenu */}
      <div className="flex items-center justify-center h-3/4">
        <div className="bg-white rounded-xl p-8">
          <div className="font-light mb-6 cursor-pointer" onClick={onPublicationContainerClick}>
            Créez une publication
          </div>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-rosybrown-100 rounded-full"></div>
            <div className="text-[2.38rem] text-maroon-100 font-ledger">
              <div className="inline-block w-10 h-10">N</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;

import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  let stars1 = document.getElementById("stars1");
  let moon2 = document.getElementById("moon2");
  let mountains3 = document.getElementById("mountains3");
  let mountains4 = document.getElementById("mountains4");
  let river5 = document.getElementById("river5");
  let boat6 = document.getElementById("boat6");
  let mountains7 = document.getElementById("mountains7");
  let shop = document.getElementsByClassName(".shop");

  useEffect(() => {
    const handleScroll = (event) => {
      let value = window.scrollY;
      moon2.style.left = value;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <header>
        <h2>
          <a href="#" className="logo">
            Shop
          </a>
        </h2>
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>
      <section className="main">
        <img src="./stars1.png" id="stars1" />
        <h2 className="Shop">Shop</h2>
        <img src="./moon2.png" id="moon2" />
        <img src="./mountains3.png" id="mountains3" />
        <img src="./mountains4.png" id="mountains4" />
        <img src="./river5.png" id="river5" />
        <img src="./boat6.png" id="boat6" />
        <img src="./mountains7.png" id="mountains3" />
      </section>
      <div className="content">
        <h2>
          Le sénateur français, Christian Cambon, président de la Commission des
          affaires étrangères, de la défense et des forces armées au Sénat, a
          interpellé le gouvernement de son pays sur les “grandes difficultés”
          rencontrées par les ressortissants marocains en matière de délivrance
          de visas et leurs conséquences sur les relations franco-marocaines.
        </h2>
        <p>
          Dans des lettres aux ministres des Affaires étrangères et de
          l'Intérieur, M. Cambon, également président du groupe
          interparlementaire d'amitié France-Maroc du Sénat, affirme avoir été
          saisi, ces dernières semaines, comme nombre de ses collègues
          sénateurs, de plusieurs cas de refus de délivrance de visas pour des
          ressortissants marocains souhaitant se rendre en France.
        </p>
        <br />
        <p>
          “Cela alors que la demande semblait parfaitement légitime, comme par
          exemple un médecin souhaitant se rendre à un congrès international de
          médecine ou un sportif devant participer à une compétition
          internationale”, écrit-il à l'adresse de la cheffe de la diplomatie,
          Catherine Colonna, et du locataire de la Place Beauvau, Gérald
          Darmanin.
        </p>{" "}
        <br />
        <p>
          Dans ce type de situation, le refus de délivrance de visa par les
          autorités françaises suscite une “forte émotion et une légitime
          incompréhension” de la part des ressortissants marocains, souligne le
          sénateur.
        </p>{" "}
        <br />
        <p>
          “Plus profondément, l'augmentation récente des décisions de refus de
          délivrance de visas ou de titres de séjour aux ressortissants
          marocains par les autorités françaises pourrait porter un grave
          préjudice aux relations politiques, économiques et culturelles avec le
          Maroc, un pays ami de la France et un pôle de stabilité essentiel dans
          une région où les risques et les menaces sont nombreux”, relève le
          sénateur français.
        </p>{" "}
        <br />
        <p>
          Et de poursuivre que le Maroc représente “un partenaire stratégique”
          de la France, notamment dans les domaines économique et culturel, avec
          de nombreuses entreprises françaises et un réseau culturel très dense,
          ou encore en matière de lutte contre le terrorisme et sur la question
          migratoire.
        </p>{" "}
        <br />
        <p>
          “Pour éviter tout risque de fragiliser notre coopération bilatérale,
          et notamment la place très importante des entreprises françaises dans
          ce pays, il me semblerait donc opportun que vous puissiez donner les
          instructions nécessaires à vos services afin qu'ils fassent preuve
          d'un plus grand discernement dans la procédure de délivrance de
          visas”, conclut-il.
        </p>{" "}
        <br />
      </div>
    </div>
  );
};

export default App;

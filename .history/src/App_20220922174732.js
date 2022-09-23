import React, { useRef } from "react";
import "./App.css";

function App() {
  let stars1 = useRef(null);
  let moon2 = useRef(null);
  let mountains3 = useRef(null);
  let mountains4 = useRef(null);
  let river5 = useRef(null);
  let boat6 = useRef(null);
  let mountains7 = useRef(null);
  let shop = useRef(null);

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
        <img src="./stars1.png" alt="stars1" ref={stars1} />
        <h2 className="Shop" ref={shop}>
          Shop{boat6.current}
        </h2>
        <img src="./moon2.png" alt="moon2" ref={moon2} />
        <img src="./mountains3.png" alt="mountains3" ref={mountains3} />
        <img src="./mountains4.png" alt="mountains4" ref={mountains4} />
        <img src="./river5.png" alt="river5" ref={river5} />
        <img src="./boat6.png" alt="boat6" ref={boat6} />
        <img src="./mountains7.png" alt="mountains3" ref={mountains7} />
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
}

export default App;

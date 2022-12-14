import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      let stars1 = document.getElementById("stars1");
      let moon2 = document.getElementById("moon2");
      let mountains3 = document.getElementById("mountains3");
      let mountains4 = document.getElementById("mountains4");
      let river5 = document.getElementById("river5");
      let boat6 = document.getElementById("boat6");
      let shop = document.querySelector(".Shop");
      let value = window.scrollY;
      stars1.style.left = value + "px";
      moon2.style.top = value * 4 + "px";
      mountains3.style.top = value * 2 + "px";
      mountains4.style.top = value * 1.5 + "px";
      river5.style.top = value + "px";
      boat6.style.top = value + "px";
      boat6.style.left = value * 3 + "px";
      shop.style.fontSize = value + "px";
      if (window.scrollY >= 67) {
        shop.style.fontSize = 67 + "px";
        shop.style.position = "fixed";
        if (window.scrollY >= 480) {
          shop.style.display = "none";
        } else {
          shop.style.display = "flex";
        }
        if (window.scrollY >= 128) {
          document.querySelector(".main").style.background =
            "linear-gradient(#376281, #10001f)";
        } else {
          document.querySelector(".main").style.background =
            "linear-gradient(#200016, #10001f)";
        }
      }
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
        <img src="./image/stars1.png" id="stars1" />
        <h2 className="Shop">Shoping</h2>
        <img src="./image/moon2.png" id="moon2" />
        <img src="./image/mountains3.png" id="mountains3" />
        <img src="./image/mountains4.png" id="mountains4" />
        <img src="./image/river5.png" id="river5" />
        <img src="./image/boat6.png" id="boat6" />
        <img src="./image/mountains7.png" id="mountains3" />
      </section>
      <div className="content">
        <h2>
          Le s??nateur fran??ais, Christian Cambon, pr??sident de la Commission des
          affaires ??trang??res, de la d??fense et des forces arm??es au S??nat, a
          interpell?? le gouvernement de son pays sur les ???grandes difficult??s???
          rencontr??es par les ressortissants marocains en mati??re de d??livrance
          de visas et leurs cons??quences sur les relations franco-marocaines.
        </h2>
        <p>
          Dans des lettres aux ministres des Affaires ??trang??res et de
          l'Int??rieur, M. Cambon, ??galement pr??sident du groupe
          interparlementaire d'amiti?? France-Maroc du S??nat, affirme avoir ??t??
          saisi, ces derni??res semaines, comme nombre de ses coll??gues
          s??nateurs, de plusieurs cas de refus de d??livrance de visas pour des
          ressortissants marocains souhaitant se rendre en France.
        </p>
        <br />
        <p>
          ???Cela alors que la demande semblait parfaitement l??gitime, comme par
          exemple un m??decin souhaitant se rendre ?? un congr??s international de
          m??decine ou un sportif devant participer ?? une comp??tition
          internationale???, ??crit-il ?? l'adresse de la cheffe de la diplomatie,
          Catherine Colonna, et du locataire de la Place Beauvau, G??rald
          Darmanin.
        </p>{" "}
        <br />
        <p>
          Dans ce type de situation, le refus de d??livrance de visa par les
          autorit??s fran??aises suscite une ???forte ??motion et une l??gitime
          incompr??hension??? de la part des ressortissants marocains, souligne le
          s??nateur.
        </p>{" "}
        <br />
        <p>
          ???Plus profond??ment, l'augmentation r??cente des d??cisions de refus de
          d??livrance de visas ou de titres de s??jour aux ressortissants
          marocains par les autorit??s fran??aises pourrait porter un grave
          pr??judice aux relations politiques, ??conomiques et culturelles avec le
          Maroc, un pays ami de la France et un p??le de stabilit?? essentiel dans
          une r??gion o?? les risques et les menaces sont nombreux???, rel??ve le
          s??nateur fran??ais.
        </p>{" "}
        <br />
        <p>
          Et de poursuivre que le Maroc repr??sente ???un partenaire strat??gique???
          de la France, notamment dans les domaines ??conomique et culturel, avec
          de nombreuses entreprises fran??aises et un r??seau culturel tr??s dense,
          ou encore en mati??re de lutte contre le terrorisme et sur la question
          migratoire.
        </p>{" "}
        <br />
        <p>
          ???Pour ??viter tout risque de fragiliser notre coop??ration bilat??rale,
          et notamment la place tr??s importante des entreprises fran??aises dans
          ce pays, il me semblerait donc opportun que vous puissiez donner les
          instructions n??cessaires ?? vos services afin qu'ils fassent preuve
          d'un plus grand discernement dans la proc??dure de d??livrance de
          visas???, conclut-il.
        </p>{" "}
        <br />
      </div>
    </div>
  );
};

export default App;

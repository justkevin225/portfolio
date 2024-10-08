import { useState, useEffect } from "react";
import Button from "./components/Button";
import Stack from "./components/Stack";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { BarLoader } from "react-spinners";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

/* eslint-disable react/no-unescaped-entities */
const App = () => {
  const [procjectToggler1, setProjectToggler1] = useState(false);
  const [procjectToggler2, setProjectToggler2] = useState(false);
  const [procjectToggler3, setProjectToggler3] = useState(false);
  const [procjectToggler4, setProjectToggler4] = useState(false);
  const [procjectToggler5, setProjectToggler5] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const reactSwAlert = withReactContent(Swal);
  const toast = reactSwAlert.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = reactSwAlert.stopTimer;
      toast.onmouseleave = reactSwAlert.resumeTimer;
    },
  });

  const onCvBtnClick = () => {
    toast.fire({
      icon: "success",
      title: `<span class="font-[Kanit]">Vérifiez votre liste de téléchargement</span>`,
    });
  };

  useEffect(() => {
    const images = document.querySelectorAll("img");

    const handleImageLoad = () => {
      // Vérifier si toutes les images sont chargées
      const allImagesLoaded = Array.from(images).every((img) => img.complete);

      if (allImagesLoaded) {
        // Mettre à jour l'état pour indiquer que toutes les images sont chargées
        setImagesLoaded(true);
      }
    };

    // Attacher l'événement onLoad à chaque image
    images.forEach((img) => {
      img.addEventListener("load", handleImageLoad);
    });

    // Détacher les écouteurs d'événements lorsque le composant est démonté
    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
      });
    };
  }, []);
  return (
    <div>
      {imagesLoaded === false ? (
        <div className="h-screen w-screen bg-black">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 flex items-center justify-center flex-col">
            <img
              src="./mon logo - fond noir.png"
              alt="logo"
              className="w-[100px]"
            />
            <BarLoader color="#fff" />
            <div className="text-white">Un instant...</div>
          </div>
        </div>
      ) : (
        <div className="font-[Kanit] bg-black text-white">
          {/* TOP  */}
          <header className="flex justify-center items-center">
            <a href="#">
              <img
                src="./mon logo - fond noir.png"
                alt="logo"
                className="w-[100px]"
              />
            </a>
          </header>
          <main className="mx-auto w-[90%] md:w-[65%] lg:w-[55%]">
            {/* WELCOME  */}
            <section>
              {/* BODY  */}
              <div className="mt-6">
                <div className="text-xl">Salut👋, je suis</div>
                <h1 className="text-3xl font-bold">KEVIN KOUAKOU</h1>
                <p className="mt-2 w-full text-justify">
                  dévéloppeur web fullstack en freelance 💻 avec une expérience
                  éprouvée dans la fourniture de solutions de haute qualité.
                  Explorez mon portfolio afin de découvrir mes projets et ma
                  passion pour le numérique ! 🚀
                </p>
                {/* BUTTONS  */}
                <div className="my-3 flex gap-4">
                  <a
                    onClick={onCvBtnClick}
                    href="./CV - KEVIN KOUAKOU.pdf"
                    download="CV - KEVIN KOUAKOU.pdf"
                  >
                    <Button
                      text="MON CV"
                      forceText={true}
                      icon="fa-duotone fa-download"
                    />
                  </a>
                  <a
                    href="https://github.com/justkevin225"
                    rel="noreferrer"
                    target="_blank"
                    className="hidden md:inline-block"
                  >
                    <Button
                      text="justkevin225"
                      icon="fa-brands fa-github"
                      bg="bg-slate-500"
                    />
                  </a>
                  <a
                    href="https://github.com/justkevin225"
                    rel="noreferrer"
                    target="_blank"
                    className="md:hidden overflow-hidden group relative bg-slate-500 flex justify-center items-center px-2 rounded-md"
                  >
                    <i className="fa-brands fa-github"></i>
                    <div className="absolute top-0 w-full h-1/2 bg-white opacity-30 scale-x-0 origin-left group-hover:scale-x-100 transition-all duration-300"></div>
                    <div className="absolute bottom-0 w-full h-1/2 bg-white opacity-20 scale-x-0 origin-right group-hover:scale-x-100 transition-all duration-300"></div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kevin-kouakou-234508252/"
                    rel="noreferrer"
                    target="_blank"
                    className="hidden md:inline-block"
                  >
                    <Button
                      text="Kevin Kouakou"
                      icon="fa-brands fa-linkedin"
                      bg="bg-blue-500"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kevin-kouakou-234508252/"
                    rel="noreferrer"
                    target="_blank"
                    className="md:hidden overflow-hidden group relative bg-blue-500 flex justify-center items-center px-2 rounded-md"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                    <div className="absolute top-0 w-full h-1/2 bg-white opacity-30 scale-x-0 origin-left group-hover:scale-x-100 transition-all duration-300"></div>
                    <div className="absolute bottom-0 w-full h-1/2 bg-white opacity-20 scale-x-0 origin-right group-hover:scale-x-100 transition-all duration-300"></div>
                  </a>
                </div>
              </div>
            </section>

            {/* STACKS  */}
            <section className="mt-8 text-justify">
              <h1 className="relative text-2xl font-semibold my-2">
                <span>STACKS</span>
                <div className="bg-white bottom-0 left-0 w-12 h-1"></div>
              </h1>
              <p>
                Ci-dessous, la liste de mes stacks techniques🔥 en
                programmation.
              </p>

              <ul className="py-3">
                <Stack value="JAVASCRIPT" />
                <Stack value="TYPESCRIPT" />
                <Stack value="REACT" />
                <Stack value="TAILWIND CSS" />
                <Stack value="NODE JS" />
                <Stack value="EXPRESS JS" />
                <Stack value="MONGODB" />
                <Stack value="MYSQL" />
              </ul>
            </section>

            {/* PROJECTS  */}
            <section className="mt-8">
              <h1 className="relative text-2xl font-semibold my-2">
                <span>PROJETS</span>
                <div className="bg-white bottom-0 left-0 w-12 h-1"></div>
              </h1>
              <p className="text-justify">
                J'ai fait une selection de quelques uns de mes projets 🚀 que
                vous pourrez explorer ci-dessous😉.
              </p>

              <ul className="my-3 grid grid-cols-1 gap-3">
                {/* PROJECT 5  */}
                <li className="border border-gray-300 rounded-[5px] py-3 px-5">
                  <div
                    className={`flex justify-between p-3 rounded-[5px] ${
                      procjectToggler5 && "bg-gray-900"
                    }`}
                  >
                    <div
                      onClick={() => setProjectToggler5((v) => !v)}
                      className="flex gap-2 text-xs items-center cursor-pointer"
                    >
                      <i
                        className={`fa-solid fa-circle-chevron-down transition-all duration-200 ${
                          procjectToggler5 === true && "rotate-180"
                        }`}
                      ></i>
                      <spand className="text-sm font-semibold flex gap-2 items-center">
                        GC2CARDS
                      </spand>
                    </div>
                    <div className="text-[10px] flex items-center gap-2">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://gc2cards.com/"
                        className="flex items-center gap-2 text-xs"
                      >
                        <span>Visiter</span>
                        <i className="fa-duotone fa-arrow-up-right-from-square fa-xs"></i>
                      </a>
                    </div>
                  </div>
                  <div
                    className={`my-5 ${
                      procjectToggler5 ? "visible" : "hidden"
                    }`}
                  >
                    <p className="p-3 pt-0 font-light text-sm">
                      Plateforme e-commerce de vente de cartes cadeaux et
                      d'abonnements.
                    </p>
                    <Splide
                      options={{
                        rewind: true,
                        perMove: 1,
                        gap: 20,
                        type: "loop",
                        focus: "center",
                        lazyLoad: "nearby",
                        pagination: true,
                      }}
                      className="h-[350px] rounded-md overflow-hidden"
                    >
                      <SplideSlide>
                        <img
                          src="./images/gc2cards 1.jpg"
                          alt="gc2cards 1.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img
                          src="./images/gc2cards 2.jpg"
                          alt="gc2cards 2.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img
                          src="./images/gc2cards 3.jpg"
                          alt="gc2cards 3.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img
                          src="./images/gc2cards 4.jpg"
                          alt="gc2cards 4.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img
                          src="./images/gc2cards 5.jpg"
                          alt="gc2cards 5.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                    </Splide>
                  </div>
                </li>

                {/* PROJECT 4  */}
                <li className="border border-gray-300 rounded-[5px] py-3 px-5">
                  <div
                    className={`flex justify-between p-3 rounded-[5px] ${
                      procjectToggler4 && "bg-gray-900"
                    }`}
                  >
                    <div
                      onClick={() => setProjectToggler4((v) => !v)}
                      className="flex gap-2 text-xs items-center cursor-pointer"
                    >
                      <i
                        className={`fa-solid fa-circle-chevron-down transition-all duration-200 ${
                          procjectToggler4 === true && "rotate-180"
                        }`}
                      ></i>
                      <spand className="text-sm font-semibold flex gap-2 items-center">
                        KEVTUNES
                      </spand>
                    </div>
                    <div className="text-[10px] flex items-center gap-2">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://justkevin225.github.io/kevtunes/"
                        className="flex items-center gap-2 text-xs"
                      >
                        <span>Visiter</span>
                        <i className="fa-duotone fa-arrow-up-right-from-square fa-xs"></i>
                      </a>
                    </div>
                  </div>
                  <div
                    className={`my-5 ${
                      procjectToggler4 ? "visible" : "hidden"
                    }`}
                  >
                    <p className="p-3 pt-0 font-light text-sm">
                      Mini plateforme d'ecoute en streaming 🎧 basée sur l'api
                      de Spotify.
                    </p>
                    <Splide
                      options={{
                        rewind: true,
                        perMove: 1,
                        gap: 20,
                        type: "loop",
                        focus: "center",
                        lazyLoad: "nearby",
                        pagination: true,
                      }}
                      className="h-[350px] rounded-md overflow-hidden"
                    >
                      <SplideSlide>
                        <img
                          src="./images/kevtunes - 1.jpg"
                          alt="kevtunes - 1.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img
                          src="./images/kevtunes - 2.jpg"
                          alt="kevtunes - 2.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img
                          src="./images/kevtunes - 3.jpg"
                          alt="kevtunes - 3.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img
                          src="./images/kevtunes - 4.jpg"
                          alt="kevtunes - 4.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                    </Splide>
                  </div>
                </li>

                {/* PROJECT 1  */}
                <li className="border border-gray-300 rounded-[5px] py-3 px-5">
                  <div
                    className={`flex justify-between p-3 rounded-[5px] ${
                      procjectToggler1 && "bg-gray-900"
                    }`}
                  >
                    <div
                      onClick={() => setProjectToggler1((v) => !v)}
                      className="flex gap-2 text-xs items-center cursor-pointer"
                    >
                      <i
                        className={`fa-solid fa-circle-chevron-down transition-all duration-200 ${
                          procjectToggler1 === true && "rotate-180"
                        }`}
                      ></i>
                      <span className="text-sm font-semibold flex gap-2 items-center">
                        CIPHONE
                      </span>
                    </div>
                    <div className="text-[10px] flex items-center gap-2">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://ciphone-ci.com"
                        className="flex items-center gap-2 text-xs"
                      >
                        <span>Visiter</span>
                        <i className="fa-duotone fa-arrow-up-right-from-square fa-xs"></i>
                      </a>
                    </div>
                  </div>
                  <div
                    className={`my-5 ${
                      procjectToggler1 ? "visible" : "hidden"
                    }`}
                  >
                    <p className="p-3 pt-0 font-light text-sm">
                      CIPHONE est une plateforme e-commerce dédiée à la vente et
                      à la promotion d'une vaste gamme de produits
                      électroniques.
                    </p>
                    <Splide
                      options={{
                        rewind: true,
                        perMove: 1,
                        gap: 20,
                        type: "loop",
                        focus: "center",
                        lazyLoad: "nearby",
                        pagination: true,
                      }}
                      className="h-[350px] rounded-md overflow-hidden"
                    >
                      <SplideSlide>
                        <img
                          src="./images/ciphone - 1.jpg"
                          alt="ciphone - 1.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img
                          src="./images/ciphone - 2.jpg"
                          alt="ciphone - 2.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img
                          src="./images/ciphone - 3.jpg"
                          alt="ciphone - 3.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img
                          src="./images/ciphone - 4.jpg"
                          alt="ciphone - 4.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                    </Splide>
                  </div>
                </li>

                {/* PROJECT 2  */}
                <li className="border border-gray-300 rounded-[5px] py-3 px-5">
                  <div
                    className={`flex justify-between p-3 rounded-[5px] ${
                      procjectToggler2 && "bg-gray-900"
                    }`}
                  >
                    <div
                      onClick={() => setProjectToggler2((v) => !v)}
                      className="flex gap-2 text-xs items-center cursor-pointer"
                    >
                      <i
                        className={`fa-solid fa-circle-chevron-down transition-all duration-200 ${
                          procjectToggler2 === true && "rotate-180"
                        }`}
                      ></i>
                      <spand className="text-sm font-semibold flex gap-2 items-center">
                        DEVDEBABI
                      </spand>
                    </div>
                    <div className="text-[10px] flex items-center gap-2">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://devdebabi.com"
                        className="flex items-center gap-2 text-xs"
                      >
                        <span>Visiter</span>
                        <i className="fa-duotone fa-arrow-up-right-from-square fa-xs"></i>
                      </a>
                    </div>
                  </div>
                  <div
                    className={`my-5 ${
                      procjectToggler2 ? "visible" : "hidden"
                    }`}
                  >
                    <p className="p-3 pt-0 font-light text-sm">
                      Site vitrine de DEVDEBABI qui est un studio ivoirien de
                      dévéloppement de jeux.
                    </p>
                    <Splide
                      options={{
                        rewind: true,
                        perMove: 1,
                        gap: 20,
                        type: "loop",
                        focus: "center",
                        lazyLoad: "nearby",
                        pagination: true,
                      }}
                      className="h-[350px] rounded-md overflow-hidden"
                    >
                      <SplideSlide>
                        <img
                          src="./images/devdebabi - 1.jpg"
                          alt="devdebabi - 1.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img
                          src="./images/devdebabi - 2.jpg"
                          alt="devdebabi - 2.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img
                          src="./images/devdebabi - 3.jpg"
                          alt="devdebabi - 3.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img
                          src="./images/devdebabi - 4.jpg"
                          alt="devdebabi - 4.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                    </Splide>
                  </div>
                </li>

                {/* PROJECT 3  */}
                <li className="border border-gray-300 rounded-[5px] py-3 px-5">
                  <div
                    className={`flex justify-between p-3 rounded-[5px] ${
                      procjectToggler3 && "bg-gray-900"
                    }`}
                  >
                    <div
                      onClick={() => setProjectToggler3((v) => !v)}
                      className="flex gap-2 text-xs items-center cursor-pointer"
                    >
                      <i
                        className={`fa-solid fa-circle-chevron-down transition-all duration-200 ${
                          procjectToggler3 === true && "rotate-180"
                        }`}
                      ></i>
                      <spand className="text-sm font-semibold flex gap-2 items-center">
                        GC2CARDS - BACKOFFICE
                      </spand>
                    </div>
                    <div className="text-[10px] flex items-center gap-2">
                      <span className="flex items-center gap-2 text-xs">
                        <i className="fa-duotone fa-lock fa-xs"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className={`my-5 ${
                      procjectToggler3 ? "visible" : "hidden"
                    }`}
                  >
                    <p className="p-3 pt-0 font-light text-sm">
                      Dashboard de gestion de la plateforme gc2cards (Site
                      e-commerce de vente de cartes cadeaux et d'abonnements)
                    </p>
                    <Splide
                      options={{
                        rewind: true,
                        perMove: 1,
                        gap: 20,
                        type: "loop",
                        focus: "center",
                        lazyLoad: "nearby",
                        pagination: true,
                      }}
                      className="h-[350px] rounded-md overflow-hidden"
                    >
                      <SplideSlide>
                        <img
                          src="./images/gc2cards - dashboard 1.jpg"
                          alt="gc2cards - dashboard - 1.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img
                          src="./images/gc2cards - dashboard 2.jpg"
                          alt="gc2cards - dashboard - 2.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img
                          src="./images/gc2cards - dashboard 3.jpg"
                          alt="gc2cards - dashboard - 3.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <img
                          src="./images/gc2cards - dashboard 4.jpg"
                          alt="gc2cards - dashboard - 4.jpg"
                          className="object-cover h-[300px] w-full"
                        />
                      </SplideSlide>
                    </Splide>
                  </div>
                </li>
              </ul>
            </section>
          </main>

          {/* FOOTER  */}
          <footer className="text-xs text-center mt-10 pb-5 w-[90%] mx-auto">
            <div>
              COPYRIGHT &copy; {new Date().getFullYear()}{" "}
              <span className="font-bold">KEV PORTFOLIO</span> . Tous droits
              réservés
            </div>
            <div>
              <i className="fa-duotone fa-code"></i> and{" "}
              <i className="fa-duotone fa-palette"></i> with{" "}
              <i className="fa-solid fa-heart"></i> By{" "}
              <span className="font-bold">KEV</span>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;

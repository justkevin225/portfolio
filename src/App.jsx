import { useState } from "react";
import Button from "./components/Button";
import Stack from "./components/Stack";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

/* eslint-disable react/no-unescaped-entities */
const App = () => {
  const [procjectToggler1, setProjectToggler1] = useState(false);
  const [procjectToggler2, setProjectToggler2] = useState(false);
  const [procjectToggler3, setProjectToggler3] = useState(false);
  return (
    <div className="font-[Kanit] bg-black p-5 text-white">
      {/* TOP  */}
      <header className="flex justify-between items-center">
        <img
          src="./mon logo - fond noir.png"
          alt="kev logo"
          className="w-16 md:w-20"
        />
        <a
          href="mailto:kevinkouakou113@gmail.com"
          className="flex items-center gap-2 text-xs md:text-sm"
        >
          <i className="fa-solid fa-at"></i>
          <span className="select-text">kevinkouakou113@gmail.com</span>
        </a>
      </header>
      <main className="mx-auto md:w-[65%] lg:w-[55%]">
        {/* WELCOME  */}
        <section>
          {/* BODY  */}
          <div className="mx-4 mt-20">
            <div className="text-xl">Salut👋, je suis</div>
            <h1 className="text-3xl font-bold">KEVIN KOUAKOU</h1>
            <p className="mt-2 w-full">
              developpeur💻 et étudiant en deuxième année de cycle ingénieur en
              sécurité informatique et technologies du web 🔒 à l'ESATIC.
              Explorez mon portfolio afin de découvrir mes projets et ma passion
              pour le numérique ! 🚀
            </p>
            {/* BUTTONS  */}
            <div className="my-3 flex gap-4">
              <a href="#">
                <Button
                  text="mon cv"
                  forceText={true}
                  icon="fa-duotone fa-download"
                />
              </a>
              <a href="https://github.com/justkevin225" rel="noreferrer" target="_blank" className="hidden md:inline-block">
                <Button
                  text="justkevin225"
                  icon="fa-brands fa-github"
                  bg="bg-slate-500"
                />
              </a>
              <a
                href="https://github.com/justkevin225" rel="noreferrer" target="_blank"
                className="md:hidden overflow-hidden group relative bg-slate-500 flex justify-center items-center px-2 rounded-md"
              >
                <i className="fa-brands fa-github"></i>
                <div className="absolute top-0 w-full h-1/2 bg-white opacity-30 scale-x-0 origin-left group-hover:scale-x-100 transition-all duration-300"></div>
                <div className="absolute bottom-0 w-full h-1/2 bg-white opacity-20 scale-x-0 origin-right group-hover:scale-x-100 transition-all duration-300"></div>
              </a>
              <a href="https://www.linkedin.com/in/kevin-kouakou-234508252/" rel="noreferrer" target="_blank" className="hidden md:inline-block">
                <Button
                  text="Kevin Kouakou"
                  icon="fa-brands fa-linkedin"
                  bg="bg-blue-500"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/kevin-kouakou-234508252/" rel="noreferrer" target="_blank"
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
        <section className="mx-4 mt-16">
          <h1 className="relative text-2xl font-semibold my-2">
            <span>STACKS</span>
            <div className="bg-white bottom-0 left-0 w-12 h-1"></div>
          </h1>
          <p>
            Ci-dessous, la liste de mes stacks techniques🔥 en programmation.
          </p>

          <ul className="py-3">
            <Stack value="REACT" />
            <Stack value="TAILWIND CSS" />
            <Stack value="NODE JS" />
            <Stack value="MONGODB" />
            <Stack value="EXPRESS" />
          </ul>
        </section>

        {/* SECURITY  */}
        <section className="mx-4 mt-10">
          <h1 className="relative text-2xl font-semibold my-2">
            <span>{"SECURITé".toUpperCase()}</span>
            <div className="bg-white bottom-0 left-0 w-12 h-1"></div>
          </h1>
          <p>
            J'ai plutôt des compétences basiques👀 en sécurité informatique.
            Ainsi vous avez ci-dessous les outils et systèmes sur lesquelles
            j'ai une petite connaissance.
          </p>

          <ul className="py-3">
            <Stack value="LINUX" />
            <Stack value="WINDOWS" />
            <Stack value="METASPLOIT" />
            <Stack value="NESSUS" />
            <Stack value="BURPSUITE" />
            <Stack value="NMAP" />
            <Stack value="OPENVAS" />
            <Stack value="VIRTUALBOX" />
          </ul>
        </section>

        {/* PROJECTS  */}
        <section className="mx-4 mt-10">
          <h1 className="relative text-2xl font-semibold my-2">
            <span>PROJETS</span>
            <div className="bg-white bottom-0 left-0 w-12 h-1"></div>
          </h1>
          <p>
            J'ai fais une selection de 3 de mes projets🚀 que vous pourrez
            explorer ci-dessous😉.
          </p>

          <ul className="my-3 grid grid-cols-1 gap-3">
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
                  <span>REACT JS</span>
                  <span>•</span>
                  <span>NODE JS</span>
                  <span className="hidden md:inline">•</span>
                  <span className="hidden md:inline">EXPRESS</span>
                  <span className="hidden md:inline">•</span>
                  <span className="hidden md:inline">MONGODB</span>
                </div>
              </div>
              <div
                className={`my-5 ${procjectToggler1 ? "visible" : "hidden"}`}
              >
                <p className="p-3 pt-0 font-light text-sm">
                  CIPHONE est une site e-commerce dédié à la vente et à la
                  promotion d'une vaste gamme de produits électroniques.
                </p>
                <a href="#" className="flex items-center gap-2 text-xs my-2">
                  <span>En developement</span>
                  <i className="fa-duotone fa-arrow-up-right-from-square fa-xs"></i>
                </a>
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
                  <span>BOOTSTRAP</span>
                  <span>•</span>
                  <span>VANILLA JS</span>
                </div>
              </div>
              <div
                className={`my-5 ${procjectToggler2 ? "visible" : "hidden"}`}
              >
                <p className="p-3 pt-0 font-light text-sm">
                  Site vitrine de DEVDEBABI qui est un studio ivoirien de developpement de jeux.
                </p>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://devdebabi.com"
                  className="flex items-center gap-2 text-xs my-2"
                >
                  <span>Visiter</span>
                  <i className="fa-duotone fa-arrow-up-right-from-square fa-xs"></i>
                </a>
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

            {/* PROJECT 3 */}
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
                    MEDIPROXPERT
                  </spand>
                </div>
                <div className="text-[10px] flex items-center gap-2">
                  <span>HTML</span>
                  <span>•</span>
                  <span>CSS</span>
                  <span>•</span>
                  <span>JS</span>
                </div>
              </div>
              <div
                className={`my-5 ${procjectToggler3 ? "visible" : "hidden"}`}
              >
                <p className="p-3 pt-0 font-light text-sm">
                  Site vitrine de MEDIPROXPERT qui est une entreprise de vente
                  de produits pharmaceutiques, parapharmaceutiques et de
                  matériels médicaux basée en Côte d'Ivoire.
                </p>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://mediproxpert.ci"
                  className="flex items-center gap-2 text-xs my-2"
                >
                  <span>Visiter</span>
                  <i className="fa-duotone fa-arrow-up-right-from-square fa-xs"></i>
                </a>
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
                      src="./images/mediproxpert - 1.jpg"
                      alt="mediproxpert - 1.jpg"
                      className="object-cover h-[300px] w-full"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <img
                      src="./images/mediproxpert - 2.jpg"
                      alt="mediproxpert - 2.jpg"
                      className="object-cover h-[300px] w-full"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <img
                      src="./images/mediproxpert - 3.jpg"
                      alt="mediproxpert - 3.jpg"
                      className="object-cover h-[300px] w-full"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <img
                      src="./images/mediproxpert - 4.jpg"
                      alt="mediproxpert - 4.jpg"
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
      <footer className="text-xs text-center">
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
  );
};

export default App;

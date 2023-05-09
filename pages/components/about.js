export default function About({darkMode}) {
  return (
    <section id="about" className={`w-full h-auto se:h-screen ${darkMode ? "dark": ""}`}>
      <div className="p-10 mx-auto flex flex-col justify-center w-full h-full max-w-[860px]">
        <div className="pb-8">
          <p className="text-black text-4xl font-bold inline border-b-4 border-teal-600 dark:text-slate-300">
            About
          </p>
        </div>
        <p className="text-xl leading-normal se:leading-loose text-gray-800 mt-5 sm:mt-20 dark:text-slate-300"> 
          I am currently a Master's student in the Graduate School of Information Science and Technology at <a className="text-black font-bold cursor-pointer hover:underline dark:text-white" href="https://www.u-tokyo.ac.jp/en/index.html">the University of Tokyo</a>. 
          As a member of <a className="text-black font-bold cursor-pointer hover:underline dark:text-white" href="http://www.hal.t.u-tokyo.ac.jp/lab/en/index_1.xhtml">Aizawa-Yamakata-Matsui Lab</a>, 
          I am supervised by <a className="text-black font-bold cursor-pointer hover:underline dark:text-white" href="https://yusukematsui.me/index.html">Yusuke Matsui</a>.
          Prior to this, I obtained my Bachelor's degree from <a className="text-black font-bold cursor-pointer hover:underline dark:text-white" href="https://en.wikipedia.org/wiki/Harbin_Institute_of_Technology">Harbin Institute of Technology</a>. 
        </p>
        <p className="text-xl leading-loose text-gray-800 mt-5 sm:mt-20 dark:text-slate-300">
          <span className="text-black font-bold dark:text-white">When I'm not in front of a computer</span>, 
          I'm probably playing soccer on the field <span className="text-3xl">⚽</span>. 
          Besides, I like hiking <span className="text-3xl">⛰</span>.
        </p>
      </div>
    </section>
  )
}
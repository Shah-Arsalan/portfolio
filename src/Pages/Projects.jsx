import { Nav } from "../Components/Nav";
import note2 from "../images/Screenshot (91).png";
import labels from "../images/labels.png";
import edit from "../images/Screenshot (97).png";
import travel1 from "../images/travel1.png";
import travel2 from "../images/travel2.png";
import travel3 from "../images/travel3.png";
import travel4 from "../images/travel4.png";
import e1 from "../images/e1.png";
import e2 from "../images/e2.png";
import e3 from "../images/e3.png";
import e4 from "../images/e4.png";
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";
import f1 from "../images/f1.png";
import f2 from "../images/f2.png";
import f3 from "../images/f3.png";
import f4 from "../images/f4.png";
import f5 from "../images/f5.png";
import signup from "../images/signup.png";
import websack from "../images/websack.png";
const Projects = () => {
  return (
    <div className="font-poppins">
      <Nav />
      {/* <div className="text-center cb:ap-4">
        <div className="text-custompurple text-3xl mb-4 flex justify-center items-center flex-wrap gap-3 px-3">
          <i class="far fa-sticky-note"></i>{" "}
          <p>Note Buddy - The note taking app</p>
        </div>
        <div className="h-96 cb:flex justify-center items-center cb:w-4/5 m-auto  cb:h-auto">
          <div className="relative h-2/4 p-3 cb:h-full">
            <img
              src={note2}
              className="object-contain h-full w-full cb:h-auto"
            />
          </div>
          <div className="relative h-2/4 p-3 cb:h-full">
            <img
              src={note1}
              className="object-contain h-full w-full cb:h-auto"
            />
          </div>
        </div>
      </div>
      <div className="px-4">
        <h1 className=" text-custompurple text-lg">Tech Stack</h1>
        <p>
          MongoDb , Express , NodeJs , TypeScript ,Jest Testing Library , React
        </p>
      </div>
      <div className="flex flex-col justify-center items-center cb:flex-row gap-8">
        <button className="rounded bg-custompurple py-3 px-3 hover:bg-purple-900 text-white mt-2  w-36">
          See live
        </button>
        <button className="rounded bg-white py-3 px-3 hover:bg-custompurple hover:text-white text-black border-2 border-custompurple w-36">
          Source Code
        </button>
      </div> */}
      <div className="text-custompurple text-xl cb:text-3xl mb-4 flex justify-center items-center flex-wrap gap-3 px-3 mt-10">
        <i class="far fa-sticky-note"></i>{" "}
        <p>Note Buddy - The note taking app</p>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center  cb:flex-row cb:flex-wrap p-16 pt-6 pb-6 cb:pt-6">
        <div className=" cb:w-3/5">
          <img src={note2} className=" w-full h-full object-cover" />
        </div>
        <div className=" cb:w-1/3">
          <img src={signup} className=" w-full h-full object-cover" />
        </div>
        <div className="cb:w-1/3 cb:mt-4">
          <img src={labels} className=" w-full h-full object-cover" />
        </div>
        <div className=" cb:w-1/3 cb:mt-4">
          <img src={edit} className=" w-full h-full object-cover" />
        </div>
      </div>
      <div className="p-10 text-gray-500 space-y-4">
        <h1 className=" text-custompurple text-2xl">Tech Stack</h1>
        <p className="text-lg">
          MongoDb , Express , NodeJs , TypeScript , Jest Testing Library , React
          ,{" "}
          <a
            href="https://frid-ui.netlify.app/index.html"
            className="text-custompurple hover:text-purple-800"
          >
            Frid UI
          </a>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center cb:flex-row gap-4 mb-20 cb:gap-8">
        <a href="https://notebuddy.vercel.app/">
          <button className="rounded bg-custompurple p-2 border-custompurple border-2 hover:bg-purple-900 text-white  w-36 rounded-full ">
            See live!
          </button>
        </a>

        <a href="https://github.com/Shah-Arsalan/notebuddy">
          <button className="rounded bg-white p-2 hover:bg-custompurple hover:text-white text-black border-2 border-custompurple w-36 rounded-full">
            Source Code
          </button>
        </a>
      </div>

      {/*  */}

      <div className="text-custompurple text-xl cb:text-3xl mb-4 flex justify-center items-center flex-wrap gap-3 px-3 ">
        <i class="fas fa-video"></i> <p>Travel Bug - Video Library app</p>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center  cb:flex-row cb:flex-wrap p-16 pt-6 pb-6 cb:pt-6">
        <div className=" cb:w-3/5">
          <img src={travel1} className=" w-full h-full object-cover" />
        </div>
        <div className=" cb:w-1/3">
          <img src={travel2} className=" w-full h-full object-cover" />
        </div>
        <div className="cb:w-1/3 cb:mt-4">
          <img src={travel3} className=" w-full h-full object-cover" />
        </div>
        <div className=" cb:w-1/3 cb:mt-4">
          <img src={travel4} className=" w-full h-full object-cover" />
        </div>
      </div>
      <div className="p-10 text-gray-500 space-y-4">
        <h1 className=" text-custompurple text-2xl">Tech Stack</h1>
        <p className="text-lg">
          React + Redux Toolkit , React Router ,{" "}
          <a
            href="https://frid-ui.netlify.app/index.html"
            className="text-custompurple hover:text-purple-800"
          >
            Frid UI
          </a>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center cb:flex-row gap-4 mb-20 cb:gap-8">
        <a href="https://travel-bug-videos.netlify.app/">
          <button className="rounded bg-custompurple p-2 border-custompurple border-2 hover:bg-purple-900 text-white  w-36 rounded-full ">
            See live!
          </button>
        </a>

        <a href="https://github.com/Shah-Arsalan/TravelBug">
          <button className="rounded bg-white p-2 hover:bg-custompurple hover:text-white text-black border-2 border-custompurple w-36 rounded-full">
            Source Code
          </button>
        </a>
      </div>

      {/*  */}

      <div className="text-custompurple text-xl cb:text-3xl mb-4 flex justify-center items-center flex-wrap gap-3 px-3 ">
        <i class="fas fa-store"></i> <p>Wanderer - Ecommerce app</p>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center  cb:flex-row cb:flex-wrap p-16 pt-6 pb-6 cb:pt-6">
        <div className=" cb:w-3/5">
          <img src={e1} className=" w-full h-full object-cover" />
        </div>
        <div className=" cb:w-1/3">
          <img src={e3} className=" w-full h-full object-cover" />
        </div>
        <div className="cb:w-1/3 cb:mt-4">
          <img src={e2} className=" w-full h-full object-cover" />
        </div>
        <div className=" cb:w-1/3 cb:mt-4">
          <img src={e4} className=" w-full h-full object-cover" />
        </div>
      </div>
      <div className="p-10 text-gray-500 space-y-4">
        <h1 className=" text-custompurple text-2xl">Tech Stack</h1>
        <p className="text-lg">
          React , HTML5 , CSS3 ,{" "}
          <a
            href="https://frid-ui.netlify.app/index.html"
            className="text-custompurple hover:text-purple-800"
          >
            Frid UI
          </a>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center cb:flex-row gap-4 mb-20 cb:gap-8">
        <a href="https://wanderer-stores.netlify.app/">
          <button className="rounded bg-custompurple p-2 border-custompurple border-2 hover:bg-purple-900 text-white  w-36 rounded-full ">
            See live!
          </button>
        </a>

        <a href="https://github.com/Shah-Arsalan/e-com-wanderer">
          <button className="rounded bg-white p-2 hover:bg-custompurple hover:text-white text-black border-2 border-custompurple w-36 rounded-full">
            Source Code
          </button>
        </a>
      </div>

      {/*  */}

      <div className="text-custompurple text-xl cb:text-3xl mb-4 flex justify-center items-center flex-wrap gap-3 px-3 ">
        <i class="far fa-window-maximize"></i> <p>Soothe - Web Extension</p>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center  cb:flex-row cb:flex-wrap p-16 pt-6 pb-6 cb:pt-6">
        <div className=" cb:w-3/5">
          <img src={s2} className=" w-full h-full object-cover" />
        </div>
        <div className=" cb:w-1/3">
          <img src={s3} className=" w-full h-full object-cover" />
        </div>
        <div className="cb:w-1/3 cb:mt-4">
          <img src={s1} className=" w-full h-full object-cover" />
        </div>
        <div className=" cb:w-1/3 cb:mt-4">
          <img src={s4} className=" w-full h-full object-cover" />
        </div>
      </div>
      <div className="p-10 text-gray-500 space-y-4">
        <h1 className=" text-custompurple text-2xl">Tech Stack</h1>
        <p className="text-lg">React</p>
      </div>
      <div className="flex flex-col justify-center items-center cb:flex-row gap-4 mb-20 cb:gap-8">
        <a href="https://soothe.netlify.app/">
          <button className="rounded bg-custompurple p-2 border-custompurple border-2 hover:bg-purple-900 text-white  w-36 rounded-full ">
            See live!
          </button>
        </a>

        <a href="https://github.com/Shah-Arsalan/soothe">
          <button className="rounded bg-white p-2 hover:bg-custompurple hover:text-white text-black border-2 border-custompurple w-36 rounded-full">
            Source Code
          </button>
</a>
          <a href="https://addons.mozilla.org/en-US/firefox/addon/soothee/">
          <button className="rounded bg-white p-2 hover:bg-custompurple hover:text-white text-black border-2 border-custompurple w-36 rounded-full">
            Get on mozilla
          </button>
        </a>
      </div>
      

      {/*  */}

      <div className="text-custompurple text-xl cb:text-3xl mb-4 flex justify-center items-center flex-wrap gap-3 px-3 ">
        <i class="fas fa-bell"></i> <p>Frid UI - CSS component Library</p>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center  cb:flex-row cb:flex-wrap p-16 pt-6 pb-6 cb:pt-6">
        <div className=" cb:w-3/5">
          <img src={f3} className=" w-full h-full object-cover" />
        </div>
        <div className=" cb:w-1/3">
          <img src={f5} className=" w-full h-full object-cover" />
        </div>
        <div className="cb:w-1/3 cb:mt-4">
          <img src={f2} className=" w-full h-full object-cover" />
        </div>
        <div className=" cb:w-1/3 cb:mt-4">
          <img src={f1} className=" w-full h-full object-cover" />
        </div>
      </div>
      <div className="p-10 text-gray-500 space-y-4">
        <h1 className=" text-custompurple text-2xl">Tech Stack</h1>
        <p className="text-lg">HTML5 , CSS3</p>
      </div>
      <div className="flex flex-col justify-center items-center cb:flex-row gap-4 mb-20 cb:gap-8">
        <a href="https://frid-ui.netlify.app/">
          <button className="rounded bg-custompurple p-2 border-custompurple border-2 hover:bg-purple-900 text-white  w-36 rounded-full ">
            See live!
          </button>
        </a>

        <a href="https://github.com/Shah-Arsalan/frid-component-library">
          <button className="rounded bg-white p-2 hover:bg-custompurple hover:text-white text-black border-2 border-custompurple w-36 rounded-full">
            Source Code
          </button>
        </a>
      </div>

      {/*  */}

      <div className="text-custompurple text-xl cb:text-3xl mb-4 flex justify-center items-center flex-wrap gap-3 px-3 ">
        <i class="fas fa-box-open"></i> <p>Websack - Webpack Starter</p>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center  cb:flex-row cb:flex-wrap p-16 pt-6 pb-6 cb:pt-6 ">
        <div className=" cb:w-2/4">
          <img src={websack} className=" w-full h-full object-cover" />
        </div>
      </div>
      <div className="p-10 text-gray-500 space-y-4">
        <h1 className=" text-custompurple text-2xl">Features</h1>
        <p className="text-lg">
          Configuration File , Loaders , Babel , CSS , Assets , HTML web pack
          plugin , Code Splitting , Caching , Lazy Loading , Dev Setup
        </p>
      </div>
      <div className="flex flex-col justify-center items-center cb:flex-row gap-4 mb-20 cb:gap-8">

        <a href="https://github.com/Shah-Arsalan/websack">
          <button className="rounded bg-white p-2 hover:bg-custompurple hover:text-white text-black border-2 border-custompurple w-36 rounded-full">
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export { Projects };

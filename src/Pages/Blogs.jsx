import { Nav } from "../Components/Nav";

const Blogs = () => {
  return (
    <>
      <div className="font-poppins">
        <Nav />
        {/* <div className="flex flex-col px-6 justify-start items-start">
            <h1 className="text-2xl text-custompurple">&#9672; Difference Between Var, Let, Const in JS.</h1>
            <p className="ml-10 mt-4">Oct 25 , 2022</p>

        </div> */}

        <ol className="text-start px-10 cb:w-4/5 space-y-10 mt-10">
          <li className="flex flex-col gap-2">
            {" "}
            <div className="flex justify-start items-start">
            <p className="text-custompurple">&#9672;</p>
            <h1 className="text-custompurple text-lg ml-2  cb:text-2xl">
             Difference Between Var, Let, Const in JS.
            </h1>
            </div>
            <p className="ml-5 text-sm text-custompurple">Oct 25 , 2022</p>

            <p className="ml-5 text-sm text-gray-500">There are some concepts in JavaScript that seem pretty easy on the surface but might become a little tricky when pondered upon properly. Such is the case with the concept of identifiers viz var, let, and const in JS and the difference among them. This blog will discuss ... </p>
            <a href="https://medium.com/@shaharslan2278/difference-between-var-let-const-in-js-fdbdd93b44a6"><button className="rounded-full bg-custompurple px-3 py-2  hover:bg-purple-900 text-white ml-4 text-sm">Read more</button></a>
          </li>
          <li className="flex flex-col gap-2">{" "}
            <div className="flex justify-start items-start">
            <p className="text-custompurple">&#9672;</p>
            <h1 className="text-custompurple text-lg ml-2 cb:text-2xl">
            useMemo Hook in React
            </h1>
            </div>
            <p className="ml-5 text-sm text-custompurple">Oct 21 , 2022</p>

            <p className="ml-5 text-sm text-gray-500">useMemo is a react hook that primarily focuses on optimizing the code and avoiding expensive recomputations of values. Using useMemo we have the freedom to run only specific code on every render and cache the ... </p>
            <a href="https://medium.com/@shaharslan2278/usememo-hook-in-react-9d96d5dfc1a9"><button className="rounded-full bg-custompurple px-3 py-2  hover:bg-purple-900 text-white ml-4 text-sm">Read more</button></a>
            </li>
        <li className="flex flex-col gap-2">{" "}
            <div className="flex justify-start items-start">
            <p className="text-custompurple">&#9672;</p>
            <h1 className="text-custompurple text-lg ml-2 cb:text-2xl">
            The CSS Box Model

            </h1>
            </div>
            <p className="ml-5 text-sm text-custompurple">Oct 25 , 2022</p>

            <p className="ml-5 text-sm text-gray-500">Every HTML element is treated as a box by CSS. What it means is that whenever we try to manipulate the style of any HTML element more often than not we are changing the properties of its adjoined box(though there are some properties that don’t have anything to do with the box at all) ... </p>
            <a href="https://medium.com/@shaharslan2278/the-css-box-model-explained-94f960a24de" className="mb-6"><button className="rounded-full bg-custompurple px-3 py-2  hover:bg-purple-900 text-white ml-4 text-sm">Read more</button></a></li>
        </ol>
      </div>
    </>
  );
};

export { Blogs };

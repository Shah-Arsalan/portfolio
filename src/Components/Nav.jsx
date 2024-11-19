import { useNavigate } from "react-router-dom"

const Nav = () => {
  const navigate = useNavigate();
  return (
  
      <div className="shadow-md">
        <ul className=" flex justify-end text-black px-6 pt-8 space-x-6 pb-6 pl-20 items-center text-sm cb:text-base">
          <li className=" hover:text-custompurple cursor-pointer"  onClick={() => navigate("/")}>Home</li>
          <li className=" hover:text-custompurple cursor-pointer"  onClick={() => navigate("/projects")}>Projects</li>
          <li className=" hover:text-custompurple cursor-pointer" onClick={() => navigate("/blogs")}>Blogs</li>
          <li className="rounded bg-custompurple py-2 px-3 hover:bg-purple-900 text-white"><a href="https://drive.google.com/file/d/1Xgx8bVVzy3I9xb8E8Z1TrKdqtH_d9og9/view?usp=drive_link"><button>Resume</button></a></li>
        </ul>
      </div>

  );
};

export { Nav };

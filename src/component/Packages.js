import React from "react";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
const Packages = () => {
  return (
    <div className="bg">
      <div className="flex flex-col items-center bg-gray-50">
        <h1 className="font-bold text-[30px]">Our Supportive Plans</h1>
        <hr />
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-2">
      <div className="flex flex-col items-center gap-5 mx-5 my-5 py-10 sm:w-[60%] w-[90%] sm:border sm:rounded-3xl">
        <h1 className="flex justify-center items-center  sm:w-[200px] sm:h-[100px] w-[170px] h-[100px] bg-black text-white text-[40px]">
          <BiRupee /> 4999
        </h1>
        <div className="flex flex-col gap-2 text-[15px] font-semibold">
        <p>5-7 Pages</p>
        <hr className="w-[150px]" />
        <p>Free Domain (.com/.in/.net/.org)</p>
        <hr className="w-[150px]" />

        <p>Free Hosting For 1 Year</p>
        <hr className="w-[150px]" />

        <p>2 Email Ids</p>
        <hr className="w-[150px]" />

        <p>Basic SEO</p>
        <hr className="w-[150px]" />

        <p>Static Website</p>
        <hr className="w-[150px]" />

        <p>CSS3/HTML5/PHP/</p>
        <hr className="w-[150px]" />

        <p>CMS N/A</p>
        <hr className="w-[150px]" />

        <p>1 Years Full Support</p>
        <hr className="w-[150px]" />

        <p>3-4 Working Days</p>
        <hr className="w-[150px]" />
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-5 mx-5 my-5 py-10 sm:w-[60%] w-[90%] sm:border sm:rounded-3xl">
        <h1 className="flex justify-center items-center  sm:w-[200px] sm:h-[100px] w-[170px] h-[100px] bg-black text-white text-[40px]">
          <BiRupee /> 9999
        </h1>
        <div className="flex flex-col gap-2 text-[15px] font-semibold">
        <p>10-12 Pages</p>
        <hr className="w-[150px]" />
        <p>Free Domain (.com/.in/.net/.org)</p>
        <hr className="w-[150px]" />

        <p>Free Hosting For 1 Year</p>
        <hr className="w-[150px]" />

        <p>7 Email Ids</p>
        <hr className="w-[150px]" />

        <p>Basic SEO</p>
        <hr className="w-[150px]" />

        <p>Static Website</p>
        <hr className="w-[150px]" />

        <p>CSS3/HTML5/PHP/</p>
        <hr className="w-[150px]" />

        <p>CMS N/A</p>
        <hr className="w-[150px]" />

        <p>1 Years Full Support</p>
        <hr className="w-[150px]" />

        <p>5-7 Working Days</p>
        <hr className="w-[150px]" />
        </div>
      </div>


      <div className="flex flex-col items-center gap-5 mx-5 my-5 py-10 sm:w-[60%] w-[90%] sm:border sm:rounded-3xl">
        <h1 className="flex justify-center items-center sm:w-[200px] sm:h-[100px] w-[170px] h-[100px] bg-black text-white text-[40px]">
          <BiRupee /> 19999
        </h1>
        <div className="flex flex-col gap-2 text-[15px] font-semibold">
        <p>15 Pages</p>
        <hr className="w-[150px]" />
        <p>Free Domain (.com/.in/.net/.org)</p>
        <hr className="w-[150px]" />

        <p>Free Hosting For 4 Year</p>
        <hr className="w-[150px]" />

        <p>10 Email Ids</p>
        <hr className="w-[150px]" />

        <p>Basic SEO</p>
        <hr className="w-[150px]" />

        <p>Static\Dynamic Website</p>
        <hr className="w-[150px]" />

        <p>WordPress\Joomla</p>
        <hr className="w-[150px]" />

        <p>CMS </p>
        <hr className="w-[150px]" />

        <p>1 Years Full Support</p>
        <hr className="w-[150px]" />

        <p>7 Working Days</p>
        <hr className="w-[150px]" />
        </div>
      </div>
      </div>
      <div className="flex justify-center items-center py-5 px-5 w-[250px] font-bold sm:ml-[500px] ml-[80px] mb-10 rounded-3xl   bg-blue-600">

      <Link to="/home">
  <button className="w-[150px]">Back To Home</button>
</Link>
      </div>
    </div>
  );
};

export default Packages;

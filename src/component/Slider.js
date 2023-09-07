import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import './style/style.css'; // Import your CSS file


const Slider = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className={`relative ${isHovered ? "animated-background" : ""}`}>

    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      interval={6000}
      className="pt-[80px]  "
      showThumbs={false} // Add this line to hide the thumbnails
      stopOnHover={true} // Enable stopOnHover
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex sm:flex-row flex-col sm:justify-evenly  w-full  sm:px-10 px-2 gap-5 sm:py-10  ">
        <div className="flex flex-col justify-between  sm:items-start items-center  font-sans gap-5   sm:px-[15px] sm:py-[85px] py-10 sm:pb-10">
          <div className="flex flex-col sm:items-start    w-full ">
            <h1 className="text-[#faa036] sm:text-[75px] font-bold font-sans text-[35px]    ">
              24/7
            </h1>
            <p className="  sm:text-[55px] text-[26px] font-serif  ">
              Remote Access Support{" "}
            </p>
            {/* <p className="sm:text-[55px] text-[30px] font-serif hidden sm:inline-block ">Support </p> */}
          </div>
          <p className="font-[500] text-[17px]  ">
            {" "}
            <span className="font-[700] sm:text-[25px] text-[20px] ">
              Highly Qualified
            </span>{" "}
            support team available for our valuable clients
          </p>
         <Link to={"/contact"}> <button className=" sm:px-[40px] py-[15px] h-[56px] w-[180px] text-white font-[17px] mt-3 bg-gradient-to-r from-[#8a7af5] via-[#8a7af5] to-purple-600 rounded-[30px] font-serif ">
            Contact Us
          </button></Link>
        </div>
        <div className="sm:w-[550px] w-[350px] px-5">
          <img
            src="https://d22rxqj6e2v058.cloudfront.net/wp-content/uploads/2019/06/user-friendly-support1.png"
            alt="Slide 1"
            // style={{ width: "550px" , height:"380px",paddingTop:"56px",marginLeft:"20px" }}
          />
        </div>
      </div>



      <div className="flex sm:flex-row flex-col sm:justify-evenly  w-full sm:px-10 px-2 gap-5 sm:py-10  ">
        <div className="flex flex-col justify-between  sm:items-start items-center  font-sans gap-5   sm:px-[15px] sm:py-[85px] py-10 sm:pb-10">
          <div className="flex flex-col sm:items-start    w-full ">
            <h1 className="text-[#faa036] sm:text-[75px] font-bold font-sans text-[35px]    ">
            Website
            </h1>
            <p className="  sm:text-[55px] text-[26px] font-serif  ">
            Designing Company{" "}
            </p>
            {/* <p className="sm:text-[55px] text-[30px] font-serif hidden sm:inline-block ">Support </p> */}
          </div>
          <p className="font-[500] text-[17px]  ">
            {" "}
           
            Free Domain & Hosting
          </p>
         <Link to={"/contact"}> <button className=" sm:px-[40px] py-[15px] h-[56px] w-[180px] text-white font-[17px] mt-3 bg-gradient-to-r from-[#eeb7e7] via-[#e196da] to-purple-600 rounded-[30px] font-serif ">
            Get A Quote
          </button></Link>
        </div>
        <div className="sm:w-[550px] w-[350px] px-5">
          <img
            src="https://d22rxqj6e2v058.cloudfront.net/wp-content/uploads/2019/06/website-designing-company-in-noida.png"
            alt="Slide 1"
            // style={{ width: "550px" , height:"380px",paddingTop:"56px",marginLeft:"20px" }}
          />
        </div>
      </div>


      <div className="flex sm:flex-row flex-col sm:justify-evenly  w-full sm:px-10 px-2 gap-5 sm:py-10  ">
        <div className="flex flex-col justify-between  sm:items-start items-center  font-sans gap-5   sm:px-[15px] sm:py-[85px] py-10 sm:pb-10">
          <div className="flex flex-col sm:items-start    w-full ">
            <h1 className="text-[#faa036] sm:text-[75px] font-bold font-sans text-[35px]    ">
            Website
            </h1>
            <p className="  sm:text-[55px] text-[26px] font-serif  ">
            Development Company{" "}
            </p>
            {/* <p className="sm:text-[55px] text-[30px] font-serif hidden sm:inline-block ">Support </p> */}
          </div>
          <p className="font-[500] text-[17px]  ">
            {" "}
           
           <span className="font-[700] sm:text-[25px] text-[20px] ">#Top Website Development</span>  in Alwar
          </p>
         <Link to={"/contact"}> <button className=" sm:px-[40px] py-[15px] h-[56px] w-[180px] text-white font-[17px] mt-3 bg-gradient-to-r from-[#c4bc68] via-[#e1d564] to-yellow-300 rounded-[30px] font-serif ">
            Get A Quote
          </button></Link>
        </div>
        <div className="sm:w-[550px] w-[350px] px-5">
          <img
            src="https://d22rxqj6e2v058.cloudfront.net/wp-content/uploads/2019/05/laser-web-maker1.gif"
            alt="Slide 1"
            // style={{ width: "550px" , height:"380px",paddingTop:"56px",marginLeft:"20px" }}
          />
        </div>
      </div>

      {/* <div className="w-[400px]">
        <img
          src="https://d22rxqj6e2v058.cloudfront.net/wp-content/uploads/2019/06/website-designing-company-in-noida.png"
          alt="Slide 2"
        />
      </div>
      <div className="w-[400px]">
        <img
          src="https://d22rxqj6e2v058.cloudfront.net/wp-content/uploads/2019/06/user-friendly-support1.png"
          alt="Slide 3"
        />
      </div> */}
    </Carousel>
    </div>
  );
};

export default Slider;

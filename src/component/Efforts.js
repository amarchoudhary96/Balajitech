import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Efforts = () => {
  return (
    <>
     <div className="w-[95%]  flex flex-col items-center justify-center gap-5 pt-3 text-center ">
  <h1 className="text-3xl font-semibold font-sans">Our Best Effort</h1>
  <hr className="w-32 border-t border-[#faa036]" />
  <p className="text-[15pz] font-normal font-sans sm:w-full w-[360px] px-5">
    Here are some websites developed by our experts
  </p>
</div>


      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={6000}
        className="pt-[80px]  "
        showThumbs={false} // Add this line to hide the thumbnails
      >
        
          <div className="w-full flex flex-col justify-evenly items-center sm:flex sm:flex-row  px-10 py-10">
            <div className="sm:w-[400px] w-full">
              {" "}
              <img
                src="https://d22rxqj6e2v058.cloudfront.net/wp-content/uploads/2019/06/cosmo1-1.png"
                alt=""
              />
            </div>

            <div className="sm:w-[555px] w-full">
              <h1 className="text-[25px] font-[500]">COSMO Analytical Lab</h1>
              <p className="text-[17px]  font-sf-pro-text leading-loose '">
                COSMO Analytical is a testing lab deals in metal testing,
                concrete testing, chemical testing, soil testing, rubber testing
                etc.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-evenly items-center sm:flex sm:flex-row  px-10 py-10">
            <div className="sm:w-[400px] w-full">
              {" "}
              <img
                src="https://d22rxqj6e2v058.cloudfront.net/wp-content/uploads/2019/06/magical-Bird-travels.png"
                alt=""
              />
            </div>

            <div className="sm:w-[555px] w-full">
              <h1 className="text-[25px] font-[500]">RACS (Research Analysis Career Solution)</h1>
              <p className="text-[17px]  font-sf-pro-text leading-loose '">
              RACS is providing consulting on research analysis and career solution
              </p>
            </div>
          </div>


          <div className="w-full flex flex-col justify-evenly items-center sm:flex sm:flex-row px-10 py-10">
            <div className="sm:w-[400px] w-full">
              {" "}
              <img
                src="https://d22rxqj6e2v058.cloudfront.net/wp-content/uploads/2019/06/becre8ve-shop1-1.png"
                alt=""
              />
            </div>

            <div className="sm:w-[555px] w-full">
              <h1 className="text-[25px] font-[500]">Unique Books House</h1>
              <p className="text-[17px]  font-sf-pro-text leading-loose '">
              Unique Books House is E-Commerce website where student can purchase model paper, comptetion level books ect.
              </p>
            </div>
          </div>
        
      </Carousel>
    </>
  );
};

export default Efforts;

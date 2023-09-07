import React from 'react';

const About = () => {
  return (
    <div className='sm:flex sm:flex-row sm:items-center flex flex-col items-center bg-gray-50 p-8 w-full sm:w-full sm:mt-0 mt-[50px] line-[32px] font-[400] '>
      <div className='flex flex-col gap-5 sm:w-[80%] py-3 text-justify font-serif  '>
        <h1 className='sm:text-4xl text-2xl font-bold'>BALAJI TECH.IN</h1>
        <p className='font-[400] text-justify font-serif leading-loose'>
          <strong>Balaji Tech</strong> is an industry leader in professional website design, strategy, development, and hosting. We’re truly a one-stop shop offering a full range of solutions for anyone looking to succeed in their online endeavors. Balaji Tech is a privately held company with a long history of profitability and stability.
        </p>
        <p className='font-[400] text-justify font-serif leading-loose'>
          <strong>Balaji Tech</strong> has a well-qualified and experienced team to build the most creative & attractive websites. We have different plans that can fit into your budgets easily. We deal in Website Designing, Website Development, E-Commerce Website, Logo Designing, Template Designing, CMS Development, Catalog Designing, etc.
        </p>
        <p className='font-[400] text-justify font-serif leading-loose'>
          Our team never makes false promises at the time of project discussion. Building long-term relationships with our clients is <strong>Balaji Tech’s No.1 priority. 95% </strong>  of our customers return to us with new projects because they enjoy the quality of the websites that we create.
        </p>
      </div>
      <div className='sm:w-[1000px] w-[350px]'>
        <img src="https://www.nicepng.com/png/detail/252-2527581_expert-web-application-developers-gif-animation-web-designer.png" alt="Laser Web Maker" />
      </div>
    </div>
  );
};

export default About;

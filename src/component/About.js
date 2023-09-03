import React from 'react';

const About = () => {
  return (
    <div className='sm:flex bg-gray-100 p-8 w-[400px] sm:w-full sm:mt-0 mt-[50px] '>
      <div className='flex flex-col gap-8 sm:w-[50%] py-9 '>
        <h1 className='sm:text-4xl text-2xl font-bold'>BALAJI TECH.IN</h1>
        <p className='font-semibold'>
          <strong>Balaji Tech</strong> is an industry leader in professional website design, strategy, development, and hosting. We’re truly a one-stop shop offering a full range of solutions for anyone looking to succeed in their online endeavors. Balaji Tech is a privately held company with a long history of profitability and stability.
        </p>
        <p className='font-semibold'>
          <strong>Balaji Tech</strong> has a well-qualified and experienced team to build the most creative & attractive websites. We have different plans that can fit into your budgets easily. We deal in Website Designing, Website Development, E-Commerce Website, Logo Designing, Template Designing, CMS Development, Catalog Designing, etc.
        </p>
        <p className='font-semibold'>
          Our team never makes false promises at the time of project discussion. Building long-term relationships with our clients is <strong>Balaji Tech’s No.1 priority. 95% </strong>  of our customers return to us with new projects because they enjoy the quality of the websites that we create.
        </p>
      </div>
      <div className='sm:w-[50%]'>
        <img src="https://d22rxqj6e2v058.cloudfront.net/wp-content/uploads/2019/05/laser-web-maker1.gif" alt="Laser Web Maker" />
      </div>
    </div>
  );
};

export default About;

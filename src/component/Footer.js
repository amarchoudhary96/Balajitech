import React from "react";

const Footer = () => {
  return (
        <div>
    <div className="flex sm:flex-row flex-col items-center justify-between px-8 bg-[#143953] sm:gap-0 gap-5  text-white py-10">
      <div className="flex flex-col gap-5 sm:w-[20%] w-[90%] items-start">
        <h1 className="font-bold text-[25px]">About</h1>
        <p className="text-[15px]">
        Balaji Tech іѕ аn іnduѕtrу lеаdеr іn рrоfеѕѕіоnаl wеbѕіtе dеѕіgn,
          ѕtrаtеgу, dеvеlорmеnt, аnd hosting. Wе'rе trulу a оnе-ѕtор ѕhор
          оffеrіng a full rаngе оf ѕоlutіоnѕ for anyone lооkіng tо ѕuссееd in
          thеіr оnlіnе еndеаvоrѕ. Balaji Tech рrіvаtеlу hеld соmраnу wіth a
          lоng hіѕtоrу of рrоfіtаbіlіtу аnd ѕtаbіlіtу.....
        </p>
      </div>
      <div className="flex flex-col gap-5 sm:w-[20%] w-[90%]   items-start">
        <h1 className="font-bold text-[25px] sm:w-[40%] w-[90%] ">DESIGN & DEVELOPMENT SOLUTION</h1>
        <p>
          Website Designing Catalog Designing E-Mailer Designing PSD To HTML
          Designing Logo Designing Core PHP Wordpress Framework
        </p>

      </div>
      <div className="flex flex-col gap-5 sm:w-[20%] w-[90%]  items-start">
        <h1 className="font-bold text-[25px]">CONTACT US</h1>
        <p>Address:-
 Near N.D GANGA SCHOOL KHAIRTHAL ALWAR RAJASTHAN (IN)
Contact No.:-
 +91-8696702772, 7792946081, 7891689566
Email:-
 info@BalajiTech.com,</p>
      </div>
    </div>
    <div>
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
    </div>
    </div>
  );
};

export default Footer;

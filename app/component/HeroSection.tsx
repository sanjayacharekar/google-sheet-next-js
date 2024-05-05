import React from "react";

function HeroSection() {
  return (
    <div className="grid grid-cols-2 px-20 mt-6">
      <div className="p-5">
        <h3 className="text-2xl md:text-lg font-medium text-center">
          {" "}
          Top Online Digital Marketing Courses in India with AI Integrated
          Syllabus
        </h3>
        <p className="text-[#356fb7] font-medium md:text-base text-center mb-6">
          [Advanced + Professional Certification]
        </p>
        <p className="text-center text-sm font-medium">
          Become a digital marketing strategist in today&#39;s AI-dominated
          industry with some of the top online digital marketing courses in
          India offered by IIDE.
        </p>

        <div className="grid grid-flow-col ">
          <div>logo</div>
          <div>
            <div className="text-sm font-semibold">Awarded #1 Digital Marketing Institute</div>
            <div className="text-sm font-medium">by World Education Congress</div>
          </div>
        </div>
        <p className="text-red-500 text-sm font-bold mt-6 mb-3">
          Scholarship Deadline: May 8, 2024
        </p>
        <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download Brochure</button>
      </div>
      {/* - */}
      <div>jel</div>
    </div>
  );
}

export default HeroSection;

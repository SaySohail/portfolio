import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';


const JobCard = ({
  logo,
  companyName,
  postedDaysAgo,
  jobTitle,
  jobType,
  skills,
  location,

  style

}) => {
    const skillsValues = Array.isArray(skills) ? skills : skills.split(',');

  return (
    <div className="hidden lg:block rounded-md sticky top-10 overflow-hidden p-5" style={style}>
      <div className="flex items-start">
      <div className="relative h-10 w-10 rounded-full overflow-hidden">
          <Image src={logo} alt={`${companyName} logo`} layout="fill" objectFit="cover" />
        </div>
        <div className="ml-4">
          <div className="text-lg font-bold">{companyName}</div>
          <div className="text-base subtitle mt-1">{location}</div>
          </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold py-1">{jobTitle}</h3>
        <p className="text-sm mt-1 font-medium py-1">{jobType}</p>
        <div className="flex flex-wrap space-x-2 mt-1 py-1">
          {skillsValues.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-200 text-sm font-normal dark:text-black px-2 py-1 m-1 rounded-md"
            >
              {skill.trim()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;

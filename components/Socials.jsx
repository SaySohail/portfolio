'use client';

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: 'https://www.linkedin.com/in/sayedsohail/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/saySohail/',
    name: <RiGithubFill />,
  },
  {
    path: 'https://www.instagram.com/say.sohail/',
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

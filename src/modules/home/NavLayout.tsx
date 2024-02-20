// src/modules/home/NavLayout.tsx
import React from 'react';
import { NavBarActions, StyledButton } from '../builder/nav-bar/atoms';
import { motion, useAnimation } from 'framer-motion';
import { BsFacebook, BsMessenger } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';


const NavLayout: React.FC = () => {
  const controls = useAnimation();
  const animationEffectsHoverEnter = { scale: 1.05 };
  const animationEffectsHoverLeave = { scale: 1 };
  const animationEffectsFirstLoad = {
    scale: [0.9, 1],
    opacity: [0, 1],
  };
  const transtionEffects = {
    type: 'spring',
    stiffness: 400,
    damping: 17,
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} className="scroll-smooth">
      <nav className="sticky top-0 z-20 h-14 w-full bg-resume-800 flex py-2.5 px-4 xl:px-60 items-center shadow-level-8dp">
        <Link href="/">
          <Image src={'/icons/resume-icon.png'} alt="logo" height="36" width="36" />
        </Link>
        <div className="flex-auto flex justify-between items-center ml-5">
          <NavBarActions>
            <Link href="/builder" passHref>
              <StyledButton variant="text">CV Builder</StyledButton>
            </Link>
            <Link href="/blogs" passHref>
              <StyledButton variant="text">CV Blogs</StyledButton>
            </Link>
            <Link href="/jobs" passHref>
              <StyledButton variant="text">Job Search</StyledButton>
            </Link>
          </NavBarActions>
          <NavBarActions>
            <a
              href={'https://www.facebook.com/profile.php?id=61555462809465'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook className="h-6 w-6" fill="white" />
            </a>
            <a
              href={'https://www.facebook.com/messages/t/162032023669525/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsMessenger className="h-6 w-6" fill="white" />
            </a>
          </NavBarActions>
          </div>
      </nav>

      
    </motion.div>
  );
};

export default NavLayout;

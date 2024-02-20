// pages/index.tsx
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import FeatureSection from 'src/modules/home/components/Feature';
import Person from 'src/modules/home/components/Person';
import NavLayout from 'src/modules/home/NavLayout';

const HomePage: NextPage = () => {
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
    <div>
      <Head>
        <title>Sothik CV: Home</title>
        <meta name="description" content="Sothik CV Resume Builder" />
        <link rel="icon" type="image/png" href="/icons/resume-icon.png" />
      </Head>
      <NavLayout />
        <div
          style={{
            background: 'linear-gradient(180deg, #E7EEFA 50%, #FFFFFF 100%)',
            fontFamily: "'Times', sans",
          }}
        >
          <div className="mx-6 md:mx-40 xl:mx-60 mb-6">
            <motion.div
              className="grid grid-cols-12 pt-12 md:pt-24"
              initial={{ opacity: 0 }}
              animate={animationEffectsFirstLoad}
              transition={transtionEffects}
            >
              <div className="col-span-12 sm:col-span-4">
                <motion.img
                  id="resume-3d"
                  src="/resume.webp"
                  alt="resume-3d"
                  className="w-6/12 sm:w-9/12"
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {}}
                  animate={{ scale: 1 }}
                />
              </div>
              <div className="col-span-12 sm:col-span-8">
                <h3 className="text-xl md:text-2xl mb-2 text-resume-400">THE QUICKEST WAY TO BUILD A CV IS</h3>
                <h1 className="text-5xl mb-12 text-resume-800">SOTHIK CV</h1>

                <div className="flex mb-10">
                  <div className="bg-resume-800 w-1 rounded-lg"></div>
                  <p className="text-lg ml-3 text-resume-800">
                    &ldquo;You don't have to be great to start, but you have to start to be great&rdquo;
                    <br />
                    —Zig Ziglar
                  </p>
                </div>
                <Link href="/builder" passHref={true}>
                  <Button variant="contained" className="bg-resume-800 mb-2">
                    BUILD YOUR CV
                  </Button>
                </Link>
                <p
                  className="xl:invisible text-resume-800"
                  style={{ fontFamily: "'Roboto Slab', serif" }}
                >
                  Desktop screen recommended
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mx-6 md:mx-40 xl:mx-60 my-32 w-75"
          style={{ fontFamily: "'Roboto Slab', serif" }}
          initial={{ opacity: 0 }}
          animate={animationEffectsFirstLoad}
          transition={transtionEffects}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FeatureSection />
          </div>
        </motion.div>

        <div
          id="about-us"
          className="mx-6 md:mx-40 xl:mx-60 my-32"
          style={{ fontFamily: "'Roboto Slab', serif" }}
        >
          <h2 className="text-resume-800 text-3xl mb-2 text-center lg:text-left">About us</h2>
          <p className="text-resume-400 mb-8 text-center lg:text-left">
            The developers and designers:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Person />
          </div>
          <p className="text-resume-400 my-8 text-center lg:text-left">
            Read more on&nbsp;
            <a
              href="https://www.facebook.com/profile.php?id=61555462809465"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Facebook
            </a>
            ↗
          </p>
        </div>
    </div>
  );
};

export default HomePage;

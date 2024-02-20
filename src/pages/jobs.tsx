// src/pages/jobs.tsx
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import NavLayout from '../modules/home/NavLayout.tsx'; // Reusing the NavLayout

// Importing data from job detail pages
import { jobTitle as job1Title, jobLocation as job1Location, jobCompany as job1Company, jobDeadline as job1Deadline } from './jobs/1.tsx';
import { jobTitle as job2Title, jobLocation as job2Location, jobCompany as job2Company, jobDeadline as job2Deadline } from './jobs/2.tsx';

const Jobs: React.FC = () => {
  const jobListings = [
    { id: 1, title: job1Title, location: job1Location, company: job1Company, deadline: job1Deadline },
    { id: 2, title: job2Title, location: job2Location, company: job2Company, deadline: job2Deadline },
    // Add more job listings as needed
  ];

  return (
    <div>    
      <Head>
        <title>Sothik CV: Jobs</title>
        <meta name="description" content="Sothik CV Resume Builder" />
        <link rel="icon" type="image/png" href="/icons/resume-icon.png" />
      </Head>
      <NavLayout />
      <div className="mx-6 md:mx-40 xl:mx-60 mt-8">
        <h1 className="text-3xl font-bold mb-6 text-resume-800">Job Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobListings.map((job) => (
            <Link key={job.id} href={`/jobs/${job.id}`}>
              <div className="p-4 border border-gray-300 rounded cursor-pointer">
                <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
                <p className="text-lg mb-1">{job.company}</p>
                <p className="text-lg mb-1">{job.location}</p>
                <p className="text-lg mb-1">Deadline: {job.deadline}</p>
                {/* Optionally include JobPost component for more details */}
                {/* <JobPost job={job} /> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;

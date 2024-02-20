// src/pages/jobs/1.tsx
import React from 'react';
import NavLayout from '../../modules/home/NavLayout';

export const jobTitle = "Software Engineer";
export const jobLocation = "New York, NY";
export const jobCompany = "Tech Company Inc.";
export const jobDeadline = "2024-03-01"; // Deadline date

const jobRequirements = `
  <ul>
    <li>Bachelor's degree in Computer Science or related field.</li>
    <li>Strong proficiency in one or more programming languages such as Java, Python, or JavaScript.</li>
    <li>Experience with web development frameworks (e.g., React, Angular, or Vue).</li>
    <li>Familiarity with database systems and SQL.</li>
    <li>Excellent problem-solving and analytical skills.</li>
    <li>Effective communication and collaboration abilities.</li>
  </ul>
`;

const jobResponsibilities = `
  <ul>
    <li>Collaborate with cross-functional teams to design and implement software solutions.</li>
    <li>Develop and maintain scalable and efficient code.</li>
    <li>Conduct code reviews and provide constructive feedback.</li>
    <li>Troubleshoot, debug, and optimize application performance.</li>
    <li>Stay updated on industry trends and technologies.</li>
    <li>Participate in Agile development processes.</li>
  </ul>
`;

const jobSalary = "Competitive salary based on experience.";

const Job1: React.FC = () => {
  return (
    <div>
      <NavLayout />
      <div className="mx-6 md:mx-40 xl:mx-60 mt-8">
        <h1 className="text-3xl font-bold mb-6 text-resume-800">{jobTitle} at {jobCompany}</h1>
        <div className="p-4 border border-gray-300 rounded">
          <p className="text-lg mb-4">
            We are seeking a talented and motivated Software Engineer to join our team at {jobCompany} in {jobLocation}.
            If you are passionate about creating innovative software solutions and thrive in a collaborative environment,
            we'd love to hear from you!
          </p>
          <h2 className="text-xl font-semibold mb-2">Requirements:</h2>
          <div className="text-lg mb-4" dangerouslySetInnerHTML={{ __html: jobRequirements }} />
          <h2 className="text-xl font-semibold mb-2">Responsibilities:</h2>
          <div className="text-lg mb-4" dangerouslySetInnerHTML={{ __html: jobResponsibilities }} />
          <h2 className="text-xl font-semibold mb-2">Salary:</h2>
          <p className="text-lg">{jobSalary}</p>
          <h2 className="text-xl font-semibold mb-2">Application Deadline:</h2>
          <p className="text-lg">{jobDeadline}</p>
        </div>
      </div>
    </div>
  );
};

export default Job1;

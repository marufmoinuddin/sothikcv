// src/pages/jobs/2.tsx
import React from 'react';
import NavLayout from '../../modules/home/NavLayout';

export const jobTitle = "Data Analyst";
export const jobLocation = "San Francisco, CA";
export const jobCompany = "Data Analytics Co.";
export const jobDeadline = "2024-03-15"; // Deadline date

const jobRequirements = `
  <ul>
    <li>Bachelor's degree in Statistics, Mathematics, Computer Science, or a related field.</li>
    <li>Proficient in data analysis tools such as Python, R, or SQL.</li>
    <li>Experience with data visualization tools (e.g., Tableau, Power BI).</li>
    <li>Strong analytical and problem-solving skills.</li>
    <li>Excellent attention to detail and accuracy.</li>
    <li>Effective communication and presentation skills.</li>
  </ul>
`;

const jobResponsibilities = `
  <ul>
    <li>Analyze and interpret complex data sets to provide actionable insights.</li>
    <li>Develop and maintain data-driven reports and dashboards.</li>
    <li>Collaborate with cross-functional teams to identify business requirements.</li>
    <li>Perform statistical analysis and hypothesis testing.</li>
    <li>Identify trends and patterns in data to support decision-making.</li>
    <li>Stay informed about advancements in data analytics and tools.</li>
  </ul>
`;

const jobSalary = "Competitive salary based on experience.";

const Job2: React.FC = () => {
  return (
    <div>
      <NavLayout />
      <div className="mx-6 md:mx-40 xl:mx-60 mt-8">
        <h1 className="text-3xl font-bold mb-6 text-resume-800">{jobTitle} at {jobCompany}</h1>
        <div className="p-4 border border-gray-300 rounded">
          <p className="text-lg mb-4">
            We are looking for a skilled Data Analyst to join our dynamic team at {jobCompany} in {jobLocation}.
            If you have a passion for transforming raw data into valuable insights and enjoy solving complex problems,
            we invite you to apply for this exciting opportunity.
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

export default Job2;

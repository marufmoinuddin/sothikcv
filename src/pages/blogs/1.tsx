// src/pages/blogs/1.tsx
import React from 'react';
import NavLayout from '../../modules/home/NavLayout';

export const blogTitle = "What elements are needed for a professional CV?";
export const blogShortContent = "Crafting a professional CV requires attention to detail and careful consideration...";

const Blog1: React.FC = () => {
  return (
    <div>
      <NavLayout />
      <div className="mx-6 md:mx-40 xl:mx-60 mt-8">
        <h1 className="text-3xl font-bold mb-6 text-resume-800">{blogTitle}</h1>
        <div className="p-4 border border-gray-300 rounded">
        <p className="text-lg mb-4">
            Crafting a professional CV requires attention to detail and careful consideration of the elements that 
            make it stand out. Here are some key elements to include in your professional CV:
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-2">Contact Information: Include your name, phone number, email address, and 
            LinkedIn profile link.</li>
            <li className="mb-2">Professional Summary: A brief overview of your skills, experience, and career goals.</li>
            <li className="mb-2">Work Experience: List your previous employment history, including job titles, 
            company names, dates of employment, and job responsibilities.</li>
            <li className="mb-2">Education: Include your educational background, degrees obtained, and any 
            relevant certifications or licenses.</li>
            <li className="mb-2">Skills: Highlight your key skills and abilities, including technical skills, 
            languages, and any specialized training.</li>
            <li className="mb-2">Achievements: Showcase any notable achievements or awards you have received 
            throughout your career.</li>
            <li className="mb-2">References: Optionally, provide references from previous employers or colleagues.</li>
          </ul>
          <p className="text-lg mt-4">
            Remember to keep your CV concise, relevant, and tailored to the specific job you're applying for. 
            Proofread carefully to ensure there are no errors or typos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog1;


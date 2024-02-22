// src/pages/jobs.tsx
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import fs from "fs";
import path from "path";
import BlogLayout from "../modules/home/NavLayout";

interface JobsProps {
  jobPosts: JobPost[];
}

const Jobs: React.FC<JobsProps> = ({ jobPosts }) => {
  const [selectedJob, setSelectedJob] = useState<JobPost | null>(null);
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    const selectedJobPost = jobPosts.find(
      (post) => post.id === Number(query?.id)
    );
    setSelectedJob(selectedJobPost || null);
  }, [query]);

  const handleJobPostClick = (jobPost: JobPost) => {
    setSelectedJob(jobPost);
    router.push(`/jobs?id=${jobPost.id}`);
  };

  return (
    <div>
      <Head>
        <title>Sothik CV: Jobs</title>
        <meta name="description" content="Sothik CV Job Posts" />
        <link rel="icon" type="image/png" href="/icons/job-icon.png" />
      </Head>
      <BlogLayout />
      <div className="mx-6 md:mx-40 xl:mx-60 mt-8">
        <h1 className="text-3xl font-bold mb-6 text-resume-800">Job Posts</h1>
        {selectedJob ? (
          // Render the selected job post content
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: selectedJob.content || "" }}
            ></div>
            <button
              className="back-button"
              onClick={() => router.push("/jobs")}
            >
              Go Back
            </button>
          </div>
        ) : (
          // Render the list of job posts
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobPosts.map((post) => (
              <div
                key={post.id}
                className="p-4 border border-gray-300 rounded cursor-pointer"
                onClick={() => handleJobPostClick(post)}
              >
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-lg mb-2">Position: {post.position}</p>
                <p className="text-lg mb-4">Deadline: {post.deadline}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface JobPost {
  id: number;
  title: string;
  position?: string;
  deadline?: string;
  content?: string;
}

export async function getStaticProps() {
  const jobDirectory = path.join(process.cwd(), "src/pages/jobs");
  let filenames;

  try {
    filenames = fs.readdirSync(jobDirectory);
  } catch (error) {
    console.error(`Error reading job directory`);
    return {
      props: {
        jobPosts: [],
      },
    };
  }

  const jobPosts = filenames.map((filename, index) => {
    const filePath = path.join(jobDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const title =
      /<h1>(.*?)<\/h1>/s.exec(fileContent)?.[1] || `Job Post ${index + 1}`;
    const positionRegex = /<h2>Position:<\/h2>\s*<p>(.*?)<\/p>/s;
    const deadlineRegex = /<h2>Application Deadline:<\/h2>\s*<p>(.*?)<\/p>/s;

    const position =
      positionRegex.exec(fileContent)?.[1] || "Position not specified";
    const deadline =
      deadlineRegex.exec(fileContent)?.[1] || "Deadline not specified";
    const content = fileContent;

    return {
      id: index + 1,
      title,
      position,
      deadline,
      content,
    };
  });

  return {
    props: {
      jobPosts,
    },
  };
}

export default Jobs;

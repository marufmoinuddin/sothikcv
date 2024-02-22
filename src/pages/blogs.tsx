// src/pages/blogs.tsx
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import fs from "fs";
import path from "path";
import BlogLayout from "../modules/home/NavLayout";

interface BlogsProps {
  blogPosts: BlogPost[];
}

const Blogs: React.FC<BlogsProps> = ({ blogPosts }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    const selectedBlog = blogPosts.find(
      (post) => post.id === Number(query?.id)
    );
    setSelectedPost(selectedBlog || null);
  }, [query]);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    router.push(`/blogs?id=${post.id}`);
  };

  const calculateDaysAgo = (dateString?: string) => {
    if (!dateString) {
      return "Unknown date";
    }

    const postDate = new Date(dateString);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - postDate.getTime();
    const daysAgo = Math.floor(timeDifference / (1000 * 3600 * 24));
    return `${daysAgo} days ago`;
  };

  // Sort blog posts by date in descending order
  const sortedBlogPosts = blogPosts.sort((a, b) => {
    const dateA = new Date(a.date || "");
    const dateB = new Date(b.date || "");
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div>
      <Head>
        <title>Sothik CV: Blogs</title>
        <meta name="description" content="Sothik CV Resume Builder" />
        <link rel="icon" type="image/png" href="/icons/resume-icon.png" />
      </Head>
      <BlogLayout />
      <div className="mx-6 md:mx-40 xl:mx-60 mt-8">
        <h1 className="text-3xl font-bold mb-6 text-resume-800">Blog Posts</h1>
        {selectedPost ? (
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: selectedPost.content || "" }}
            ></div>
            <button
              className="back-button"
              onClick={() => router.push("/blogs")}
            >
              Go Back
            </button>
          </div>
        ) : (
          // Render the list of sorted blog posts
          <div className="grid grid-cols-1 gap-6">
            {sortedBlogPosts.map((post) => (
              <div
                key={post.id}
                className="p-4 border border-gray-300 rounded cursor-pointer"
                onClick={() => handlePostClick(post)}
              >
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-lg mb-4">{calculateDaysAgo(post.date)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface BlogPost {
  id: number;
  title: string;
  date?: string;
  content?: string;
}

export async function getStaticProps() {
  const blogDirectory = path.join(process.cwd(), "src/pages/blogs");
  let filenames;

  try {
    filenames = fs.readdirSync(blogDirectory);
  } catch (error) {
    console.error(`Error reading blog directory`);
    return {
      props: {
        blogPosts: [],
      },
    };
  }

  const blogPosts = filenames.map((filename, index) => {
    const filePath = path.join(blogDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const title =
      /<h1>(.*?)<\/h1>/s.exec(fileContent)?.[1] || `Blog Post ${index + 1}`;
    const date = /<p>(.*?)<\/p>/s.exec(fileContent)?.[1] || "hello";
    const content = fileContent;

    return {
      id: index + 1,
      title,
      date,
      content,
    };
  });

  return {
    props: {
      blogPosts,
    },
  };
}

export default Blogs;

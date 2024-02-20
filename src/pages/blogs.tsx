// src/pages/blogs.tsx
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import BlogLayout from '../modules/home/NavLayout';
import { blogTitle as blog1Title, blogShortContent as blog1ShortContent } from './blogs/1'; // Import variables from 1.tsx
import { blogTitle as blog2Title, blogShortContent as blog2ShortContent } from './blogs/2';

const Blogs: React.FC = () => {
  const blogPosts = [
    { id: 1, title: blog1Title, shortContent: blog1ShortContent },
    { id: 2, title: blog2Title, shortContent: blog2ShortContent },
    // Add more blog posts as needed
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.id}`}>
              <div className="p-4 border border-gray-300 rounded cursor-pointer">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-lg mb-4">{post.shortContent}</p>
                {/* Optionally include BlogPost component */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

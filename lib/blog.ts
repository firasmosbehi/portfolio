import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      const words = content.trim().split(/\s+/).length;
      const minutes = Math.ceil(words / 200);

      return {
        slug,
        title: data.title || slug,
        description: data.description || '',
        date: data.date || new Date().toISOString(),
        readingTime: `${minutes} min read`,
        tags: data.tags || [],
        content,
      };
    });

  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);

    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      readingTime: `${minutes} min read`,
      tags: data.tags || [],
      content,
    };
  } catch {
    return null;
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

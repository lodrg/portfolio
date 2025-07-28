import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  content: string;
  tags: string[];
}

export async function getAllPostIds() {
  try {
    const fileNames = await fs.promises.readdir(blogDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}

export async function getPostData(id: string): Promise<BlogPost> {
  const decodedId = decodeURIComponent(id);
  const fullPath = path.join(blogDirectory, `${decodedId}.md`);
  
  try {
    const fileContents = await fs.promises.readFile(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id: decodedId,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      content: contentHtml,
      tags: matterResult.data.tags || [],
    };
  } catch (error) {
    console.error(`Error reading file ${fullPath}:`, error);
    throw new Error(`Blog post not found: ${decodedId}`);
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const fileNames = await fs.promises.readdir(blogDirectory);
    const allPostsData = await Promise.all(
      fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(blogDirectory, fileName);
        const fileContents = await fs.promises.readFile(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      content: matterResult.content,
      tags: matterResult.data.tags || [],
    };
      })
    );

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
} 
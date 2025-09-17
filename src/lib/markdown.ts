import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogDirectoryZh = path.join(process.cwd(), 'src/content/blog');
const blogDirectoryEn = path.join(process.cwd(), 'src/content/blog-en');

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  content: string;
  tags: string[];
}

function getDirByLang(language: 'en' | 'zh') {
  return language === 'en' ? blogDirectoryEn : blogDirectoryZh;
}

export async function getAllPostIds() {
  try {
    const [zhFileNames, enFileNames] = await Promise.all([
      fs.promises.readdir(blogDirectoryZh).catch(() => []),
      fs.promises.readdir(blogDirectoryEn).catch(() => []),
    ]);
    const all = Array.from(new Set([...zhFileNames, ...enFileNames]))
      .map((fileName) => ({
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      }));
    return all;
  } catch (error) {
    console.error('Error reading blog directories:', error);
    return [];
  }
}

export async function getPostDataByLang(language: 'en' | 'zh', id: string): Promise<BlogPost> {
  const decodedId = decodeURIComponent(id);
  const blogDirectory = getDirByLang(language);
  const fullPath = path.join(blogDirectory, `${decodedId}.md`);

  try {
    const fileContents = await fs.promises.readFile(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content);
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
    throw new Error(`Blog post not found: ${decodedId} (${language})`);
  }
}

export async function getPostData(id: string): Promise<BlogPost> {
  // Backward compatible: prefer zh if exists, else try en
  try {
    return await getPostDataByLang('zh', id);
  } catch {
    return await getPostDataByLang('en', id);
  }
}

export async function getAllPostsByLang(language: 'en' | 'zh'): Promise<BlogPost[]> {
  const blogDirectory = getDirByLang(language);
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
  } catch {
    // If directory doesn't exist or empty, return empty array
    return [];
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // Backward compatible: return zh posts by default
  return getAllPostsByLang('zh');
} 
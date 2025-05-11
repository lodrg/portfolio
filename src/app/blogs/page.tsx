import { getAllPosts } from '@/lib/markdown';
import BlogList from '@/app/blogs/BlogList';

export const revalidate = 60; // 每60秒重新验证一次

export default async function BlogsPage() {
  const posts = await getAllPosts();
  return <BlogList posts={posts} />;
}
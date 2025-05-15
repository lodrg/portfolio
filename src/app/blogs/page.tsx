import { getAllPosts } from '@/lib/markdown';
import BlogPageWrapper from './BlogPageWrapper';
import BlogTitle from './BlogTitle';

export const revalidate = 60; // 每60秒重新验证一次

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <div className="container mx-auto px-4 py-8">
      <BlogTitle />
      <BlogPageWrapper posts={posts} />
    </div>
  );
}
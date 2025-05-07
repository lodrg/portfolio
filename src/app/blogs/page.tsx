import { getAllPosts } from '@/lib/markdown';
import BlogList from '@/app/blogs/BlogList';

export default function BlogsPage() {
  const posts = getAllPosts();
  return <BlogList posts={posts} />;
}
import { getAllPostsByLang } from '@/lib/markdown';
import BlogPageWrapper from './BlogPageWrapper';
import BlogTitle from './BlogTitle';

export const revalidate = 60; // 每60秒重新验证一次

export default async function BlogPage() {
  const [postsZh, postsEn] = await Promise.all([
    getAllPostsByLang('zh'),
    getAllPostsByLang('en'),
  ]);
  return (
    <div className="container mx-auto px-4 py-8">
      <BlogTitle />
      <BlogPageWrapper postsZh={postsZh} postsEn={postsEn} />
    </div>
  );
}
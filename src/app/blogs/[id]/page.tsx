import { getAllPostIds, getPostData, getPostDataByLang } from '@/lib/markdown';
import { Metadata } from 'next';
import BlogPost from '@/app/blogs/[id]/BlogPost';

export const revalidate = 60; // 每60秒重新验证一次

export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostData(params.id);
  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export default async function BlogPostPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const [postZh, postEn] = await Promise.all([
    getPostDataByLang('zh', params.id).catch(() => undefined),
    getPostDataByLang('en', params.id).catch(() => undefined),
  ]);
  return <BlogPost postZh={postZh} postEn={postEn} />;
}
import { getAllPostIds, getPostData } from '@/lib/markdown';
import { Metadata } from 'next';
import BlogPost from '@/app/blogs/[id]/BlogPost';


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
  const post = await getPostData(params.id);
  return <BlogPost post={post} />;
}
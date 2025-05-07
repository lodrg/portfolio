import { getAllPostIds, getPostData } from '@/lib/markdown';
import { Metadata } from 'next';
import BlogPost from '@/app/blogs/[id]/BlogPost';

type Props = {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
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

export default async function BlogPostPage(props: Props) {
  const params = await props.params;
  const post = await getPostData(params.id);
  return <BlogPost post={post} />;
}
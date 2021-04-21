import remark from 'remark'
import html from 'remark-html'
import { promises as fs } from 'fs'
import path from 'path'

import { getPosts } from '../api/posts'
import SEO from '../../components/SEO'

export default function BlogPost(props) {
  return (
    <>
      <SEO />
      <main className="post" dangerouslySetInnerHTML={{ __html: props.renderedMarkdown }} >
      </main>
    </>
  )
}

export async function getStaticProps(context) {
  const posts = getPosts().filter(el => el.type === 'markdown');
  const post = posts.find(el => el.slug === context.params?.slug);

  const filePath = path.join(process.cwd(), 'posts', post.fileName);
  const fileContents = await fs.readFile(filePath, 'utf8');

  const renderedMarkdown = await remark().use(html).process(fileContents);
  const props = Object.assign({}, post, { renderedMarkdown: renderedMarkdown.toString() })

  return {
    props,
  }
}

export async function getStaticPaths() {
  const posts = getPosts().filter(el => el.type === 'markdown');
  const paths = posts.map(el => ({ params: { ...el } }));

  return {
    paths,
    fallback: true,
  };
}
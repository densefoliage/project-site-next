import { getPostBySlug, getAllBlogs } from "@api"

const BlogPage = ({
  slug, meta, content
}) => {
  console.log(content)
  return (
    <>
      <h1>{meta.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
};

export default BlogPage;

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const { meta, content } = await getPostBySlug(slug);

  return {
    props: {
      slug,
      meta,
      content
    }
  }
}
export async function getStaticPaths() {
  let paths = await getAllBlogs()
  paths = paths.map(post => ({
    params: { slug: post.slug }
  }));
  return {
    paths: paths,
    fallback: false
  }
}
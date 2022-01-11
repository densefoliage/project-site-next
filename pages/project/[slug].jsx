import { getPostBySlug, getAllProjects } from "@api";

const ProjectPage = ({
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

export default ProjectPage;

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
  let paths = await getAllProjects()
  paths = paths.map(post => ({
    params: { slug: post.slug }
  }));
  return {
    paths: paths,
    fallback: false
  }
}
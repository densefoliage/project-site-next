import { getAllContent, getContentBySlug } from "@api/content";
import { getUniqueListBy } from "@utils/getUniqueListBy";

import { Typography, Box } from "@mui/material";

import MuiNextLink from "@components/MuiNextLink"

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'

import FictionLayout from "@components/FictionLayout";
import ManifestoLayout from "@components/ManifestoLayout";
import ResearchLayout from "@components/ResearchLayout";
import PhysicalLayout from "@components/PhysicalLayout";
import DigitalLayout from "@components/DigitalLayout";
import OtherLayout from "@components/OtherLayout";
import { typography } from "@mui/system";

const components = {
  th: (props) => (
    <th>
      <Typography variant="h2">
        <Box
          sx={{ 
            fontSize: "body1.fontSize", 
            fontWeight: "bold",
            mb: 0.5,
          }}
        >
          {props.children}
        </Box>
      </Typography>
    </th>
  )
};

const ProjectPage = ({ content }) => {
  
  const renderContent = (content) => {
    switch (content[0].frontMatter.contentType) {
      case "fiction":
        return < FictionLayout content={content} renderMDX={renderMDX} />
      case "manifesto":
        return < ManifestoLayout content={content} renderMDX={renderMDX} />
      case "research":
        return < ResearchLayout content={content} renderMDX={renderMDX} />
      case "physical":
        return < PhysicalLayout content={content} renderMDX={renderMDX} />
      case "digital":
        return < DigitalLayout content={content} renderMDX={renderMDX} />
      default:
        return < OtherLayout content={content} renderMDX={renderMDX} />
    }
  };

  const renderMDX = (mdxSource) => {
    return <MDXRemote {...mdxSource} components={components} />
  };

  return (
    <>
      { renderContent(content) }
    </>
  )
};

export default ProjectPage;

export async function getStaticProps(context) {

  const rawContent = await getContentBySlug(context.params.slug);
  const content = await Promise.all(
    rawContent.map(async ({frontMatter, source}) => {
      console.log(source)
      const mdxSource = await serialize(source, {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: []
        },
        parseFrontmatter: false 
      });
      return {
        frontMatter,
        mdxSource
      }
    })
  );

  return { props: { 
    content
  } }
}

export async function getStaticPaths() {

  const projects = getUniqueListBy(
    await getAllContent(), 
    'title'
    );
  const paths = projects.map(project => ({
    params: { slug: project.slug }
  }));

  return {
    paths: paths,
    fallback: false
  }
}
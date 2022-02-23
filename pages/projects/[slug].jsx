import { getAllContent, getContentBySlug } from "@api/content";
import { getUniqueListBy } from "@utils/getUniqueListBy";

import { Typography } from "@mui/material";

import MuiNextLink from "@components/MuiNextLink"

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import FictionLayout from "@components/FictionLayout";
import ManifestoLayout from "@components/ManifestoLayout";
import ResearchLayout from "@components/ResearchLayout";
import PhysicalLayout from "@components/PhysicalLayout";
import DigitalLayout from "@components/DigitalLayout";
import OtherLayout from "@components/OtherLayout";

const components = {};

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
      <div>
      { renderContent(content) }
        <hr/> <hr/>
        <h1>{content[0].frontMatter.title}</h1>
        <div>by {content[0].frontMatter.authors}</div>
        { content.map( ({ frontMatter, mdxSource }, i) => {
          console.log(mdxSource)
        return (
          <div key={i}>
            <h2>{frontMatter.subtitle}</h2>
            <MDXRemote {...mdxSource} components={components} />
          </div>
          )
        })}
      </div>
    </>
  )
};

export default ProjectPage;

export async function getStaticProps(context) {

  const rawContent = await getContentBySlug(context.params.slug);
  const content = await Promise.all(
    rawContent.map(async ({frontMatter, source}) => {
      const mdxSource = await serialize(source, { parseFrontmatter: false });
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
import { getAllProjects, getConfig } from "pages/api";
import { Typography } from "@mui/material";

import MuiNextLink from "@components/MuiNextLink"

const ProjectPage = ({ posts, title, description }) => {
  return (
    <>
      <h1>This is the project index page</h1>
      <ul>
        {
          posts.map((post, i) => {
            return (
              <li key={i}>
                <MuiNextLink activeClassName="active" href={`/project/${post.slug}`}>
                  {post.title}
                </MuiNextLink>
              </li>
            )
          })
        }
      </ul>
    </>
  )
};

export default ProjectPage;

export async function getStaticProps() {
  const config = await getConfig()
  const allPosts = await getAllProjects()
  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description
    }
  }
}
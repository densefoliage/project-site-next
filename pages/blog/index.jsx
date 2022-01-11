import { getAllBlogs, getConfig } from "pages/api";
import { Typography } from "@mui/material";

import MuiNextLink from "@components/MuiNextLink"

const BlogPage = ({ posts, title, description }) => {
  return (
    <>
      <h1>This is the blog index page</h1>
      <ul>
        {
          posts.map((post, i) => {
            return (
              <li key={i}>
                <MuiNextLink activeClassName="active" href={`/blog/${post.slug}`}>
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

export default BlogPage;

export async function getStaticProps() {
  const config = await getConfig()
  const allPosts = await getAllBlogs()
  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description
    }
  }
}
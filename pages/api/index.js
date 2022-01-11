import matter from 'gray-matter'
import { marked } from 'marked';
import yaml from 'js-yaml'

const postTypes = [
  'blog',
  'project'
];

export async function getAllPosts(postType) {
  if (!validatePostType(postType)) {
    return null;
  }

  const context = require.context('../../_posts', false, /^\.\/.*\.md$/)

  // console.log(context.keys);

  const posts = []
  for(const key of context.keys()){
    const post = key.slice(2);
    const content = await import(`../../_posts/${post}`);
    const meta = matter(content.default)
    if (meta.data.type != postType){
      continue;
    }
    posts.push({
      slug: post.replace('.md',''),
      title: meta.data.title
    });
  }
  return posts;
};

const validatePostType = (postType) => {
  if (typeof postType != 'string') {
    throw `postType <${postType}> is not a string!`;
    return false;
  }
  if (!postTypes.includes(postType)) {
    throw `postType <${postType}> is not known!`;
    return false;
  }
  // else return true
  return true;
}

export async function getAllBlogs() {
  return getAllPosts('blog');
};

export async function getAllProjects() {
  return getAllPosts('project');
};

export async function getPostBySlug(slug) {
  const fileContent = await import(`../../_posts/${slug}.md`)
  const meta = matter(fileContent.default)
  const content = marked(meta.content)    
  return {
    meta: meta.data, 
    content: content
  }
}

export async function getConfig() {
  const config = await import(`../../config.yml`)
  return yaml.load(config.default)
}
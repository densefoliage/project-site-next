// import matter from 'gray-matter'
// import { marked } from 'marked';
// import yaml from 'js-yaml'

// export async function getAllPosts(postType) {
//   if (postType && !validatePostType(postType)) {
//     return null;
//   }

//   const context = require.context('../../_posts', true, /^\.\/.*\.md$/)

//   // console.log(context.keys);

//   const posts = []
//   for(const key of context.keys()){
//     // console.log(key)
//     const post = key.slice(2);
//     const content = await import(`../../_posts/${post}`);
//     const meta = matter(content.default)
//     if (postType && meta.data.type != postType){
//       continue;
//     }
//     posts.push({
//       slug: post.replace('.md',''),
//       title: meta.data.title,
//       site: meta.data.site,
//       type: meta.data.type
//     });
//   }
//   return posts;
// };

// const validatePostType = (postType) => {
//   if (typeof postType != 'string') {
//     throw `postType <${postType}> is not a string!`;
//     return false;
//   }
//   if (!postTypes.includes(postType)) {
//     throw `postType <${postType}> is not known!`;
//     return false;
//   }
//   // else return true
//   return true;
// }

// export async function getAllWriting() {
//   return getAllPosts('writing');
// };

// export async function getAllManifestos() {
//   return getAllPosts('manifestos');
// };

// export async function getAllResearch() {
//   return getAllPosts('research');
// };

// export async function getPostsBySite(siteName) {

//   const allPosts = await getAllPosts();

//   const filtered = allPosts.filter(post => {
//     return post.site == siteName;
//   })

//   return filtered
// }

// export async function getPostBySlug(slug) {
//   // console.log(slug);
//   const fileContent = await import(`../../_posts/${slug}.md`)
//   const meta = matter(fileContent.default)
//   const content = marked(meta.content)    
//   return {
//     meta: meta.data, 
//     content: content
//   }
// }

// // export async function getConfig() {
// //   const config = await import(`../../config.yml`)
// //   return yaml.load(config.default)
// // }

// export async function getAllPostTypes() {
//   return postTypes;
// }

// export async function getAllSites() {
//   return sites;
// }

// export async function getSiteInfo(siteQuery) {
//   const lowercaseQuery = siteQuery.toLowerCase();
//   return sites.find(site => site.camel.toLowerCase() === lowercaseQuery );
// }
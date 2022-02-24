import matter from 'gray-matter'
import { marked } from 'marked';
import yaml from 'js-yaml'

var frontMatterRegex = /---(.|\n)*---/;

export async function getAllContent() {
    const context = require.context('../../_content', true, /^\.\/.*\.(md|mdx)$/)

    const allContent = await Promise.all(
        context.keys().map(async (key, i) => {
            const path = key.slice(2);
            const file = await import(`../../_content/${path}`);
            const meta = matter(file.default);
            return {
                path: path,
                slug: path.split("/")[1].replace('.md', ''),
                extension: path.split(".").pop(),
                title: meta.data.title,
                subtitle: meta.data.subtitle || "",
                chapter: meta.data.chapter || -1,
                place: meta.data.place,
                contentType: meta.data.contentType,
                datePublished: meta.data.datePublished.toDateString(),
            }
        })
    );

    return allContent;
};

export async function getContentBySlug(slug) {
    const allContent = await getAllContent();
    const filtered = allContent.filter(file => file.slug == slug).sort((a,b) => a.chapter - b.chapter);
    const matchedContent = await Promise.all(
        filtered.map(async ({path}) => {
            const file = await import(`../../_content/${path}`);
            const meta = matter(file.default);
            const source = meta.content;
            // const source = marked(meta.content); // pre-parsing, not good!
            return {
                frontMatter: {
                    ...meta.data,
                    datePublished: meta.data.datePublished.toDateString(),
                },
                source
              }
        })
    );

    return matchedContent
};
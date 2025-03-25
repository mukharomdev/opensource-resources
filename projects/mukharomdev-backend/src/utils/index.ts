// import {
// unified,
// remarkParse,
// remarkGfm,
// remarkHtml,
// matter
// } from "@/libraries"

// import { Post } from "@/interfaces/post";
// import fs from "fs";
// import { join } from "path";

// /* function parsing markdown to html */
// export  async function markdownToHtml(markdown: string) {
//   //const result = await remark().use(html).process(markdown);
//   const result = await unified()
//     .use(remarkParse) // Parse Markdown
//     .use(remarkGfm) // Tambahkan dukungan tabel GFM
//     .use(remarkHtml) // Konversi ke HTML
    
//     .process(markdown);

 

//   return result.toString();
// }

// /* function slug */
// const postsDirectory = join(process.cwd(), "_posts");

// export function getPostSlugs() {
//   return fs.readdirSync(postsDirectory);
// }

// export function getPostBySlug(slug: string) {
//   const realSlug = slug.replace(/\.md$/, "");
//   const fullPath = join(postsDirectory, `${realSlug}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   const { data, content } = matter(fileContents);

//   return { ...data, slug: realSlug, content } as Post;
// }

// export function getAllPosts(): Post[] {
//   const slugs = getPostSlugs();
//   const posts = slugs
//     .map((slug) => getPostBySlug(slug))
//     // sort posts by date in descending order
//     .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
//   return posts;
// }


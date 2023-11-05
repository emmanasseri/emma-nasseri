// blog.server.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function loader() {
  try {
    console.log("loader executing");
    const postsDirectory = path.join(
      process.cwd(),
      "src/app/writing/blogposts"
    );
    const filenames = fs.readdirSync(postsDirectory);
    console.log("filenames", filenames);

    const posts = filenames.map((filename) => {
      try {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);
        return {
          slug: filename.replace(/\.md$/, ""),
          frontMatter: data,
        };
      } catch (err) {
        console.error(`Error reading or parsing file ${filename}: `, err);
        // Optionally, you can decide to throw the error or return a placeholder value
        throw err; // or return an empty object, or some placeholder
      }
    });

    // Return data directly, without wrapping in a 'props' object
    return { posts };
  } catch (err) {
    console.error("Error loading posts: ", err);
    // Return an empty array if there was an error
    return { posts: [] };
  }
}

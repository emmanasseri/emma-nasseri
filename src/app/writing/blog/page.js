import Navbar from "@/components/Navbar";

// Your blog components

export default function BlogPage({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <>
        {" "}
        <Navbar />
        <div>No blog posts found.</div>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div>
        <h1>Blog</h1>

        {posts.map((post) => (
          <div key={post.slug}>
            <h2>{post.frontMatter.title}</h2>
            <p>{post.frontMatter.excerpt}</p>
          </div>
        ))}
      </div>
    </>
  );
}

// This file is responsible for rendering the blog post page.

import React from "react";

export default function BlogPost({ postData }) {
  return (
    <>
      <article>
        <h1>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  );
}

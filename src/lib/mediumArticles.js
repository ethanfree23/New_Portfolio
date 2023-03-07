// To integrate Medium.com blogs with a React.js portfolio project, you can follow these steps:

// 1. Create a new React.js application using `create-react-app`.
// 2. Install the `medium-sdk` package using `npm install medium-sdk`.
// 3. Import the `medium-sdk` in the React.js component where you want to display the blog.
// 4. Use the `MediumClient` to fetch the blog data from Medium.com API.
// 5. Use the fetched data to display the blog on your project.

// Here is a sample code snippet:


import React, { useState, useEffect } from 'react';
import { MediumClient } from 'medium-sdk';

const Blog = () => {
  const [blogData, setBlogData] = useState("");

  useEffect(() => {
    const client = new MediumClient({
      clientId: 'https://api.medium.com/v1/users/ethanfree23/publications',
      accessToken: '25492b6fc334ed8e898a6190a23adcbaea5b287347b5490221341aa62bc029cd2'
    });

    client.getSinglePost('<your-blog-post-id>')
      .then(post => setBlogData(post.content.html))
      .catch(error => console.log(error));
  }, []);

  return (
    <div dangerouslySetInnerHTML={{__html: blogData}}></div>
  );
}

export default Blog;


// Note: You need to replace the placeholders `your-client-id`, `your-client-secret`, `your-access-token`, and `your-blog-post-id` with actual values obtained from the Medium.com developer platform.
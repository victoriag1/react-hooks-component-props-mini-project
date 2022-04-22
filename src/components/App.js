import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList"
console.log(blogData);

function App() {
  return (
    <div className="App">
      <h1>{blogData.name}</h1>
      <img src= {blogData.image} alt=''/>

      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

// problem
// https://www.hackerrank.com/challenges/blog-post/problem?isFullScreen=false
function Home() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleCreate = () => {
    if (title == "" || desc == "") return;
    const newData = { title: title, desc: desc };
    setData((prev) => [...prev, newData]);
    setTitle("");
    setDesc("");
  };

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input
          title={title}
          desc={desc}
          onChangeDesc={onChangeDesc}
          onChangeTitle={onChangeTitle}
        />
        <button
          data-testid="create-button"
          className="mt-10"
          onClick={handleCreate}
        >
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay data={data} setData={setData} />
      </div>
    </div>
  );
}

export default Home;

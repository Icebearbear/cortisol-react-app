import React from "react";

function PostDisplay({ data, setData }) {
  const handleDelete = (index) => {
    const newData = [...data.slice(0, index), ...data.slice(index + 1)];
    console.log(index);
    setData(newData);
  };
  return (
    <div data-testid="posts-container" className="flex wrap gap-10">
      {data &&
        data.map((d, index) => (
          <div className="post-box" key={index} value={d.title}>
            <h3>{d.title}</h3>
            <p>{d.desc}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default PostDisplay;

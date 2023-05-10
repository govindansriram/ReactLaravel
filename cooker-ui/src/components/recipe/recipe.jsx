import React from 'react';
import Post from '../post/post';

const Recipe = () => {
  return (
    <>
      <h1>Recipe</h1>
      <Post id="1" type="F" title="Recipe 1" author="Author 1" body="Body 1" likes="1" dislikes="1" />
    </>
  );
}

export default Recipe;
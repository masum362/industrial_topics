const allPostContainer = document.getElementById("allPostContainer");
const readPostContainer = document.getElementById("readPostContainer");

const fetchFunc = async (url) => {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    return posts;
  } catch (error) {
    return error;
  }
};



const fetchPosts =async (api) => {

}


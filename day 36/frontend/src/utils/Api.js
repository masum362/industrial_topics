import axios from "axios";

const backend_url = "http://localhost:3002";

const addTodo = async (todo) => {
  try {
    const response = await axios.post(
      `${backend_url}/add-todo`,
      { todo },
      { withCredentials: true }
    );
    console.log(response);
    return response;
  } catch (error) {
    return error.message;
  }
};
const getTodos = async () => {
  try {
    const response = await axios.get(`${backend_url}/get-todos`, {
      withCredentials: true,
    });
    console.log(response);
    return response;
  } catch (error) {
    return error.message;
  }
};

const updateTodo = async (id, todo) => {
    console.log(id,todo)
  try {
    const response = await axios.patch(
      `${backend_url}/update-todo/${id}`,
      { todo },
      { withCredentials: true }
    );
    console.log(response);
    return response;
  } catch (error) {
    return error.message;
  }
};
const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(
      `${backend_url}/delete-todo/${id}`, { withCredentials: true }
    );
    console.log(response);
    return response;
  } catch (error) {
    return error.message;
  }
};

export { addTodo, getTodos,updateTodo,deleteTodo };

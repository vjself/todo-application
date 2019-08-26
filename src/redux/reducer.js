import axios from "axios";

const initialState = {
  user: {},
  todos: []
};

const GET_USER_TODOS = "GET_USER_TODOS";
const GET_ALL_TODOS = "GET_ALL_TODOS";
const CREATE_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const MARK_COMPLETE = "MARK_COMPLETE";
const UPDATE_TODO = "UPDATE_TODO";

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const LOGOUT = "LOGOUT";
const GET_USER = "GET_USER";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_TODOS + "_FULFILLED":
      return { ...state, todos: action.payload };
    case GET_ALL_TODOS + "_FULFILLED":
      return { ...state, todos: action.payload };
    case CREATE_TODO + "_FULFILLED":
      return { ...state, todos: action.payload };
    case DELETE_TODO + "_FULFILLED":
      return { ...state, todos: action.payload };
    case MARK_COMPLETE + "_FULFILLED":
      return { ...state, todos: action.payload };
    case UPDATE_TODO + "_FULFILLED":
      return { ...state, todos: action.payload };
    case LOGIN + "_FULFILLED":
      return { ...state, user: action.payload };
    case LOGOUT + "_FULFILLED":
      return {
        user: {},
        todos: []
      };
    case REGISTER + "_FULFILLED":
      return { ...state, user: action.payload };
    case GET_USER + "_FULFILLED":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

//Todo Functions

export const getUserTodos = () => {
  let data = axios
    .get(`/api/todos`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
  return {
    type: GET_USER_TODOS,
    payload: data
  };
};

export const createTodo = (title, description, completed) => {
  let data = axios
    .post("/api/todos", {
      title,
      description,
      completed
    })
    .then(res => res.data)
    .catch(err => {
      console.error(err);
    });
  return {
    type: CREATE_TODO,
    payload: data
  };
};

export const deleteTodo = todoId => {
  let data = axios
    .delete(`/api/todos/${todoId}`)
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
  return {
    type: DELETE_TODO,
    payload: data
  };
};

export const updateTodo = (id, title, description) => {
  let data = axios
    .put(
      `/api/todos${id}, ${{
        title,
        description
      }}`
    )
    .then(res => res.data)
    .catch(err => {
      console.error(err);
    });
  return {
    type: UPDATE_TODO,
    payload: data
  };
};

export const markComplete = (todoId, completed) => {
  let data = axios
    .put("/api/todos", { todoId, completed })
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
  return {
    type: MARK_COMPLETE,
    payload: data
  };
};

//Auth Functions

export function login(user) {
  const { username, password } = user;
  let data = axios
    .post("/auth/login", { username, password })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
  return {
    type: LOGIN,
    payload: data
  };
}

export function register(user) {
  let data = axios
    .post("/auth/register", { user })
    .then(res => res.data)
    .catch(err => {
      console.error(err);
    });
  return {
    type: REGISTER,
    payload: data
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function getUser() {
  let user = axios.get("/auth/user").then(res => {
    return res.data;
  });
  return {
    type: GET_USER,
    payload: user
  };
}

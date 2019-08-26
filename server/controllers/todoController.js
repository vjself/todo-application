module.exports = {
  getUserTodos: async (req, res) => {
    try {
      let userTodos = await req.app
        .get("db")
        .get_user_todos([req.session.user.id]);
      return res.status(200).send(userTodos);
    } catch (e) {
      console.log(e.detail);
    }
  },
  getAllTodos: async (req, res) => {
    try {
      let todos = await req.app.get("db").get_all_todos();
      return res.status(200).send(todos);
    } catch (e) {
      console.log(e.detail);
    }
  },
  createTodo: async (req, res) => {
    try {
      const { id } = req.session.user;
      const { title, description, completed } = req.body;
      let todos = await req.app
        .get("db")
        .create_todo([title, description, completed, id]);
      return res.status(200).send(todos);
    } catch (e) {
      console.log(e.detail);
    }
  },
  updateDescription: async (req, res) => {
    try {
      const { id } = req.session.user;
      const { description } = req.body;
      let todos = await req.app.get("db").update_description([description, id]);
      return res.status(200).send(todos);
    } catch (e) {
      console.log(e.detail);
    }
  },
  updateTitle: async (req, res) => {
    try {
      const { id } = req.session.user;
      const { title } = req.body;
      let todos = await req.app.get("db").update_title([title, id]);
      return res.status(200).send(todos);
    } catch (e) {
      console.log(e.detail);
    }
  },
  markComplete: async (req, res) => {
    const { todoId, completed } = req.body;

    try {
      let todos = await req.app
        .get("db")
        .mark_complete([completed, todoId, req.session.user.id]);
      return res.status(200).send(todos);
    } catch (e) {
      console.log(e.detail);
    }
  },
  deleteTodo: async (req, res) => {
    try {
      const { id } = req.session.user;
      let todos = await req.app.get("db").delete_todo([req.params.id, id]);
      return res.status(200).send(todos);
    } catch (e) {
      console.log(e.detail);
    }
  }
};

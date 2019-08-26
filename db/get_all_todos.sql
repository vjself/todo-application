select *
from todos INNER JOIN todo_users ON (todos.user_id = todo_users.id);

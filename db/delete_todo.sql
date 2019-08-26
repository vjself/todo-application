DELETE FROM todos WHERE todo_id = $1;
SELECT *
FROM todos
WHERE user_id = $2;
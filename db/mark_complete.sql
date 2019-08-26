update todos set completed = $1 where todo_id = $2;
SELECT *
FROM todos
WHERE user_id = $3;
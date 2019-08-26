insert into todos
   (title, description, completed, user_id)
values($1, $2, $3, $4);
select *
from todos
where user_id = $4;
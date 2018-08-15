update users
set username = ${nickname}, auth_id = ${sub}
where id = $1
RETURNING *;
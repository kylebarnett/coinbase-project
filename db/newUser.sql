INSERT INTO users ( username, email, auth_id )
values ( ${nickname}, ${email}, ${sub} )
RETURNING *;
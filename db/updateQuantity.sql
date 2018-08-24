update cart 
set quantity = $1
where user_id = $2;
select * from users
join users on cart.id = users.id;
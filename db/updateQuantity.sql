update cart 
set quantity = $1
where user_id = $2;
select * from cart
join users on cart.user_id = users.id
order by user_id;
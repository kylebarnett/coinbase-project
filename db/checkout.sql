-- delete from cart;
-- select * from cart
-- join users on cart.user_id = users.id
-- order by user_id

select * from cart 
where user_id = $1
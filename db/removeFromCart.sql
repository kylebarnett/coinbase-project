delete from cart
where id = $1;
select * from cart
join users on cart.user_id = users.id
where user_id = $2
order by user_id
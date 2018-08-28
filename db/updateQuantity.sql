update cart 
set quantity = $1
where id = $2;
select * from cart
where user_id = $3
order by cart.id;
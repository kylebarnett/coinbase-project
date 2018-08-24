insert into cart ( product, price, quantity, user_id)
values($1, $2, $3, $4);
select * from cart
where user_id = $4;


CREATE TABLE users(
  id serial primary key,
  username varchar(20),
  password varchar(20),
  email varchar(30)
);

CREATE TABLE cart(
  id serial primary key,
  product varchar(20),
  price integer,
  quantity integer,
  user_id references users(id)
);

CREATE TABLE orders(
  id serial primary key,
  product varchar(20),
  price integer,
  quantity integer,
  order_time timestamp,
  user_id references users(id)
);


-- orders: 
--step 1 is select sum(price) from cart where user_id = $1 and active=true
--step 3 insert into orders \
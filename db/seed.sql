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

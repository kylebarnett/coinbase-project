insert into orders (product, price, quantity, order_time, user_id)
values (${product}, ${price}, ${quantity}, current_timestamp, ${user_id});
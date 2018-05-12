BEGIN;
DROP TABLE IF EXISTS users ,posts,comments,votes_post,votes_comment;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
user_name  VARCHAR(50) NOT NULL UNIQUE CHECK (length(user_name) >= 4),
password VARCHAR(100) NOT NULL CHECK (length(password) >= 6),
email VARCHAR(50) NOT NULL UNIQUE CHECK(length(user_name) >= 5),
img_profile varchar
);

CREATE TABLE posts (
id SERIAL PRIMARY KEY,
user_id INTEGER NOT NULL REFERENCES users(id),
post_title VARCHAR(100) NOT NULL CHECK (length(post_title) >= 4),
post_content VARCHAR NOT NULL CHECK (length(post_content) >=3),
img_url VARCHAR
);


CREATE TABLE comments (
id SERIAL PRIMARY KEY,
user_id INT NOT NULL REFERENCES users(id),
comment_content VARCHAR(100) NOT NULL CHECK (length(comment_content) >=0),
on_post_id INTEGER  REFERENCES posts(id),
on_comment_id INTEGER REFERENCES comments(id),
CHECK ((on_post_id IS NOT NULL AND on_comment_id IS NULL) OR (on_comment_id IS NOT NULL AND on_post_id IS NULL))

);

CREATE TABLE votes_post (
user_id INTEGER NOT NULL REFERENCES users(id),
post_id INTEGER  REFERENCES posts(id),
PRIMARY KEY  (user_id,post_id)

-- CHECK ((on_post_id IS NOT NULL AND on_comment_id IS NULL) OR (on_comment_id IS NOT NULL AND on_post_id IS NULL))

);
CREATE TABLE votes_comment (
user_id INTEGER NOT NULL REFERENCES users(id),
comment_id INTEGER REFERENCES comments(id),
PRIMARY KEY  (user_id,comment_id)

-- CHECK ((on_post_id IS NOT NULL AND on_comment_id IS NULL) OR (on_comment_id IS NOT NULL AND on_post_id IS NULL))

);


INSERT INTO users (user_name,password,email,img_profile)
VALUES
  ('ramyalshurafa','$2b$08$qQsXiDB5tLjGzYlXiNo7IeDdQAlbRAPs0EsbJvu28c/p5wqbbnaLa','ramyshurafa@hotmail.com','https://orig00.deviantart.net/cf55/f/2016/058/f/8/profile_picture_by_diedummydie-d9taee7.jpg'),
  ('ramyalshurafa2','$2b$08$qQsXiDB5tLjGzYlXiNo7IeDdQAlbRAPs0EsbJvu28c/p5wqbbnaLa','ramyshurafa@hotmail.com2','http://doc.angus.ai/0.0.15/_images/gwenn.jpg'),
  ('ramyalshurafa3','$2b$08$qQsXiDB5tLjGzYlXiNo7IeDdQAlbRAPs0EsbJvu28c/p5wqbbnaLa','ramyshurafa@hotmail.com3','https://upload.wikimedia.org/wikipedia/commons/d/d1/Malcolm_Turnbull_PEO_%28cropped%29.jpg'),
  ('ramyalshurafa4','$2b$08$qQsXiDB5tLjGzYlXiNo7IeDdQAlbRAPs0EsbJvu28c/p5wqbbnaLa','ramyshurafa@hotmail.com4','https://randomuser.me/api/portraits/women/30.jpg'),
  ('ramyalshurafa5','$2b$08$qQsXiDB5tLjGzYlXiNo7IeDdQAlbRAPs0EsbJvu28c/p5wqbbnaLa','ramyshurafa@hotmail.com5','https://randomuser.me/api/portraits/women/21.jpg'),
  ('ramyalshurafa6','$2b$08$qQsXiDB5tLjGzYlXiNo7IeDdQAlbRAPs0EsbJvu28c/p5wqbbnaLa','ramyshurafa@hotmail.com6','https://randomuser.me/api/portraits/women/84.jpg'),
  ('ramyalshurafa7','$2b$08$qQsXiDB5tLjGzYlXiNo7IeDdQAlbRAPs0EsbJvu28c/p5wqbbnaLa','ramyshurafa@hotmail.com7','https://randomuser.me/api/portraits/men/96.jpg')
;


INSERT INTO posts (user_id,post_title,post_content,img_url)
VALUES
  (1,'HAPPY BIRTHDAY GIF','HAPPY BIRTHDAY HAPPY BIRTHDAY HAPPY BIRTHDAY','https://media.giphy.com/media/IQF90tVlBIByw/giphy.gif'),
  (2,'BASEBALL LOL GIF BY CMC5310','BASEBALL LOL GIF BY CMC5310 BASEBALL LOL GIF BY CMC5310','https://media.giphy.com/media/3OzIPr6nFFXOa0EyXd/giphy.gif'),
  (3,'GLOBE WINK GIF BY BIRTHDAY BOT','GLOBE WINK GIF BY BIRTHDAY BOT GLOBE WINK GIF BY BIRTHDAY BOT GLOBE WINK GIF BY BIRTHDAY BOT','https://media.giphy.com/media/5yLgocrb5JLqhq7pp3W/giphy.gif'),
  (3,'GURU STUDIO YES GIF BY TRUE AND THE RAINBOW KINGDOM','GURU STUDIO YES GIF BY TRUE AND THE RAINBOW KINGDOM GURU STUDIO YES GIF BY TRUE AND THE RAINBOW KINGDOM','https://media.giphy.com/media/APc3ENebU0wkJY1LSj/giphy.gif')
;

INSERT INTO comments ( user_id,comment_content,on_post_id,on_comment_id)
VALUES
  (1,'Nice i like it',1,NULL),
  (2,'Reallt Cool !',NULL,1),
  (3,'I LIKED IT !',NULL,1),
  (4,'ME TOO!',NULL,1),
  (5,' BIG LIKE !',2,NULL),
  (5,' BIG LIKE !',NULL,5),
  (5,' BIG LIKE !',NULL,4),
  (5,' BIG LIKE !',NULL,3),
  (5,' BIG LIKE !',NULL,1)

;
INSERT INTO votes_post (user_id,post_id)
VALUES
  (1,2),
  (1,3),
  (2,3),
  (3,1),
  (2,2)
;
INSERT INTO votes_comment (user_id,comment_id)
VALUES
  (1,2),
  (1,3),
  (2,3),
  (3,1)
;
COMMIT;

use kbdb; -- 시작할때 해야함
show tables; -- 테이블 확인용!

create table if not exists users(
   id int primary key auto_increment, -- 회원번호 (PK)
    name varchar(30) not null, -- 회원명
    email varchar(50) not null unique, -- 이메일 (로그인시 id로 사용)
    passwd varchar(100) not null, -- 비밀번호 (암호화된 비번)
    role varchar(30) not null default 'USER', -- 역할 ( USER 또는 ADMIN)
    createdAt date default (current_date()), -- 가입일
    tel CHAR(11) NOT NULL,
    refreshtoken varchar(512) default null -- 회원 인증시 사용
);



desc users;
select * from users;

-- 전시들 이름
CREATE TABLE IF NOT EXISTS exhibitions (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);
-- 예약 내역
CREATE TABLE IF NOT EXISTS reservations (
	id int primary key auto_increment,
    user_id int NOT NULL,
    exhibition_id int NOT NULL,
    person_count int NOT NULL DEFAULT 1,
    visit_datetime DATETIME NOT NULL,
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES USERS(id) ON DELETE CASCADE,
    FOREIGN KEY (exhibition_id) REFERENCES EXHIBITIONS(id) ON DELETE CASCADE
);
show tables;
desc reservations;
desc exhibitions;

-- 전시 테이블에 넣고 시작하기
insert into exhibitions(name) values("마나 모아나-신성한 바다의 예술, 오세아니아");
insert into exhibitions(name) values("국보순회전, 모두가 함께하는 180일의 여정");
insert into exhibitions(name) values("두 발로 세계를 제패하다");
insert into exhibitions(name) values("각角진 백자 이야기");
select * from exhibitions;
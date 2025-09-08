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
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    exhibition_id INT NOT NULL,
    person_count INT NOT NULL DEFAULT 1,
    visit_datetime DATETIME NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT '예약완료',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (exhibition_id) REFERENCES exhibitions(id) ON DELETE CASCADE
);

show tables;
desc reservations;
desc exhibitions;

-- 전시 테이블에 넣고 시작하기

select * from exhibitions;


-- 유저 테이블에 넣고 시작(예약 내역 확인) 
-- 웹에서 비밀번호 1234 입력 후 로그인
INSERT INTO users (id, name, email, passwd, tel, role)
VALUES (1, '김예시', 'example@naver.com', '$2b$10$N8rX4y0YOsgIey.lz6kGf.g4nr7C63fPpl/hLskq2Larv9bAjEuiS', '01012345678', 'USER');
select * from users;
-- delete from users;

-- 예약 내역 넣기[1]
INSERT INTO reservations (
    user_id, exhibition_id, person_count, visit_datetime, status
) VALUES (
    1, 1, 2, '2025-09-10 10:00:00', '예약완료'
);

-- 예약 내역 넣기[2]
INSERT INTO reservations (
    user_id, exhibition_id, person_count, visit_datetime, status
) VALUES (
    1, 2, 7, '2025-09-10 12:00:00', '예약완료'
);

-- 예약 내역 넣기[3]
INSERT INTO reservations (
    user_id, exhibition_id, person_count, visit_datetime, status
) VALUES (
    1, 2, 7, '2025-09-10 12:00:00', '취소'
);

-- '김예시' 예약 내역 확인
SELECT * FROM reservations WHERE user_id = 1;

select * from reservations;

desc exhibitions;

SELECT * FROM exhibitions;

ALTER TABLE exhibitions DROP column period;
ALTER TABLE exhibitions DROP column location;


ALTER TABLE exhibitions ADD startdate DATE NOT NULL;
ALTER TABLE exhibitions ADD enddate DATE NOT NULL;
ALTER TABLE exhibitions ADD location VARCHAR(50) NOT NULL;

-- DELETE FROM exhibitions;
ALTER TABLE exhibitions AUTO_INCREMENT = 1;
insert into exhibitions(name, startdate, enddate, location) values("마나 모아나-신성한 바다의 예술, 오세아니아","2025-04-30","2025-09-14","국립중앙박물관 특별전시실2");
insert into exhibitions(name, startdate, enddate, location) values("국보순회전, 모두가 함께하는 180일의 여정","2025-05-20","2025-12-07","고흥분청문화박물관 등 8개 지역 공립 박물관");
insert into exhibitions(name, startdate, enddate, location) values("두 발로 세계를 제패하다","2025-07-25","2025-12-28","상설전시관 2층 기증1실");
insert into exhibitions(name, startdate, enddate, location) values("각角진 백자 이야기","2025-05-20","2025-12-07","분청사기·백자실");


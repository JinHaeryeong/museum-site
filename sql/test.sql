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
insert into exhibitions(name) values("마나 모아나-신성한 바다의 예술, 오세아니아");
insert into exhibitions(name) values("국보순회전, 모두가 함께하는 180일의 여정");
insert into exhibitions(name) values("두 발로 세계를 제패하다");
insert into exhibitions(name) values("각角진 백자 이야기");
select * from exhibitions;


-- 유저 테이블에 넣고 시작(예약 내역 확인)
INSERT INTO users (
    id, name, email, passwd, role, createdAt, tel
) VALUES (
    1, '김예시', 'yeshi@example.com', 
    '$2b$10$G6.cGjI2MR9o00Bv4JD9jOS4sl1MF5rEMHDVvmbhMbkKKiBC0ZEFW',
    'USER', '2025-09-02', '01012345678'
);
select * from users;


-- 예약 내역 넣기
INSERT INTO reservations (
    user_id, exhibition_id, person_count, visit_datetime, status
) VALUES (
    1, 1, 2, '2025-09-10 10:00:00', '예약완료'
);

-- '김예시' 예약 내역 확인
SELECT * FROM reservations WHERE user_id = 1;

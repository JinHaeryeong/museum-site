# 박물관 사이트(Museum-site)
<p align="center">
<img width="187" height="49" alt="logo" src="https://github.com/user-attachments/assets/c69a166d-ce0e-4040-a376-5b99e79b11cf"/>
</p>
> React, Node.js와 MySQL을 활용한 간단한 박물관 소개 및 예약 사이트


---

## 📝 프로젝트 개요
- 📌 목표:
React, Node.js와 MySQL을 활용하여 박물관 웹사이트를 구축하고 전시 일정 확인 및 전시 예약, 취소 등을 수행할 수 있도록 합니다.
## 개발 기간
2025-08-31 - 2025-09-08
### 🛠️ **사용 기술**:
- React 19.1.1v (클라이언트)
- NodeJs 22.18.0v(서버)
- MySQL2 3.14.4v(데이터베이스)
### 📎 API
- FullCalendar API
- KakaoMap API
### 👉 **환경**
- Window 11 Home
- Visual Studio Code
- AMD Ryzen 7 7735HS with Radeon Graphics
- Ram 32GB

---

## 📁 프로젝트 구조
```
📦museum-site
┣ 📂.git
┣ 📂museum-app
┃ ┣ 📂public
┃ ┃ ┣ 📂images
┃ ┃ ┗ 📜vite.svg
┃ ┣ 📂src
┃ ┃ ┣ 📂api
┃ ┃ ┣ 📂assets
┃ ┃ ┃ ┣ 📂styles
┃ ┃ ┣ 📂components
┃ ┃ ┃ ┣ 📂exhibitions
┃ ┃ ┃ ┣ 📂home
┃ ┃ ┃ ┣ 📂location
┃ ┃ ┃ ┣ 📂reservation
┃ ┃ ┃ ┣ 📂users
┃ ┃ ┣ 📂pages
┃ ┃ ┣ 📂stores
┃ ┃ ┣ 📂utils
┃ ┃ ┣ 📜App.jsx
┃ ┃ ┣ 📜index.css
┃ ┃ ┗ 📜main.jsx
┣ 📂museum-app-server
┃ ┣ 📂src
┃ ┃ ┣ 📂config
┃ ┃ ┣ 📂controllers
┃ ┃ ┣ 📂middlewares
┃ ┃ ┗ 📂routes
┃ ┗ 📜server.js
┣ 📂sql
┣ 📜.gitignore
┗ 📜README.md
```


---
## ▶ 실행 방법

### 1. Node.js 설치
https://nodejs.org/en/blog/release/v22.18.0


### 2. 패키지 설치
> node i 명령어를 통해 package.json의 의존성 설치
- cd museum-app > npm i
- cd museum-app-server > npm i

### 3. 실행
- Visual Studio Code를 통해 실행
- 프로젝트 폴더 진입 후 터미널
- cd museum-app > npm run dev
- cd museum-app-server > npm start

---

## 🔍결과
![museum-site-video (1)](https://github.com/user-attachments/assets/5a14251f-34ba-4bd2-b2a5-f7f4c131f322)



|       컴포넌트명       | 화면          |
| ------------------ | -------------- |
| Home | ![Home](https://github.com/user-attachments/assets/a6188f38-2d39-442d-b328-7c3efdd6e14a)   |
| Info |  ![Info](https://github.com/user-attachments/assets/c909353a-d727-4be3-bdfb-5bb28a0bfa76)|
| Exhibitions| ![Exhibitions](https://github.com/user-attachments/assets/abea00d6-6960-459d-9536-735b883dcd69)|
|About| ![About](https://github.com/user-attachments/assets/5eb0d1e2-88e7-4bd5-a9e7-9583d6531818)|
|Reservation| ![Reservation](https://github.com/user-attachments/assets/0881a295-e8e7-4ba3-9705-8d4f44ad6cdb)|
|MyPage|![MyPage](https://github.com/user-attachments/assets/58f4ba91-625d-44c9-b14b-f83e38b0506d) |


---
## 🧩 구현 내용 요약
- JWT를 이용해 로그인, 로그아웃 구현
- FullCalendar API를 이용해 전시 일정 시각적으로 볼 수 있도록 구현
- KakaoMap API를 이용해 박물관의 위치를 지도로 확인할 수 있도록 구현
- 전시 페이지의 예약하기 버튼을 통해 예약하기 페이지에 접근
- 날짜, 시간, 인원을 입력하여 예약 구현
- MyPage를 통해 자신의 예약을 확인하고 취소할 수 있도록 구현
---
## 참고 사이트
국립중앙박물관 - https://www.museum.go.kr/MUSEUM/main/index.do



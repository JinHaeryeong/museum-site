# museum-site
React, Node.js, MySQL을 이용해 예약이 들어간 간단한 박물관 사이트 사이트 제작

## 실행 환경
- Node.js: >= 
- npm: >= 
- React: ^19.1.1
- Vite: ^7.1.2
- Express: 
- mysql2: 
- Database: 


## 📁 client/ 폴더 구조 및 설명
client/
├── public/             
│   └── index.html        
│
├── src/                 
│   ├── assets/            
│   │   ├── images/        
│   │   └── styles/        
│   │       └── _.css
│   │
│   ├── components/        # 재사용 가능한 UI 컴포넌트
│   │   └── _.jsx         
│   │
│   ├── pages/             #
│   │   ├── Home/          # 메인페이지
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── Exhibitions/   # 전시 목록 및 상세
│   │   │   ├── Exhibitions.jsx
│   │   │   └── ExhibitionDetail.jsx
│   │   ├── Reservation/   # 전시 예약 관련 페이지
│   │   │   ├── ReservationForm.jsx
│   │   │   └── ReservationList.jsx
│   │   └── MyPage/        # 마이페이지 (내 예약 등)
│   │       ├── MyPage.jsx
│   │       └── MyReservations.jsx
│   │
│   ├── hooks/             # 커스텀 훅 
│   │
│   ├── context/           # 전역 상태 관리 (Context API)
│   │
│   ├── services/          # API 요청 함수 모음
│   │
│   ├── App.jsx         
│   └── main.jsx         
│
├── package.json      
└── vite.config.js         


## 브랜치 전략
- main : 
- dev : 
- feature/mainpage : 
- feature/test : 
# museum-site
React, Node.js, MySQL을 이용해 예약이 들어간 간단한 박물관 사이트 사이트 제작


## 프로젝트 구조

```
client/
├── public/                  
│
├── src/                    
│   ├── assets/              
│   │   ├── images/          
│   │   └── styles/          
│   │
│   ├── components/          # 재사용 가능한 공통 UI 컴포넌트
│   │   └── _.jsx
│   │
│   ├── pages/               # 라우팅되는 화면 단위 컴포넌트
│   │   ├── Home/            # 메인페이지
│   │   ├── Exhibitions/     # 전시 목록 / 상세
│   │   ├── Reservation/     # 예약 화면
│   │   └── MyPage/          # 마이페이지 (내 예약 등)
│   │
│   ├── hooks/               # 커스텀 훅 (API, 상태 로직 재사용)
│   │   └── useAuth.js
│   │
│   ├── context/             # 전역 상태 관리 (React Context API)
│   │   └── AuthContext.jsx
│   │
│   ├── services/            # API 통신 모듈 
│   │   ├── api.js
│   │   └── reservationService.js
│   │
│   ├── App.jsx            
│   └── main.jsx            
│
├── .gitignore
├── index.html               
├── package.json
└── vite.config.js           

```
## 📌 브랜치 전략

- `main`: 배포용
- `dev`: 개발 통합
- `feature/mainpage`: 
- `feature/test`:


## ⚙️ 실행 환경 및 주요 버전

- Node.js: >= 
- npm: >= 
- Vite: ^7.1.2
- React: ^19.1.1
- React Router DOM: 
- Express: 
- mysql2:
- Axios: 
# museum-site

React, Node.js, MySQL을 이용해 예약이 들어간 간단한 박물관 사이트 사이트 제작

📦museum-site
┣ 📂.git
┣ 📂museum-app
┃ ┣ 📂public
┃ ┃ ┣ 📂images
┃ ┃ ┃ ┣ 📜aboutinfo_director.jpg
┃ ┃ ┃ ┣ 📜attention_img1.jpg
┃ ┃ ┃ ┣ 📜attention_img2.jpg
┃ ┃ ┃ ┣ 📜attention_img3.jpg
┃ ┃ ┃ ┣ 📜attention_img4.jpg
┃ ┃ ┃ ┣ 📜carousel_img1.jpg
┃ ┃ ┃ ┣ 📜carousel_img2.jpg
┃ ┃ ┃ ┣ 📜carousel_img3.jpg
┃ ┃ ┃ ┣ 📜carousel_img4.jpg
┃ ┃ ┃ ┣ 📜exhibition_cobalt.jpg
┃ ┃ ┃ ┣ 📜exhibition_img1.jpg
┃ ┃ ┃ ┣ 📜exhibition_img2.png
┃ ┃ ┃ ┣ 📜exhibition_img3.jpg
┃ ┃ ┃ ┣ 📜exhibition_img4.jpg
┃ ┃ ┃ ┣ 📜facebook_logo.svg
┃ ┃ ┃ ┣ 📜instagram_logo.svg
┃ ┃ ┃ ┣ 📜logo.png
┃ ┃ ┃ ┣ 📜logo_dark.png
┃ ┃ ┃ ┣ 📜museumInfo.jpg
┃ ┃ ┃ ┣ 📜naver_logo.svg
┃ ┃ ┃ ┣ 📜twitter_logo.svg
┃ ┃ ┃ ┗ 📜youtube_logo.svg
┃ ┃ ┗ 📜vite.svg
┃ ┣ 📂src
┃ ┃ ┣ 📂api
┃ ┃ ┃ ┣ 📜axiosAuthInstance.js
┃ ┃ ┃ ┣ 📜axiosInstance.js
┃ ┃ ┃ ┣ 📜calendarApi.js
┃ ┃ ┃ ┣ 📜reservationApi.js
┃ ┃ ┃ ┗ 📜userApi.js
┃ ┃ ┣ 📂assets
┃ ┃ ┃ ┣ 📂styles
┃ ┃ ┃ ┃ ┣ 📜cancel.css
┃ ┃ ┃ ┃ ┣ 📜exhibitionInfo.css
┃ ┃ ┃ ┃ ┣ 📜exhibitions.css
┃ ┃ ┃ ┃ ┣ 📜footer.css
┃ ┃ ┃ ┃ ┣ 📜global.css
┃ ┃ ┃ ┃ ┣ 📜header.css
┃ ┃ ┃ ┃ ┣ 📜main.css
┃ ┃ ┃ ┃ ┣ 📜museumInfo.css
┃ ┃ ┃ ┃ ┣ 📜MyOrder.css
┃ ┃ ┃ ┃ ┣ 📜reservationForm.css
┃ ┃ ┃ ┃ ┣ 📜reservationInfoCard.css
┃ ┃ ┃ ┃ ┣ 📜reservationPage.css
┃ ┃ ┃ ┃ ┣ 📜sign.css
┃ ┃ ┃ ┃ ┗ 📜visitus.css
┃ ┃ ┃ ┗ 📜react.svg
┃ ┃ ┣ 📂components
┃ ┃ ┃ ┣ 📂exhibitions
┃ ┃ ┃ ┃ ┗ 📜ExhibitionList.jsx
┃ ┃ ┃ ┣ 📂home
┃ ┃ ┃ ┃ ┣ 📜AboutInfo.jsx
┃ ┃ ┃ ┃ ┣ 📜ExhibitionInfo.jsx
┃ ┃ ┃ ┃ ┣ 📜HomeContent.jsx
┃ ┃ ┃ ┃ ┣ 📜MuseumInfo.jsx
┃ ┃ ┃ ┃ ┗ 📜MyOrder.jsx
┃ ┃ ┃ ┣ 📂location
┃ ┃ ┃ ┃ ┗ 📜VisitUs.jsx
┃ ┃ ┃ ┣ 📂reservation
┃ ┃ ┃ ┃ ┣ 📜Cancel.jsx
┃ ┃ ┃ ┃ ┣ 📜ReservationForm.jsx
┃ ┃ ┃ ┃ ┗ 📜ReservationInfoCard.jsx
┃ ┃ ┃ ┣ 📂users
┃ ┃ ┃ ┃ ┣ 📜SignIn.jsx
┃ ┃ ┃ ┃ ┗ 📜SignUp.jsx
┃ ┃ ┃ ┣ 📜Footer.jsx
┃ ┃ ┃ ┣ 📜Header.jsx
┃ ┃ ┃ ┗ 📜Modal.jsx
┃ ┃ ┣ 📂pages
┃ ┃ ┃ ┣ 📜About.jsx
┃ ┃ ┃ ┣ 📜Exhibitions.jsx
┃ ┃ ┃ ┣ 📜Home.jsx
┃ ┃ ┃ ┣ 📜Info.jsx
┃ ┃ ┃ ┣ 📜Location.jsx
┃ ┃ ┃ ┣ 📜MainPage.jsx
┃ ┃ ┃ ┣ 📜Mypage.jsx
┃ ┃ ┃ ┣ 📜ReservationCheck.jsx
┃ ┃ ┃ ┗ 📜ReservationPage.jsx
┃ ┃ ┣ 📂stores
┃ ┃ ┃ ┗ 📜authStore.js
┃ ┃ ┣ 📂utils
┃ ┃ ┃ ┗ 📜authUtils.js
┃ ┃ ┣ 📜App.jsx
┃ ┃ ┣ 📜index.css
┃ ┃ ┗ 📜main.jsx
┃ ┣ 📜eslint.config.js
┃ ┣ 📜index.html
┃ ┣ 📜package.json
┃ ┗ 📜vite.config.js
┣ 📂museum-app-server
┃ ┣ 📂src
┃ ┃ ┣ 📂config
┃ ┃ ┃ ┗ 📜dbPools.js
┃ ┃ ┣ 📂controllers
┃ ┃ ┃ ┣ 📜exhibitionController.js
┃ ┃ ┃ ┣ 📜reservationController.js
┃ ┃ ┃ ┣ 📜signController.js
┃ ┃ ┃ ┗ 📜userController.js
┃ ┃ ┣ 📂middlewares
┃ ┃ ┃ ┗ 📜verifyMiddleware.js
┃ ┃ ┗ 📂routes
┃ ┃ ┃ ┣ 📜exhibitionRouter.js
┃ ┃ ┃ ┣ 📜reservationRouter.js
┃ ┃ ┃ ┣ 📜signRouter.js
┃ ┃ ┃ ┗ 📜userRouter.js
┃ ┣ 📜package-lock.json
┃ ┣ 📜package.json
┃ ┗ 📜server.js
┣ 📂sql
┃ ┗ 📜test.sql
┣ 📜.gitignore
┣ 📜.gitmessage.txt
┣ 📜package-lock.json
┣ 📜package.json
┗ 📜README.md

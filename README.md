# public-cloud-React(Front-End)
React를 사용하여 Spring Boot 서버에서 데이터를 읽어와 콘솔 또는 화면에 출력하였습니다.

## 1. React 프로젝트 생성
#### 1. React 프로젝트 초기화:
```
npx create-react-app user-client
cd user-client
```
 
#### 2. React 프로젝트 실행:
```
npm start
```
 <br>
 
## 2.Axios 설치
React에서 데이터를 쉽게 가져오기 위해 Axios 라이브러리를 사용했습니다.
```
npm install axios
```
 <br>
 
## 3. Spring Boot 서버 데이터 가져오기
React에서 "http://localhost:8080/users" Spring Boot 서버의 엔드포인트에서 데이터를 가져오기 위해 App.js를 수정하였습니다.

```
  useEffect(() => {
    axios
      .get("http://localhost:8080/users") // Spring Boot 서버의 엔드포인트
      .then((response) => {
        console.log(response.data); // 데이터를 콘솔에 출력
        setUsers(response.data); // 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []); // 빈 배열은 컴포넌트가 처음 렌더링될 때만 실행
```

 <br>

## 4. CORS 설정
React가 데이터를 요청할 때 CORS 문제가 발생할 수 있으므로 Spring Boot에서 이를 허용하도록 설정하였습니다.

 <br>


## 5. 결과 화면
<img width="1527" alt="스크린샷 2024-11-27 오후 3 56 25" src="https://github.com/user-attachments/assets/e38fc057-4ff5-480e-ad7b-0e1512f00758">



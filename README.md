# 프리온보딩 챌린지 Todo App

<img width="800" alt="video" src="https://user-images.githubusercontent.com/79828924/185189817-5bbba31e-ac6a-4f5c-b7cf-99540db5557c.gif">

<br>

## 설치, 환경설정 및 실행 방법

```
$ npm install
$ npm run start
```

<br>

## 1. 구현 요구 사항

### 1-1. 로그인 / 회원가입

- [x] 이메일과 비밀번호 유효성 검사기능 구현
- [x] 로그인이 성공 시 JWT를 로컬 스토리지에 저장
- [x] 로그인 여부에 따른 리다이렉트 처리

### 1-2. 투두 리스트

- [x] 투두 리스트 목록 조회
- [x] 투두 리스트 내용과 완료 여부 표시
- [x] 새로운 투두 리스트 추가
- [x] 투두 리스트 수정
- [x] 투두 리스트 삭제

<br>

## 2. 폴더 구조

```bash
├── apis
│   ├── axios.ts
│   ├── authApi.ts
│   └── todoApi.ts
├── components
│   ├── Auth
│   │   ├── AuthStyle.tsx
│   │   ├── Login.tsx
│   │   └── Signup.tsx
│   └── Todo
│       ├── TodoStyle.tsx
│       ├── AddTodo.tsx
│       ├── Header.tsx
│       ├── TodoContainer.tsx
│       ├── TodoList.tsx
│       ├── UpdateForm.tsx
│       └── index.tsx
├── pages
│   ├── LoginPage.tsx
│   ├── NotFound.tsx
│   ├── SignupPage.tsx
│   ├── TodoPage.tsx
│   └── index.tsx
├── routers
│   └── index.tsx
├── types
│   └── todo.ts
├── utils
│    └── validator.ts
├── App.tsx
├── index.tsx
└── setupProxy.ts
```

<br>

## 3. 과제 진행 시 주안점

- typescript 적용 시, any 없이 타입 지정, 에러타입 정의
- 관심사에 따른 폴더 및 파일을 분리하는 것에 대한 생각
- 변수명만 보고 해당 함수가 어떠한 기능을 하는지 알 수 있도록 변수명 네이밍 고민
- 모바일 반응형 UI 제작

<br>

## 4. 한계점 및 개선 사항

- [ ] api 요청하는 부분을 react-query 적용하여 리팩토링
- [ ] CSS Freamword 적용하여 리팩토링
- [ ] UX를 고려하여 todo 수정 폼을 해당 리스트 위치에 추가하고 싶었으나 todo 목록을 매핑하고 있는 컴포넌트에서 해당 리스트만 편집 모드로 변경하지 못했음
- [ ] 과제를 진행하면서 에러 처리 하는 방법에 대해 더 공부해야겠다고 생각함. try/catch 만 써서 에러 처리를 하고 있는데 특정 상황에서 에러 핸들링을 어떤식으로 하는지에 대한 사례를 학습할 예정임

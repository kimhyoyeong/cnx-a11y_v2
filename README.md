# **로컬 작업 환경**

## **환경 설치**

> [Vue 3](https://ko.vuejs.org/guide/introduction)와 [quasar](https://quasar.dev/components)로 작업 환경이 셋팅 되어있습니다.
> 
1. Node.js 설치 후
2. git clone - http://10.50.104.171/Bonobo.Git.Server/cnx-a11y.git 
3. `npm install` 실행하여 패키지 설치
4. `npm run dev` 개발 서버 실행
5. `npm run build` 배포

## 사용 방법

각 페이지 작업은 src/views 내에서만 진행합니다. 

1. UI framwork 의 경우 [Vue 3](https://ko.vuejs.org/guide/introduction) 환경에서 사용가능한 [quasar](https://quasar.dev/components)로 작업 되어있습니다. 
공식 문서 참고하여 사용하시면 됩니다.
2. 이미지 경로는 public/images 폴더에 저장하며 경로는 아래와 같습니다.
src="images/@test.png”
3.  html 코드 예시 같은 경우에는 아래와 같이 진행하시면 됩니다.

```jsx
<VCodeBlock
  code=**'<a href="#">텍스트</a>'**
  highlightjs
  lang="html"
  theme="panda-syntax-light"
/>
```

## **참조 링크**

- [Vue 3](https://ko.vuejs.org/guide/introduction)
- [quasar](https://quasar.dev/components)
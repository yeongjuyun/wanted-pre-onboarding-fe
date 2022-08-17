import { createProxyMiddleware } from 'http-proxy-middleware';
module.exports = function (app: any) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:8000', //api 요청을 보낼 서버 주소
      changeOrigin: true,
    })
  );
};

// target:
//   'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/', //api 요청을 보낼 서버 주소

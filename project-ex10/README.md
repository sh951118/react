# React Component - Styling(css Module 적용하기)

<pre>
1.
mkdir project-ex10

2.
$ npm i -D webpack webpack-cli webpack-dev-server react react-dom style-loader, css-loader
@babel/core babel-loader @babel/preset-env @babel/preset-react

3.
project-ex07의 src, public, webpack.config.js, babel.config.json 복사

4.
npm scripting 적용(package.json)
"scripts": {
    "build": "npx webpack",
    "start": "npx webpack-dev-server"
  },

5.
애플리케이션 작성 
App.js 작성
App.css 작성

Banner01.js
Banner01.css
Banner02.js
Banner02.css

6.
App.css 파일 작성

7. 
style-loader, css-loader 설치
npm i -D style-loader css-loader

8.
css-loader에 CSS Module 설정 (webpack.config.js)
module: {
        rules: [{
            test: /\.js$/i,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.css$/i,
            loader: ['style-loader', 'css-loader']
        }]
    },

9.
개발 서버 실행 및 확인
</pre>
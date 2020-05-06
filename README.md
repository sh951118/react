## 내용 요약
<pre>
======================================================================================
npm init -y project menifest package.json 생성

npm i -D express -> D드라이브에 express라는 라이브러리(node)를 i(install)하겠다는 의미.
-----------> node_modules가 생성 됨.

cp -R project-ex04 project-ex05                ->
node httpd
npm i -D webpack webpack-cli
npx webpack src/index.js -o public/bundle.js  -> 번들링 하기

react를 사용하기 위해 알아야 할 것.
webpack, bunble, react
======================================================================================

[project-ex01]
ES6 for React

============================
[project-ex02]
전통적인 DOM API 기반의 앱

============================
[project-ex03]
파일 나눠서 작성해 보기

============================
[project-ex04]
ES6 모듈 지원 연습

============================
[project-ex05]
ES6 모듈 지원 기반으로 작성해 보기

============================
[project-ex06]
번들링

1. 프로젝트 생성
    1-1. 프로젝트 디렉토리 생성
    1-2. src, public 디렉토리 생성
2. 매니페스트(package.json) 초기화
    $ npm init -y
3. webpack 설치
    $ npm i -D webpack webpack-cli webpack-dev-server
    $ npx webpack -v
4. webpack 설정(webpack.config.js)

const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output:{
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve('public'),
        host: '0.0.0.0',
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,             // hot을 하던지 liveReload 하던지 
        compress: true,
        historyApiFallback: true
    }   
}

5. npm scripting
"scripts": {
    "build": "npx webpack",
    "start": "npx webpack-dev-server"
  },

==============================================================
[project-ex06]
1 ~ 5까지는 project-ex05 동일

6. React Refactoring
    -- react 라이브러리 패키지 설치
        $ npm i -D react react-dom
    -- index.js, App.js 코드 수정

7. 번들링
    -- Babel 설치
        $ npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react
        (@babel/preset-env는 ES6을 ES5로 변환 시켜 줌. 쉽게 설정 가능)
        (@babel/cli는 내가 컴포넌트에서 직접 컴파일 할 때 사용.)
        (babel-loader는 자동으로 실행시켜 줌.)

    -- babel-loader 설정 (webpack.config.js)
    -- babel 설정(babel.config.json)
===============================================================
[project-ex07]  컴포넌트 구현 & 컴포넌트 속성

1. 프로젝트 생성
    1-1. 프로젝트 디렉토리 생성
    1-2. src, public 디렉토리 생성

2. 매니페스트(package.json) 초기화
    $ npm init -y

3. 패키지 설치
    $ npm i -D webpack webpack-cli webpack-dev-server react react-dom @babel/core babel-loader @babel/preset-env @babel/preset-react
    $ npx webpack -v

4. webpack 설정(webpack.config.js)
---------------------------------------------------------
const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output:{
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        contentBase: path.resolve('public'),
        host: '0.0.0.0',
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,             // hot을 하던지 liveReload 하던지 
        compress: true,
        historyApiFallback: true
    }   
}
---------------------------------------------------------
5. Babel 설정(babel.config.json)
---------------------------------------------------------
{
    "presets": [["@babel/env",{
                "targets": {
                    "ie": "11",
                    "edge": "80",
                    "firefox": "73",
                    "chrome": "82",
                    "opera": "69",
                    "safari": "13"
                }
            }], "@babel/preset-react"]
}
---------------------------------------------------------
6. npm scripting (package .json, scripts 섹션 수정)
---------------------------------------------------------
"scripts": {
    "build": "npx webpack",
    "start": "npx webpack-dev-server"
  },
---------------------------------------------------------

7. 화면 디자인

8. 컴포넌트 작성 + 조합***

9. 속성 + 상태
<pre>
# React 애플리케이션으로 리팩토링

<pre>
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
</pre>
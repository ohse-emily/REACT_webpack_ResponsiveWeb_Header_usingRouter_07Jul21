const path = require('path')
const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')  //추가 
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {  //module.exports부터 무조건 쓰기 ! 
    name:'firstWebpack', //webpack의 이름  / 안적어도 된다. 
    mode:'development', //어떤 용도로 개발을 할 것이냐 
    devtool:'eval',   // eval -> 개발용 , hidden-source-map -> 배포용 

    resolve:{
        extensions:['.js', '.jsx']
    },

    entry:{
        app:['./index.jsx']
    },

    // module을 통해 babel or sth 통해 해석해야하는구나 알도록 설정
    // 외부파일 가져와서 읽을 때 사용하는 
    // babel은 js 뿐만 아니라 다른 파일도 읽을 수 있음 -> 규칙 정해주기
    module:{
        rules:[{
            test:/\.jsx?$/,  //확장자 .js / .jsx 가능하게
            loader:'babel-loader', // webpack - babel 이해해주는 아이
            // babel 내용 바꾸고 싶을 때 ex) plugin, preset..
            options:{
                presets:[
                    ['@babel/preset-env', {
                        targets:{
                            browsers:['>5% in KR','last 2 chrome versions']
                        },
                        debug:true,
                    }], 
                    '@babel/preset-react'
                ],
                plugins:[
                    'react-refresh/babel'
                ]
            }
        },{
            test:/\.css$/,
            //js에서 css파일 읽어서 어떻게 작동시킬지 적기 
            //뒤에 있는 css-loader부터 실행 -> style-loader 실행 
            //style-loader는 css-loader 없이 사용이 안됨! 
            use:[MiniCssExtractPlugin.loader,'css-loader']  //수정 111
        }]
    },


    plugins:[
        new webpackPlugin(),
        new webpack.LoaderOptionsPlugin({debug:true}),
        //() 매서드 실행시켜주기 
        // app.css 파일 명으로 만들어서 하나로 묶어 주겠다. 
        new MiniCssExtractPlugin({filename:'app.css'}) //수정 222
        // 그럼 아래에 output 경로로 css 가 생긴다. 
    ],

    output:{
        path:path.join(__dirname,'dist'),
        filename:'app.js', 
        //정적 파일로 바꾼다. 
        publicPath:'/dist'
    },

    // 실행할 때 
    devServer:{
        publicPath:'/dist',
        hot:true, // hot reload 
        historyApiFallback:true,
    }
}
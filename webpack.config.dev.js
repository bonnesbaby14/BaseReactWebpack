const path =require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const MiniCss =require("mini-css-extract-plugin");



module.exports={
    entry:"./index.js",
    mode :"development",
    output:{
        path:path.resolve(__dirname, "dist"),
        filename:"bundle.js",
 

    },
    resolve:{
        extensions:[".js",".jsx"],
     
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.html$/,
                use:[
                    {loader:"html-loader"}
                ]
            },
            {
                test:/\.s[ac]ss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]

            }
        
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            filename:"./index.html"
            
        }),
        new MiniCss({
            filename:"[name].css"
        })
    ],

    devServer:{
        static:path.join(__dirname,"dist"),
        compress:true,
        port:3000,
        open:true,
    }
}
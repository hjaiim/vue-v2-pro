#

>

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and
[docs for vue-loader](http://vuejs.github.io/vue-loader).


## 目录结构
```
|-- build                            # 项目构建(webpack)相关代码
|   |-- build.js                     # 生产环境构建代码
|   |-- check-version.js             # 检查node、npm等版本
|   |-- utils.js                     # 构建工具相关
|   |-- vue-loader.conf.js           # webpack loader配置
|   |-- webpack.base.conf.js         # webpack基础配置
|   |-- webpack.dev.conf.js          # webpack开发环境配置,构建开发本地服务器
|   |-- webpack.prod.conf.js         # webpack生产环境配置
|-- config                           # 项目开发环境配置
|   |-- dev.env.js                   # 开发环境变量
|   |-- index.js                     # 项目一些配置变量
|   |-- prod.env.js                  # 生产环境变量
|-- dist                             # 打包文件
|-- src                              # 源码目录
|   |-- api                          # 接口地址
|   |-- assets                       # 静态资源(图片,自定义js,css,json数据)
|   |-- components                   # vue公共组件以及页面
|   |-- router                       # vue的路由管理
|   |-- store                        # vuex
|   |-- App.vue                      # 页面入口文件
|   |-- main.js                      # 程序入口文件，加载各种公共组件
|-- static                           # 静态文件，(图片，json数据,html,第三方插件js)
|-- .babelrc                         # ES6语法编译配置
|-- .editorconfig                    # 定义代码格式
|-- .gitignore                       # git上传需要忽略的文件格式
|-- .postcsssrc                      # postcss配置文件
|-- README.md                        # 项目说明
|-- index.html                       # 入口页面
|-- package.json                     # 项目基本信息,包依赖信息等
```

##  vue 主要插件使用
### 线上
>1.axios                              # 请求数据
>2.element-ui(pc),mint-ui(h5)         # ui组件
>3.hjai-utils                         # 自定义工具类
>4.qs                                 # 解析URL参数

### 本地
>1.node-sass                          # sass
>2.sass-loader


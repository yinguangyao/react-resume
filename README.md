# 动态简历 #

## 介绍 ##
最近看到别人用vue做了一个动态简历，感觉很有意思，所以我就用react和redux自己也做了一份。

至于为什么用redux，大概是因为前端总是喜欢把简单的事情搞复杂吧哈哈哈哈。

原作者链接：http://strml.net/
## 预览 ##
请戳这里：https://yinguangyao.github.io/react-resume/client/build/index.html

## 运行 ##
```
git clone https://github.com/yinguangyao/react-resume.git
npm install
npm run build
npm start
```
然后在浏览器里面输入localhost:4000就可以运行了。

当然你也可以直接打开build下面的index.html，因为这已经是编译过的了，你也可以在src/assets/data.js里面修改数据，然后重新编译生成自己的动态简历。

## 说明 ##

需要修改显示速度就到client/src/components/reactResume.js里面的this.time那里，time的数值是指多少ms显示一个字。

使用async和await时遇到babel编译的坑，最后用babel-runtime和babel-plugin-transform-runtime两个模块搞定了。

可以借助redux-devTools的chrome插件来查看redux里面的所有状态。

关于webpack和react环境的搭建，请看我这篇博客：https://segmentfault.com/a/1190000008574361

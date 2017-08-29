export const resumeContent = `
# 尹光耀


## 项目及实习经历

### 校园活动管家：web前端工程师（backbone.js、jQuery）

* 基于backbone和jQuery的facejoin官网开发

### 数梦工场：web前端工程师（material-ui、react）

* 基于material-ui和react的后台管理系统开发

### 携程旅行网：web前端工程师 (lizard、react-lite、redux)

* 基于 lizard和react-lite的携程Hybird App开发

### 外包项目：弘宝电子商城后台管理系统 (ant-design、redux)

* 基于 ant-design以及redux、react-router的商城后台管理系统

### [React Resume](https://github.com/yinguangyao/react-resume) (点击链接试试吧)

* React 和 Webpack 制作的简历自动演示效果。


## 教育经历

**武汉大学 - 软件工程**             本科生

## 博客

**GitHub: **https://github.com/yinguangyao
**segmentfault: https://segmentfault.com/u/yinguangyao**

> 如果你喜欢这个效果，Fork [我的项目](https://github.com/yinguangyao/react-resume)，打造你自己的简历！`;




export const styleContent = [`/*
* Inspired by http://strml.net/
* 
* Hello, 我是尹光耀
*
* 最近看到了别人用 Vue 做了一个动态的简历，感觉很有意思，所以我也用 React和Redux 做了一份简易的动态简历
* 希望大家能够喜欢 :)
*/

/* 所以我们就开始吧！首先给所有元素加上过渡效果 */
* {
  -webkit-transition: all .3s;
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222); background: #425261; 
}
/* 文字直接显示在页面上，没有任何装饰，真的人反人类呢！所以我们来给文字加点装饰吧~~ */
.styleEditor {
  background-color: #303030;
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 作为一个程序员，我们不可以太沉闷哦~~，给自己的代码加一点色彩吧 */
.token.comment{ color: #857F6B; font-style: italic; }
.token.selector{ color: #E86E75; }
.token.property{ color: #F78C6C; }
.token.punctuation{ color: #88DCFE; }
.token.function{ color: #82AAFF; }

/* 加一点 3D 效果，更加地酷炫 */
html{
  -webkit-perspective: 1000px;
          perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0; 
  -webkit-transition: none; 
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}
/* 不知道以上对代码框的修改你是否喜欢呢？ */

/* 接下来我给自己准备一个编辑器，用来存放我的简历内容 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh; 
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}

/* 好了，我开始写简历了 */
`,
`
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 *           3          
 *           2          
 *           1          
 *          啦啦！
 */
`,
`
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h1{
  display: block;
  width: 80px;
  margin: 0 auto;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor h3{
	display: inline-block;
	margin: 0.5em 0;
}
.resumeEditor a{
	color: #000;
}
.resumeEditor ul{
	list-style: none;
}
.resumeEditor ul>li::before {
	content: "•";
	margin-left: 1em;
	margin-right: 0.5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
/*
* 作为一名前端工程师，刚学前端的时候真的很痛苦T T
* 不过我并不后悔，因为前端真的很有意思
* 做自己喜欢的事，人生能有多少机会这么不顾一切呢？
* I hope you enjoyed this.
*/
`];


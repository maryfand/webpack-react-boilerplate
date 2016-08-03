<<<<<<< HEAD
# 这是H1标签

## h2

### h3

这是p标签

[百度](http:www.baidu.com)
#### 链接的 快捷键是l+回车

![img](http://f.hiphotos.baidu.com/baike/s%3D500/sign=e51ac644a318972ba73a00cad6cd7b9d/b21bb051f8198618037615d442ed2e738bd4e6a9.jpg)

[七牛](http://www.qiniu.com/)

```js
console.log('hello word');
```

- 这是无序列表
- 这是无序列表



1. 这是有序列表

这是一句    `javascript`代码


**加粗**


_倾斜_

| Header One     | Header Two     |
| :------------- | :------------- |
| Item One       | Item Two       |
表格的快捷键是ta+回车

***
这是一条分割线

还可以用

---

<h1>这里可以写html代码</h1>

### pre标签 可以 代码缩进 自动空格<pre></pre>


# 把markdown转化成html能在网页中显示
##   



render () {
  let xx = '```js\nconsole.log("hello world")\n```';
  return(
    <div>
      {marked('# I am using __markdown__.')}<br/>

        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: marked(xx)
          }}
        />
    </div>
  )
}

## 文字渲染 样式名
安装high-light.js
npm install highlight --save

### 应用到
marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});
### 自动保存
packages setting view open  save autosave

### github 存图片
=======
# webpack-react-boilerplate
>>>>>>> c97bfefa159395999bd8fc7fccfff9953dc62d8d

# 知识总结





##  Part 2

### ES6小知识点：解构赋值 + 重命名

```javascript
let obj = {a:{b:1}}
const {a} = obj; //传统解构赋值
const {a:{b}} = obj; //连续解构赋值
const {a:{b:value}} = obj //连续解构赋值+重命名
```

### 消息订阅与发布机制

​	1）先订阅，再发布（理解：有一种隔空对话的感觉）

​	2）适用于任意组件间通信

​	3）要在组件的componentWillUnmount中取消订阅

### fetch发送请求（关注分离的思想)  

```javascript
try {
	const response = await fetch(`/api1/search/user2?q=${keyWord}`)
  const data = await response.json()
  cosnole.log(data)
}catch(error){
  console.log('请求出错'，error)
}
```

## Part3

### 路由的基本使用

1. 明确好页面中的导航区、展示区

2. 导航区的a标签改为Link标签

```javascript
<Link to="/xxxx">Demo</Link>
```

3. 展示区写Route标签进行路由匹配

```javascript
<Route path="/xxxx" component={Demo}></Route>
```

4. <App/>最外侧包裹一个<BrowserRouter>或者<HashRouter>

### 路由组件与一般组件

1. 写法不同

​	 一般组件：<Demo />

​     路由组件：<Route path="/demo" component={Demo} />

2. 存放位置不同

​	一般组件：components

​	路由组件：pages

3. 接收props不同：

​	一般组件：写组件标签时传递了什么，就能接收到什么

​	路由组件：接收到三个固定的属性

​		history：

​			go：f go(n)

​			goBack：f goBack( )

​			goForward：f goForward( )

​			push：f push(path, state)

​			replace：f replace(path, state)

​		location：

​			pathname：“/about”

​			search：“”

​			state：undefined

​		match：

​			params：{ }

​			path：“/about”

​			url：“/about”	

###  NavLink与封装NavLink

1. NavLInk可以实现路由链接的高亮，通过activeClassName指定样式类名
2. 标签体内容是一个特殊的标签属性
3. 通过this.props.children可以获取标签体内容

###  解决多级路径刷新页面样式丢失的问题

1. public/index.html 中引入样式时不写 ./，写/（常用）
2. public/index.html中引入样式时不写./，写%PUBLIC_URL%（常用）
3. 使用HashRouter

### 路由的严格匹配与模糊匹配

1. 默认使用的是模糊匹配（【输入的路径】必须要包含【匹配的路径】，且顺序要一致）
2. 开启严格匹配：<Route exact={true} path="/about" component={About} />
3. 严格匹配不要随便开启，需要再开，有时候开启会导致无法继续匹配二级路由

###  Redirect的使用

1. 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
2. 具体编码：

```javascript
<Switch>
	<Route path="/about" component={About} />  
  <Route path="/home" component={Home} />  
  <Redirect to="/about" />
</Switch>
```

### 嵌套路由

1. 注册子路由时要写上父路由的path路径
2. 路由的匹配是按照注册路由的顺序进行的

###  向路由组件传递参数

1. params参数

```javascript
<Link to="/demo/test/tom/18">详情</Link>  							 //路由链接（携带参数）
<Route path="/demo/test/:name/:age" component={Test}>   //注册路由（声明接收）
const {id,title} = this.props.match.params							//接收参数
```

2. search参数

```javascript
<Link to="/demo/test/?name=tom&age=18">详情</Link>  		 //路由链接（携带参数）
<Route path="/demo/test" component={Test}>   						//注册路由（声明接收）
const {id,title} = this.props.location.search						//接收参数
//备注：获取到的search是urlencoded编码字符串，需要借助querystring解析
```

3. state参数

```javascript
<Link to={{path:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>  		 //路由链接（携带参数）
<Route path="/demo/test" component={Test}>   						//注册路由（声明接收）
const {id,title} = this.props.location.state						//接收参数
//备注：刷新也可以保留参数
```

### 编程式路由导航

借助this.props.history对象上的API对操作路由跳转、前进、后退

​	-this.props.history.push()

​	-this.props.history.replace()

​	-this.props.history.goBack()

​	-this.props.history.goForward()

​    -this.props.history.go()

### withRouter

withRouter可以加工一般组件，让一般组件具备路由组件所特有的API,withRouter的返回值是一个新组件

### BrowserRouter与HashRouter参数的影响

1. 底层原理不一样

​	BrowserRouter使用的是H5的history API，不兼容IE9及以下的版本

​	HashRouter使用的是URL的哈希值

2. path表现形式不一样

​	BrowserRouter的路径中没有#，例如：localhost://3000/demo/test

​	HashRouter的路径包含#，例如：localhost://3000/#/demo/test

3. 刷新后对state参数的影响

​	BrowserRouter没有任何影响，因为state保存在history对象中

​	HashRouter刷新后会导致路由state参数的丢失！

4. 备注：hashRouter可以解决一些路径错误相关的问题
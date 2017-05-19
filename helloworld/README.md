# redux-demo
<strong>笔记</strong>

1.Web 应用是一个状态机，视图与状态是一一对应的。

2.所有的状态，保存在一个对象里面。

3.(state, action) => state。

组件操作不作任何修改只发出action，store收到action，交给绑定的reducer处理，得到新的state，进行渲染。

Redux工作流程：

<img src="http://www.ruanyifeng.com/blogimg/asset/2016/bg2016091802.jpg" />

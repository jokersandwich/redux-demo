# redux-demo

## 更新

- 使用了 `react-redux` 和 `babel-plugin-transform-decorators-legacy` ，通过连接件和 `@connect` 装饰器写法，组件方便的获取 state 和 actionCreators。
- 使用了 `redux-thunk` 异步中间件。
- 使用了 ReduxDevTools。

## 笔记

1. Web 应用是一个状态机，视图与状态是一一对应的。
2. 所有的状态，保存在一个对象里面。
3. (state, action) => state。

组件操作不作任何修改只发出 action，store 收到 action，交给绑定的 reducer 处理，得到新的 state，进行渲染。

Redux 工作流程：

![redux](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016091802.jpg)

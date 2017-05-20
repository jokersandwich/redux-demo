import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import Counter from './components/Counter';
import counter from './reducers';

const store = createStore(counter);
const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(
	<Counter 
  	value={store.getState()}	
    onIncrement={() => store.dispatch({type: 'INCREMENT'})}	//onIncrement为什么写在属性里？
    onDecrement={() => store.dispatch({type: 'DECREMENT'})}	//↑因为要调用store?
  />,
  rootEl
);

render();
store.subscribe(render);	//一旦state变化，就执行render;

//store的三个方法store.getState()、store.dispatch()、store.subscribe()都在这一页调用；
//在react-redux中，可以把state和dispatch都注入给组件，在组件中使用更方便；
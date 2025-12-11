import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import './index.css';


import {createStore} from 'redux'

//store uygulamanın conteiner gibi düşünülebilir. Tek bir yerden state bilgileri almak için tanımlıyoruz.
const initialStore ={
  count:0
}

//REDUCERS
//spesifik reducer tanımlaması,store içerisinde birden fazla reducer içerebilir
const counterReducer = (state = initialStore,action)=>{
  switch(action.type){
    case"INCREMENT":
      return {
          count:state.count+1
      }
    case"DECREMENT":
      return {
          count:state.count-1
      }    
    case"RESET":
      return {
          count:0
      }
    default:
      return state;
  }
  return state;
}


//set store
//başlangıçta bir state bilgisi var bunu ortak bir store'da paylaşıyoruz. daha sonra bu bilgiyi getirmek ve degiştirmek için action methodları belirliyoruz.
//bu methodlarla store içinde degişiklikler yapılıp state bilgisini dönüyor.
const store = createStore(counterReducer);

//dispatch her çalıştıgında çalışır
store.subscribe(()=>{
  console.log("subs " +store.getState().count);//count 2
})

//get state

console.log(store.getState());

//INCREMENT, DECREMENT, RESET => ACTIONS (Object)

//DISPATCH 
store.dispatch({
  type:"INCREMENT"
})
console.log(store.getState()); //count 1 

store.dispatch({
  type:"INCREMENT"
})
console.log(store.getState());//count 2






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);


//reportWebVitals();

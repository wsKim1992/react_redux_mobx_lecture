const {createStore,compose, applyMiddleware} = require('redux');
const reducer = require('./reducers');
const {logIn,logOut} = require('./actions/user');
const {addPost} = require('./actions/post');

const initialState = {
    user:{
        isLoggingIn:true,
        data:null,
    },
    posts:[],
    comments:[],
    favorites:[],
    history:[],
    likes:[],
    followers:[]
}
const firstMiddleware = (store)=>(dispatch)=>(action)=>{
    console.log('firstMiddleware 엑션 로깅',action);
    //기능추가.
    dispatch(action);
    console.log('엑션 끝');
};

const thunkMiddleware= (store)=>(next)=>(action)=>{
    console.log('thunkMiddleware 엑션 로깅',action);
    if(typeof action==='function'){//비동기
        return action(store.dispatch,store.getState);
    }
    return next(action);
}

const enhancer = applyMiddleware(
    firstMiddleware,
    thunkMiddleware,
);

const store = createStore(reducer,initialState,enhancer);
/* store.subscribe(()=>{//store의 이벤트 리스너 , react-redux 내부에 들어있음
    console.log('changed');
}) */

console.log('1st : ',store.getState());

store.dispatch(logIn({
    id:1,
    name:'wooseok',
    admin:true,
}))

console.log('2nd : ',store.getState());
/* 
store.dispatch(addPost({
    userId:1,
    id:1,
    content:'Hi Redux'
}))

store.dispatch(addPost({
    userId:1,
    id:1,
    content:'Thomas Lemar'
}))

console.log('3rd : ',store.getState());

store.dispatch(logOut());

console.log('4th : ',store.getState()); */
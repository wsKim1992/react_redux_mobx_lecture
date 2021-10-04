const {createStore} = require('redux');

const reducer = (prevState,action)=>{
    switch(action.type){
        case 'LOG_IN':
            return{
                ...prevState,
                user:action.data,
            };
        case 'LOG_OUT':
            return{
                ...prevState,
                user:null,
            };
        case 'ADD_POST':
            return{
                ...prevState,
                posts:[...prevState.posts,action.data],
            };
        default:return prevState;
    }
}

const initialState = {
    user:null,
    posts:[],
}

const store = createStore(reducer,initialState);
store.subscribe(()=>{//store의 이벤트 리스너 , react-redux 내부에 들어있음
    console.log('changed');
})
//action
const logIn= (data)=>{
    return{
        type:'LOG_IN',//ac
        data,
    }
}

const logOut = ()=>{
    return{
        type:'LOG_OUT',
    }
}

const addPost=(data)=>{
    return{
        type:'ADD_POST',
        data
    }
}

console.log('1st : ',store.getState());

store.dispatch(logIn({
    id:1,
    name:'wooseok',
    admin:true,
}))

console.log('2nd : ',store.getState());

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

console.log('4th : ',store.getState());
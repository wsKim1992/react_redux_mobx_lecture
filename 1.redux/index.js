const {createStore} = require('redux');

const reducer = (prevState,action)=>{
    switch(action.type){
        case 'CHANGE_COMP_A':
            return{
                ...prevState,
                compA:action.data,
            };
        case 'CHANGE_COMP_B':
            return{
                ...prevState,
                compB:action.data,
            };
        case 'CHANGE_COMP_C':
            return{
                ...prevState,
                compC:action.data,
            };
        default:return prevState;
    }
}

const initialState = {
    compA:'a',
    compB:12,
    compC:null
}

const store = createStore(reducer,initialState);
store.subscribe(()=>{//store의 이벤트 리스너 , react-redux 내부에 들어있음
    console.log('changed');
})
//action
const changeCompA= (data)=>{
    return{
        type:'CHANGE_COMP_A',//ac
        data,
    }
}

console.log(store.getState());
store.dispatch(changeCompA('b'));
store.dispatch({type:'CHANGE_COMP_B',data:'s'});
console.log(store.getState());
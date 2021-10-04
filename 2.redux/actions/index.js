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

module.exports ={
    logIn,logOut,addPost
}
const logIn = (data)=>{//async action createor
    return (dispatch,getState)=>{
        dispatch(logInRequest(data));
        try{
            setTimeout(()=>{
                dispatch(logInSuccess({
                    userId:1,
                    nickname:'wooseok_Kim'
                }));
            },2000);
        }catch(e){
            dispatch(logInFailure(e));
        }
    };
};

const logInRequest = (data)=>{
    return {    
        type:'LOG_IN_REQUEST',
        data
    }
};

const logInSuccess=(data)=>{
    return{
        type:'LOG_IN_SUCCESS',
        data
    }
};

const logInFailure=(err)=>{
    return{
        type:'LOG_IN_FAILURE',
        err
    }
}

/* const logIn= (data)=>{//sync action createor
    return{
        type:'LOG_IN',
        data,
    }
} */

const logOut = ()=>{
    return{
        type:'LOG_OUT',
    }
}

module.exports ={
    logIn,logOut
}
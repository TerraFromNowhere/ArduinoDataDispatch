

export const submitValidator = (eve,callback) => {

    eve.preventDefault();

    if( eve.target.value > 6 || eve.target.value < 1 ){
        eve.target.value = "";
    }

    callback(eve.target.value);
}

export const keyNullifier = (eve) => {
    if(eve.key === "Enter"){
        eve.preventDefault();
    }
}
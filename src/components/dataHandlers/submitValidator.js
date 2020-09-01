

export const submitValidator = (eve,callback) => {

    eve.preventDefault();

    if( eve.target.value > 3 || eve.target.value < 1 ){
        eve.target.value = "";
    }

    callback(eve.target.value);
}
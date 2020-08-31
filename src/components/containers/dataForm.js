import React from 'react';

export const DataForm = () => {

    return(       
        <form>
            <input className="inp" type="text"></input>
            <label htmlFor = "inp">
                <button type = "submit">Send</button>
            </label>  

        </form>
    );
}
import React, { useState } from 'react';

function _001() {
    const [ descOrCont, getDescOrCont ] = useState(false);

    // FUNCTION TO SWITCH BETWEEN DESCRIPTION OR CONTENT
    const handleDescOrCont = _=> {
        descOrCont ? getDescOrCont(false) : getDescOrCont(true)
    }


    return (
        <>
            <button onClick={handleDescOrCont}>Description</button>

            {
                descOrCont ? 
                <>DESCRIPTION</>
                :
                <>CONTENT</>
            }
        </>
    )    
}

export default _001;
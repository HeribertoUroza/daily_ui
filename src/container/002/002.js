import React, { useState } from 'react';

import '../../App.css';
import './002.css';

function _002() {
    const [descOrCont, getDescOrCont] = useState(false);

    // FUNCTION TO SWITCH BETWEEN DESCRIPTION OR CONTENT
    const handleDescOrCont = _ => {
        descOrCont ? getDescOrCont(false) : getDescOrCont(true)
    }

    return (
        <>
            {
                !descOrCont ?
                    <>
                        <div className='desc_button_con'>
                            <button className='desc_button' onClick={handleDescOrCont}>Check Out Content</button>
                        </div>
                        <div className='desc_container'>

                            <h1 className='desc_title'>::002</h1>

                            <div className='desc_body'>
                                Design a credit card checkout form or page. Don't forget the important elements such as the numbers, dates, security numbers, etc.
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className='desc_button_con'>
                            <button className='desc_button' onClick={handleDescOrCont}>Check Out Description</button>
                        </div>
                        <div className='cont_container'>
                        
                        </div>
                    </>
            }
        </>
    )
}

export default _002;
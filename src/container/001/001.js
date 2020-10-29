import React, { useState } from 'react';

import '../../App.css';
import './001.css';

function _001() {
    const [ descOrCont, getDescOrCont ] = useState(false);
 
    // FUNCTION TO SWITCH BETWEEN DESCRIPTION OR CONTENT
    const handleDescOrCont = _=> {
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
                        
                            <h1 className='desc_title'>::001</h1>

                            <div className='desc_body'>
                                Create a sign up page, modal, form, or app screen related to signing up for something. It could be for a volunteer event, contest registration, a giveaway, or anything you can image.
                            </div>
                        </div>
                    </>
                :
                    <>
                        <div className='desc_button_con'>
                            <button className='desc_button' onClick={handleDescOrCont}>Check Out Description</button>
                        </div>
                        <div className='cont_container'>
                            <div className='_001_content'>
                                <div className='_001_product'>
                                    <img 
                                        src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
                                        className='_001_image'
                                        alt='product'
                                    />
                                    <p className='_001_bio_1'>Register for a chance to WIN these next gen headphones!</p>
                                </div>
                                <form className='_001_form'>
                                    
                                    <input />
                                    <span>Email</span> 
                                    
                                    <button>Register</button>
                                </form>
                            </div>
                        </div>
                    </>
            }
        </>
    )    
}

export default _001;
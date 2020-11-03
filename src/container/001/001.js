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
                                <div className='_001_product1'>
                                    <img 
                                        src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
                                        className='_001_image'
                                        alt='product'
                                    />
                                    <p className='_001_bio_1'>Register for a chance to WIN these next gen headphones!</p>
                                </div>
                                <div className='_001_product2'>
                                    <img
                                        src='https://images.unsplash.com/photo-1505740106531-4243f3831c78?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
                                        className='_001_image'
                                        alt='product'
                                    />
                                    <p className='_001_bio_2'>Active Noise Cancellation, Comfortable, 360 Audio</p>
                                </div>
                                
                                <div className='_001_product2'>
                                    <img
                                        src='https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                                        className='_001_image _001_image1'
                                        alt='product'
                                    />
                                
                                </div>
                                <form className='_001_form'>
                                    
                                    <input 
                                        className='_001_input' 
                                        type='email'
                                        
                                        />
                                    <span className='_001_label'>Email</span> 
                                    
                                    <button className='_001_button' onClick={(e)=> e.preventDefault()}>Register</button>
                                </form>
                            </div>
                        </div>
                    </>
            }
        </>
    )    
}

export default _001;
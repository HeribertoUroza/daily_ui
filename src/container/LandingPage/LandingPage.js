import React from 'react';
import './landingpage.css'

function LandingPage() {
    return (
        <>
            <div className='landing_container'>
                <h1 className='landing_title'>Introduction</h1>
                <div className='landing_body'>
                    Hello there! My name is Heriberto and this is my UI Daily Challenge.
                    <br/>
                    Click the tabs above to see the different UI's I created along with their description.
                    <br/>
                    My <strong className='landing_bold'>Goal</strong> is to practice CSS and improve my UI creating skills with each design.
                </div>
            </div>
        </>
    )
}

export default LandingPage;
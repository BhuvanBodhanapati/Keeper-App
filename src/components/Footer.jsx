import React from 'react';

function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <div className='footer'>
            <p >You can copy this happily😊  @ Bhuvan Bodhanapati </p>
            <p> No Copyrights &copy; {currentYear}</p>
        </div>
            
    )
}

export default Footer;
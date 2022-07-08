import React from 'react';

function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <div className='footer'>
            <p >This is a copied website, So you can copy it happily😊  @ Bhuvan Bodhanapati </p>
            <p> No Copyrights &copy; {currentYear}</p>
        </div>
            
    )
}

export default Footer;
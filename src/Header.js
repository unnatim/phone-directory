import React from 'react';
// In this line below, we import Component class to make Class components. But if no Class omponents //are required then this can be removed.
//import React, {Component} from 'react';

// This is Functional Component below.
// The constant name Header refers to the File name Header. Hence both names should be same.
const Header = function () {
    return (
        <div className="header">
            Phone-directory
        </div>
    )
}


//This is Class Component below which will be Static. But as Phone-directory is a small application, it is not required to make this function as Class Component.
// class Header extends Component {
//     render () {
//         return (
//             <div className="header">
//              Phone-directory
//             </div>
//         )
//     }
// }

export default Header;
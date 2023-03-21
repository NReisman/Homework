import React from 'react';

// SL - so clicking link is a full page reload. Why not just set selectedBlog in index back to null and then we would go back to blogList without having to relaod page from scratch?
const Header = () => {
    return (

        <header>
            <nav>
                <ul>
                    <li><a id="homeLink" href="http://localhost:3000/">Home</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

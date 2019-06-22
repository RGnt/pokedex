import React from 'react';

const Header = (props) => {

    return (
        <div>
            <h1><a href="/">{props.title}</a></h1>
        </div>
    );
};

Header.defaultProps = {
    title: 'PokeDex'
};

export default Header;
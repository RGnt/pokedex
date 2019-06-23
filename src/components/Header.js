import React from 'react';
import SearchBox from './SearchBox';

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
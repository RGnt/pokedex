import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {PokemonProvider} from './state/state';
const main = (target, container) => {
    ReactDOM.render(target, container);
}

main(
    <PokemonProvider>
        <App />
    </PokemonProvider>,
    document.getElementById("root")
);

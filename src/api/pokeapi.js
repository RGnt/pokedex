const baseURL = "https://pokeapi.co/api/v2/";

const buildUrl = (configObject) => {
    let optionsString = '';

    if(typeof configObject === "string") {
        if(configObject.includes(baseURL)) {
            return configObject;
        } 
        return baseURL
    } 

    if(!configObject.apiEndPoint) {
        return baseURL;
    }

    // TODO: Look for a bit more efficient way if available
    if(configObject.limit || configObject.offset) {
        optionsString += '?';
        configObject.limit ? optionsString += `limit=${configObject.limit}` : optionsString += '';
        configObject.limit && configObject.offset ? optionsString += '&' : optionsString += '';
        configObject.offset ? optionsString += `offset=${configObject.offset}` : optionsString += '';
    }
    return `${baseURL}${configObject.apiEndPoint}/${optionsString}`;
}

export const fetchPokemons = async (configObject={}) => {
    return await fetch(buildUrl(configObject)).then(response => response.json()).catch(error => error);
}
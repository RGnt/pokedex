const baseURL = "https://pokeapi.co/api/v2/";

const buildUrl = (args) => {
    let optionsString = '';

    if(!args) {
        return baseURL;
    }
    
    if(typeof args === "string") {
        if(args.includes(baseURL)) {
            return args;
        } 
        return baseURL
    } 

    if(!args.apiEndPoint) {
        return baseURL;
    }

    // TODO: Look for a bit more efficient way if available
    if(args.limit || args.offset) {
        optionsString += '?';
        args.limit ? optionsString += `limit=${args.limit}` : optionsString += '';
        args.limit && args.offset ? optionsString += '&' : optionsString += '';
        args.offset ? optionsString += `offset=${args.offset}` : optionsString += '';
    }
    return `${baseURL}${args.apiEndPoint}/${optionsString}`;
}

export const fetchPokemons = async (args) => {
    return await fetch(buildUrl(args)).then(response => response.json()).catch(error => error);
}
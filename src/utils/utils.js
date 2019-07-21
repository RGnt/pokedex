import variables from './variables.scss';

export const abbreviateName = (name) => {
    switch (name) {
        case ("speed"): {
            return "Spd";
        }
        case ("special-defense"): {
            return "Sp. Def";
        }
        case ("special-attack"): {
            return "Sp. Atk";
        }
        case ("defense"): {
            return "Def";
        }
        case ("attack"): {
            return "Atk";
        }
        case ("hp"): {
            return "HP";
        }
        default: {
            return name;
        }
    }
}

export const createGradient = (color1, color2) => ({ "background": `linear-gradient( -45deg, ${color1}, ${color2})` })
export const capitalize = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1)
}

export const createColorName = (type) => {
    return "color" + capitalize(type);
}
export const createHeaderColor = (types) => {
    if (types.length > 1) {
        return createGradient(variables[createColorName(types[0].type.name)], variables[createColorName(types[1].type.name)]);
    } else {
        return ({ "background": variables[createColorName(types[0].type.name)] })
    }
}

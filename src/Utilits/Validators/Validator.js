export const Required = (text) => {
    if (text) return undefined;
    return "Please enter the text";
};

export const MaxLength_Creator = (MaxLength) => (text) => {
    if (text.length < MaxLength) return undefined;
    return `Max Simbols is a ${MaxLength} !`;
};

export const MinLength_Creator = (MinLength) => (text) => {
    if (text.length > MinLength) return undefined;
    return `Min Simbols is a ${MinLength} !`;
}
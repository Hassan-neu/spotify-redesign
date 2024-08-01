export function addCommas(value: number) {
    const intl = new Intl.NumberFormat("en-us");
    const formatted = intl.format(value);
    return formatted;
}

export const isDate = <T>(time: T) => {
    return Object.prototype.toString.call(time).includes('Date');
}

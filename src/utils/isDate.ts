const isDate = (time: any) => {
    return Object.prototype.toString.call(time).includes('Date');
}

export default isDate;
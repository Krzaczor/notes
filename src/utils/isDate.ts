export const isDate = <T>(time: T) => {
    return (time instanceof Date) && !isNaN(time?.getTime?.() ?? NaN);
}

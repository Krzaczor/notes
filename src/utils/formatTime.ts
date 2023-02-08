import { isDate } from './isDate';

export const formatTime = (time: Date) => {
    if (!isDate(time)) {
        time = new Date(time);
    }

    const day = `0${time.getDate()}`.slice(-2);
    const month = `0${time.getMonth() + 1}`.slice(-2);
    const year = time.getFullYear();

    return [day, month, year].join('.');
}

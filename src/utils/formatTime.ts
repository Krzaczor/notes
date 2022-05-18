import isDate from './isDate';

const formatTime = (time: Date) => {
    if (!isDate(time)) {
        time = new Date(time);
    }

    const day = `0${time.getDate()}`.slice(-2);
    const mounth = `0${time.getMonth() + 1}`.slice(-2);
    const year = time.getFullYear();

    return [day, mounth, year].join('.');
}

export default formatTime;

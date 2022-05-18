import formatTime from 'utils/formatTime';
import { Props } from './Time.types';

const Time = ({ time }: Props) => {
    return <time dateTime={time.toString()}>{ formatTime(time) }</time>
}

export default Time;

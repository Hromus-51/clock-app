import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//========================================
import { TimeEl, Seconds } from './styled.components';
//========================================
import { selectClock, setStateHours } from '../../redux/clockSlice/slice';

const Time = () => {
    const dispatch = useDispatch();
    const clockData = useSelector(selectClock);
    const [time, setTime] = useState('00:00');
    const [hours, setHours] = useState(0);

    const setNewTime = () => {
        const date = new Date();
        const time = date.toLocaleTimeString('ru-RU', {
            hour: 'numeric',
            minute: 'numeric',
            timeZone: clockData.timezone
        })
        setTime(time);
        setHours(parseInt(time));
    }

    useEffect(() => {
        if (clockData.timezone) {
            setNewTime();
            const interval = setInterval(setNewTime, 1000);
            return () => clearInterval(interval);
        }
    }, [clockData])

    useEffect(() => {
        dispatch(setStateHours(hours))
    }, [hours])

    return (
        <TimeEl >
            {time.slice(0, 2)}
            <Seconds>:</Seconds>
            {time.slice(3)}
        </TimeEl>
    );
}

export default Time;



import { useEffect } from 'react';
import { useSelector } from 'react-redux';
//========================================
import Quote from '../Quote/Quote';
import Dial from '../Dial/Dial';
import More from '../More/More';
//========================================
import {
    ClockEl, ClockWrapper, ClockContent
} from './styled-components';
import { selectClock, selectHours } from '../../redux/clockSlice/slice';

const Clock = () => {
    const hours = useSelector(selectHours);
    const clockData = useSelector(selectClock);

    useEffect(() => {
        const theme = hours > 4 && hours < 18 ? 'light' : 'dark';
        document.body.setAttribute('data-theme', theme)
    }, [hours])

    return (
        <ClockEl>
            <ClockWrapper>
                <Quote />
                <ClockContent>
                    <Dial />
                    {clockData &&
                        <More />
                    }
                </ClockContent>
            </ClockWrapper>
        </ClockEl>
    );
}

export default Clock;

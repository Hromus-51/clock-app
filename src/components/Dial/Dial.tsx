import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
//========================================
import {
    DialEl, DialWapper, Clock,
    Greeting, ClockFace, Bst,
    Location, StausDial
} from './styled-components';
import MoreButton from '../MoreButton/MoreButton';
import Time from '../Time/Time';
import { Container } from '../../styles/components';
//========================================
import moonIcon from '../../assets/desktop/icon-moon.svg';
import sunIcon from '../../assets/desktop/icon-sun.svg';
import { useAppDispatch } from '../../redux/store';
import { fetchClock } from '../../redux/clockSlice/asyncActions';
import { fetchLocation } from '../../redux/locationSlice/asyncActions';
import { clockUrl, locationUrl } from '../../API/url';
import { selectClock, selectHours, selectStatus } from '../../redux/clockSlice/slice';
import { AnimatePresence } from 'framer-motion';
import { selectLocation } from '../../redux/locationSlice/slice';

const times = [
    { greeting: 'Good night', start: 0, end: 5 },
    { greeting: 'Good morning', start: 5, end: 12 },
    { greeting: 'Good afternoon', start: 12, end: 18 },
    { greeting: 'Good evening', start: 18, end: 24 },
];

const dialVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
        duration: 0.15,
        delay: 0.1
    }
}

const Dial = () => {
    const dispatch = useAppDispatch();
    const hours = useSelector(selectHours);
    const clockData = useSelector(selectClock);
    const location = useSelector(selectLocation);
    const statusDial = useSelector(selectStatus)
    const [greeting, setGreeting] = useState('');
    const isMobile = useMediaQuery({ maxWidth: 425 })

    useEffect(() => {
        dispatch(fetchClock(clockUrl))
        dispatch(fetchLocation(locationUrl))
    }, [])

    useEffect(() => {
        const greeting = times.find(({ start, end }) => hours >= start && hours < end);
        if (greeting) {
            setGreeting(greeting.greeting);
        }
    }, [hours])

    return (
        <DialEl>
            <Container>
                <AnimatePresence>
                    {statusDial === 'success' ?
                        <DialWapper {...dialVariants}>
                            <Clock>
                                <Greeting>
                                    {greeting === 'Good night' ||
                                        greeting === 'Good evening' ?
                                        <img src={moonIcon} alt="moon" /> :
                                        <img src={sunIcon} alt="sun" />
                                    }
                                    {greeting}{isMobile ? '' : ', it’s currently'}
                                </Greeting>

                                <ClockFace>
                                    <Time />
                                    <Bst>
                                        {clockData.dst ? 'DST' : ''}
                                    </Bst>
                                </ClockFace>
                                <Location>
                                    in {location.city}, {location.country}
                                </Location>
                            </Clock>
                            <MoreButton />
                        </DialWapper> :
                        <StausDial {...dialVariants}>
                            {statusDial}...
                        </StausDial>
                    }
                </AnimatePresence>
            </Container>
        </DialEl>
    );
}

export default Dial;
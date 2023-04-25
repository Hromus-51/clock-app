import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive'
//========================================
import {
    MoreEl, MoreWrapper, Left,
    Right, Item, Title, Date,
    Line
} from './styled-components';
import { Container } from '../../styles/components';
//========================================
import { selectClock, selectMoreIsOpen } from '../../redux/clockSlice/slice';

const More = () => {
    const moreIsOpen = useSelector(selectMoreIsOpen);
    const clockData = useSelector(selectClock);
    const isDesktop = useMediaQuery({ minWidth: 769 });

    return (
        <>
            <AnimatePresence>
                {moreIsOpen &&
                    <MoreEl
                        initial={{ height: 0, marginTop: 0 }}
                        animate={{ height: 'auto', marginTop: isDesktop ? -42 : 0 }}
                        exit={{ height: 0, marginTop: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Container>
                            <MoreWrapper>

                                <Left>
                                    <Item>
                                        <Title>CURRENT TIMEZONE</Title>
                                        <Date>
                                            {clockData.timezone}
                                        </Date>
                                    </Item>
                                    <Item>
                                        <Title>Day of the year</Title>
                                        <Date>
                                            {clockData.day_of_year}
                                        </Date>
                                    </Item>
                                </Left>

                                <Line />

                                <Right>
                                    <Item>
                                        <Title>Day of the week</Title>
                                        <Date>
                                            {clockData.day_of_week === 0 ? 7 :
                                                clockData.day_of_week
                                            }
                                        </Date>
                                    </Item>
                                    <Item>
                                        <Title>Week number</Title>
                                        <Date>
                                            {clockData.week_number}
                                        </Date>
                                    </Item>
                                </Right>

                            </MoreWrapper>
                        </Container>
                    </MoreEl>
                }
            </AnimatePresence>
        </>
    );
}

export default More;
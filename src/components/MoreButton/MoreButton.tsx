import { useDispatch, useSelector } from 'react-redux';
//========================================
import {
    MoreButtonEl, Circle, ArrowIcon
} from './styled-components';
//========================================
import arrowIcon from '../../assets/desktop/icon-arrow-down.svg';
import { selectMoreIsOpen, setMoreIsOpen } from '../../redux/clockSlice/slice';

const MoreButton = () => {
    const dispatch = useDispatch()
    const moreIsOpen = useSelector(selectMoreIsOpen);

    return (
        <MoreButtonEl onClick={() => { dispatch(setMoreIsOpen(!moreIsOpen)) }}>
            {moreIsOpen === false ? 'MORE' : 'LESS'}
            <Circle active={moreIsOpen ? '180' : '0'}>
                <ArrowIcon src={arrowIcon} alt="arrow" />
            </Circle>
        </MoreButtonEl>
    );
}

export default MoreButton;
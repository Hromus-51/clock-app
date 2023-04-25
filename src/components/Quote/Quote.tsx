import { useEffect } from 'react';
import { useSelector } from 'react-redux';
//========================================
import {
    QuoteEl, QuoteWrapper, QuoteBlock,
    QuoteText, QuoteAuthor, IconRefresh,
    StatusQuote
} from './styled-components';
import { Container } from '../../styles/components';
//========================================
import { ReactComponent as RefreshIcon } from '../../assets/desktop/icon-refresh.svg';
import { useAppDispatch } from '../../redux/store';
import { selectQuote, selectStatus } from '../../redux/quoteSlice/slice';
import { fetchQuote } from '../../redux/quoteSlice/asyncActions';
import { quoteUrl } from '../../API/url';
import { AnimatePresence } from 'framer-motion';
import { selectMoreIsOpen } from '../../redux/clockSlice/slice';

const quoteVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.15 },
}

const Quote = () => {
    const dispatch = useAppDispatch();
    const quote = useSelector(selectQuote);
    const statusQuote = useSelector(selectStatus);
    const moreIsOpen = useSelector(selectMoreIsOpen);
    const category = 'happiness';

    useEffect(() => {
        dispatch(fetchQuote({ quoteUrl, category }))
    }, [])

    return (
        <QuoteEl>
            <Container>
                <AnimatePresence>
                    {!moreIsOpen &&
                        <QuoteWrapper
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        >

                            <AnimatePresence mode="wait">
                                {statusQuote === 'success' ?

                                    quote.map((obj, index) => (
                                        <QuoteBlock key={index}>
                                            <QuoteText {...quoteVariants} >
                                                "{obj.content}"
                                            </QuoteText>
                                            <QuoteAuthor>
                                                {obj.author}
                                            </QuoteAuthor>
                                        </QuoteBlock>
                                    )) :

                                    <StatusQuote{...quoteVariants}>
                                        {statusQuote}...
                                    </StatusQuote>
                                }
                            </AnimatePresence>

                            <IconRefresh
                                onClick={() => {
                                    dispatch(fetchQuote({ quoteUrl, category }))
                                }}
                            >
                                <RefreshIcon />
                            </IconRefresh>

                        </QuoteWrapper>
                    }
                </AnimatePresence>
            </Container>
        </QuoteEl>
    );
}

export default Quote;
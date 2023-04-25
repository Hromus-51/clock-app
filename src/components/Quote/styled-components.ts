import { motion } from "framer-motion";
import styled from "styled-components";

export const QuoteEl = styled.div`
    font-size: var(--fs-bm);
    line-height: var(--lh-bm);

    @media(max-width: 425px) {
        font-size: var(--fs-h5-m);
        line-height: var(--lh-h5-m);
    }
`;

export const QuoteWrapper = styled(motion.div)`
    max-width: 573px;
    display: flex;
    column-gap: 15px;

    @media(max-width: 425px) {
        max-width: 324px;
        column-gap: 17px;
    }
`;

export const QuoteBlock = styled(motion.div)`
    flex: 0.942 0 540px;

    @media(max-width: 425px) {
        flex: 0.942 0 290px;
    }
`;

export const StatusQuote = styled(motion.div)`
    flex: 0.942 0 540px;
    &::first-letter {
        text-transform: uppercase;
    }

    @media(max-width: 425px) {
        flex: 0.942 0 290px;
    }
`;

export const QuoteText = styled.p`
    width: 100%;
    
    &:not(:last-child) {
        margin-bottom: 13px;
    }

    @media(max-width: 425px) {
        &:not(:last-child) {
        margin-bottom: 8px;
        }
    }
`;

export const QuoteAuthor = styled.div`
    font-weight: var(--fw-bold);
`;

export const IconRefresh = styled.div`
    flex: 0.03 0 18px;
    height: 18px;
    display: flex;
    align-items:center;

    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);

    transition: color 0.15s ease 0s;
    position: relative;
    top: 9px;

    &:hover {
        color: rgba(255, 255, 255, 1);
    }

    &:active {
        transform: rotate(180deg);
        transition: transform 0.15s ease 0s;
    }

    @media(max-width: 425px) {
        top: 5px;
    }
`;







import { motion } from "framer-motion";
import styled from "styled-components";

export const DialEl = styled.div`
    margin-bottom: 98px;

    @media(max-width: 768px) {
        margin-bottom: 64px;
    }

    @media(max-width: 425px) {
        margin-bottom: 40px;
    }
`;

export const StausDial = styled(motion.div)`
    font-size: var(--fs-h2);
    line-height: var(--lh-h2);
    font-weight: var(--fw-bold);
    &::first-letter {
        text-transform: uppercase;
    }

    @media(max-width: 768px) {
        font-size: var(--fs-h2-m);
        line-height: var(--lh-h2-m);
    }
`;

export const DialWapper = styled(motion.div)`
    display: flex;
    column-gap: 20px;
    justify-content: space-between;

    @media(max-width: 768px) {
        display: block;
    }
`;

export const Clock = styled.div`
    @media(max-width: 768px) {
        &:not(:last-child) {
            margin-bottom: 80px;
        }
    }

    @media(max-width: 425px) {
        &:not(:last-child) {
            margin-bottom: 48px;
        }
    }
`;

export const Greeting = styled.h4`
    font-size: var(--fs-h4);
    line-height: var(--lh-h4);
    letter-spacing: var(--ls-h4);
    text-transform: uppercase;

    display: flex;
    column-gap: 16px;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 16px;
    }

    @media(max-width: 768px) {
        font-size: var(--fs-h5);
        line-height: var(--lh-h5);
        letter-spacing: var(--ls-h5);

        &:not(:last-child) {
            margin-bottom: 0px;
        }
    }

    @media(max-width: 425px) {
        font-size: var(--fs-h4-m);
        line-height: var(--lh-h4-m);
        letter-spacing: var(--ls-h4-m);

        &:not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

export const ClockFace = styled.div`
    display: flex;
    column-gap: 11px;
    align-items: end;

    &:not(:last-child) {
        margin-bottom: 16px;
    }

    @media(max-width: 768px) {
        &:not(:last-child) {
            margin-bottom: 0px;
        }
    }

    @media(max-width: 425px) {
        &:not(:last-child) {
            margin-bottom: 16px;
        }
        column-gap: 13px;
    }
`;

export const Bst = styled.div`
    font-size: var(--fs-bl);
    line-height: var(--lh-bl);
    font-weight: var(--fw-light);

    position: relative;
    bottom: 27px;

    @media(max-width: 768px) {
        font-size: var(--fs-bl-t);
        line-height: var(--lh-bl-t);
        bottom: 21px;
    }

    @media(max-width: 425px) {
        font-size: var(--fs-bl-m);
        line-height: var(--lh-bl-m);
        bottom: 6px;
    }
`;

export const Location = styled.h3`
    font-size: var(--fs-h3);
    line-height: var(--lh-h3);
    letter-spacing: var(--ls-h3);
    font-weight: var(--fw-bold);
    text-transform: uppercase;

    @media(max-width: 768px) {
        font-size: var(--fs-h5);
        line-height: var(--lh-h5);
        letter-spacing: var(--ls-h5);
    }

    @media(max-width: 425px) {
        font-size: var(--fs-h6);
        line-height: var(--lh-h6);
        letter-spacing: var(--ls-h6);
    }
`;


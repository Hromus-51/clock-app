import { motion } from "framer-motion";
import styled from "styled-components";

export const MoreEl = styled(motion.div)`
    overflow: hidden;
    background: var(--bg);
`;

export const MoreWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 94px;
    padding: 74px 0px;

    @media(max-width: 768px) {
        column-gap: 80px;
        padding: 119px 0px;
    }

    @media(max-width: 425px) {
        display: block;
        padding: 48px 0px;
    }
`;

export const Left = styled.div`
    flex: 1 1 50%;

    @media(max-width: 425px) {
        &:not(:last-child) {
            margin-bottom: 16px
        }
    }
`;

export const Right = styled.div`
    flex: 1 1 50%;
`;

export const Item = styled.div`
    color: var(--color-more);

    &:not(:last-child) {
        margin-bottom: 42px
    }

    @media(max-width: 768px) {
        &:not(:last-child) {
            margin-bottom: 48px
        }
    }

    @media(max-width: 425px) {
        display: flex;
        align-item: center;
        justify-content: space-between;
        column-gap:10px;

        &:not(:last-child) {
            margin-bottom: 16px
        }
    }
`;

export const Title = styled.h6`
    font-size: var(--fs-h6);
    line-height: var(--lh-h6);
    letter-spacing: var(--ls-h6);
    text-transform: uppercase;

    &:not(:last-child) {
        margin-bottom: 9px
    }

    @media(max-width: 768px) {
        font-size: var(--fs-h6-t);
        line-height: var(--lh-h6-t);
        letter-spacing: var(--ls-h6-t);

        &:not(:last-child) {
            margin-bottom: 0px
        }
    }

    @media(max-width: 425px) {
        font-size: var(--fs-h6-m);
        line-height: var(--lh-h6-m);
        letter-spacing: var(--ls-h6-m);
    }
`;

export const Date = styled.h2`
    font-size: var(--fs-h2);
    line-height: var(--lh-h2);
    font-weight: var(--fw-bold);

    @media(max-width: 768px) { 
        font-size: var(--fs-h2-t); z
        line-height: var(--lh-h2-t);
    }

    @media(max-width: 425px) {
        font-size: var(--fs-h2-m);
        line-height: var(--lh-h2-m);
    }
`;

export const Line = styled.div`
    align-self: stretch;
    width: 1px;
    background: var(--color-line);

    @media(max-width: 768px) {
        display: none;
    }
`;

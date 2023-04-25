import styled from "styled-components";

export const TimeEl = styled.h1`
    font-size: var(--fs-h1);
    line-height: var(--lh-h1);
    letter-spacing: var(--ls-h1);
    font-weight: var(--fw-bold);

    @media(max-width: 768px) {
        font-size: var(--fs-h1-t);
        line-height: var(--lh-h1-t);
        letter-spacing: var(--ls-h1-t);
    }

    @media(max-width: 425px) {
        font-size: var(--fs-h1-m);
        line-height: var(--lh-h1-m);
        letter-spacing: var(--ls-h1-m);
    }
`;

export const Seconds = styled.span`
    position: relative;
    bottom: 13px;

    @media(max-width: 768px) {
        bottom: 12px;
    }

    @media(max-width: 425px) {
        bottom: 6px;
    }
`;
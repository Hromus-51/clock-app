import styled from "styled-components";

export const MoreButtonEl = styled.button`
    align-self: flex-end;

    font-size: var(--fsb);
    line-height: var(--lhb);
    letter-spacing: var(--lsb);
    font-weight: var(--fw-bold);
    color: var(--button);

    width: 146px;
    background: var(--light);
    border-radius: 28px;

    padding: 8px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 13px;

    &:hover div{
        background: #999999;
    }

    @media(max-width: 425px) {
        font-size: var(--fsb-m);
        line-height: var(--lhb-m);
        letter-spacing: var(--lsb-m);

        width: 115px;
        padding: 4px;
        column-gap: 13px;
    }
`;

export const Circle = styled.div<{ active: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--medium);

    display: flex;
    align-items: center;
    justify-content: center;

    transform: rotate(${props => props.active}deg);
    transition: all 0.15s ease 0s;

    @media(max-width: 425px) {
        width: 32px;
        height: 32px;
    }
`;

export const ArrowIcon = styled.img`
    @media(max-width: 425px) {
        width: 11px;
        height: 7px;
    }
`;
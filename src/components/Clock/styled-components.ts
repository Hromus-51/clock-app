import { motion } from "framer-motion";
import styled from "styled-components";

export const ClockEl = styled.div`
    height: 100vh;
    padding: 56px 0px 0px;
    background-color: rgba(0, 0, 0, 0.35);

    @media(max-width: 768px) {
        padding: 80px 0px 0px;
    }

    @media(max-width: 425px) {
        padding: 32px 0px 0px;
    }
`;

export const ClockWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap:20px;
`;

export const ClockContent = styled(motion.div)`
`;
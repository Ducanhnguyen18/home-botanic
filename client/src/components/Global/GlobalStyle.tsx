import { ReactNode } from 'react';
// import Header from './Header/Header';
import './GlobalStyles.css';

interface Props {
    children: ReactNode;
}

function GlobalStyles({ children }: Props): JSX.Element {
    return <>{children}</>;
}

export default GlobalStyles;

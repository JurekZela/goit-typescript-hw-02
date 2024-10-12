import { ReactElement } from 'react';
import { LoadMore } from './Button-styled';
import { IButton } from './Button-types';

const Button = ({ onClick, loader }: IButton): ReactElement => {
    return (
        <LoadMore onClick={onClick}>{loader ? 'Is Loading' : 'Load More' }</LoadMore>
    )
};

export default Button;
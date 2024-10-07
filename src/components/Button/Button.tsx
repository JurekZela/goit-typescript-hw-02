import { LoadMore } from './Button-styled';

const Button = ({ onClick, loader }) => {
    return (
        <LoadMore onClick={onClick}>{loader ? 'Is Loading' : 'Load More' }</LoadMore>
    )
};

export default Button;
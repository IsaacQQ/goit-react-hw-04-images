import { LoadMore } from "./styled";
import PropTypes from 'prop-types';

export const Button = ({ onClick, Pictures }) => {
    if (Pictures.length === 0) return;
    else return (
        <LoadMore onClick={onClick}>Load more</LoadMore>
    )
};

Button.protoTypes = {
    onClick: PropTypes.func.isRequired,
}
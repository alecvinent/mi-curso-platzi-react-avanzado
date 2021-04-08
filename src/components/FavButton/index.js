import React from "react";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";
import PropTypes from "prop-types";

import {Button} from "./styles";

export const FavButton = ({liked, likes, onClick}) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <React.Fragment>
      <Button onClick={onClick}>
        <Icon size={'32px'} color="#af0f0f"/>{likes} likes!
      </Button>
    </React.Fragment>
  );
};

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

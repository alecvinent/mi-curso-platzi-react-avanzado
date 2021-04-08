import React from "react";
import PropTypes from "prop-types";

import {Grid, Image, Link} from "./styles";
import routes from "../../shared/routes";


export const ListOfFavorites = ({favorites = []}) => {
  return <Grid>
    {
      favorites.map(favorite => <Link key={favorite.id} to={`${routes.detail_base}/${favorite.id}`}>
        <Image key={`image-${favorite.id}`} src={favorite.src}/>
      </Link>)
    }
  </Grid>
};

ListOfFavorites.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired
  )
};

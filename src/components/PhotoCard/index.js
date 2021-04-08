import React, {Fragment} from "react";
import {Link} from "@reach/router";
import PropTypes from "prop-types";

import {Article, Img, ImgWrapper} from "./styles";
import {useNearScreen} from "../../hooks/useNearScreen";
import {FavButton} from "../FavButton";
import {ToogleLikeMutation} from "../../container/ToogleLikeMutation";
import routes from "../../shared/routes";
import {LoadingIndicator} from "../LoadingIndicator";

// cd api/assets
// python3 -m http.server
const DEFAULT_IMAGE = 'http://localhost:8000/photo-1425082661705-1834bfd09dca.jpeg';

export const PhotoCard = ({id, liked, likes = 0, src = DEFAULT_IMAGE}) => {
  const [show, elemento] = useNearScreen();

  return (
    <Article ref={elemento}>
      {show &&
      <Fragment>
        <Link to={`${routes.detail_base}/${id}`}>
          <ImgWrapper>
            <Img src={src} alt="image"/>
          </ImgWrapper>
        </Link>

        <ToogleLikeMutation>
          {
            (toogleLike, {data, loading, error}) => {
              const handleFavClick = () => {
                toogleLike({
                  variables: {
                    input: {id}
                  }
                });
              };

              if (loading) {
                return <LoadingIndicator/>
              }

              return <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
            }
          }
        </ToogleLikeMutation>

      </Fragment>
      }
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName];
    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`);
    }
    if (propValue < 0) {
      return new Error(`${propName} value must be greather than 0`);
    }
  },
};

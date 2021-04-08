import React from "react";
import {gql} from "apollo-boost";
import {Query} from "react-apollo";

import {PhotoCard} from "../components/PhotoCard";
import {LoadingIndicator} from "../components/LoadingIndicator";

const GET_SINGLE_PHOTO = gql`
  query filterPhotosById($id: ID!) {
    photo(id: $id) {
      id,
      categoryId,
      src,
      likes,
      userId,
      liked
    }
  }
`
const renderProp = ({loading, error, data}) => {
  if (loading) return <LoadingIndicator />;
  if (error) return <p>Error</p>;

  const {photo} = data;
  return <PhotoCard {...photo} />;
}

// revisar: https://www.freecodecamp.org/news/react-apollo-client-2020-tutorial/
export const PhotoCardWithQuery = ({id}) => {
  return <Query query={GET_SINGLE_PHOTO} variables={{id}}>
    {
      renderProp
    }
  </Query>
};

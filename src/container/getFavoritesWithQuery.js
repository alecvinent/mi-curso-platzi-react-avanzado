import React from "react";
import {Mutation, Query} from "react-apollo";
import {gql} from "apollo-boost";
import {LoadingIndicator} from "../components/LoadingIndicator";
import {ListOfFavorites} from "../components/ListOfFavorites";

const GET_FAVORITES = gql`
  query getFavorites {
    favs {
      id,
      categoryId,
      src,
      likes,
      liked,
      userId
    }
  }
`

const renderProp = ({loading, error, data}) => {
  if (loading) return <LoadingIndicator/>;
  if (error) return <p>Error</p>;

  const {favs} = data;
  return <ListOfFavorites favorites={favs} />;
}

export const FavoritesWithQuery = () => {
  return <Query query={GET_FAVORITES} fetchPolicy="cache-and-network">
    {
      renderProp
    }
  </Query>
};

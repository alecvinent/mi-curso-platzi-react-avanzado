import {graphql} from "react-apollo";
import {gql} from "apollo-boost";

export const withPhotos = graphql(gql`
  query ($categoryId: ID){
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
}
`);

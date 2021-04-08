import React, {Fragment} from "react";

import {FavoritesWithQuery} from "../container/getFavoritesWithQuery";
import {Layout} from "../components/Layout";

const Favorites = () => {
  return (
    <Fragment>
      <Layout title="Petgram - Your Favorites" subtitle="your favorite pet photos">
        <FavoritesWithQuery/>
      </Layout>
    </Fragment>
  );
};
export default Favorites;

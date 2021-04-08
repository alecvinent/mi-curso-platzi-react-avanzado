import React, {Fragment, memo} from "react";

import {ListOfCategories} from "../components/ListOfCategories";
import {ListOfPhotoCard} from "../container/ListOfPhotoCard";
import {Layout} from "../components/Layout";

const HomePage = ({id}) => {
  return (
    <Fragment>
      <Layout title="Petgram - Pet Photos" subtitle="pet photos">
        <ListOfCategories/>
        <ListOfPhotoCard categoryId={id}/>
      </Layout>
    </Fragment>
  );
};

// recargar los datos si han cambiado
export const Home = memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
});

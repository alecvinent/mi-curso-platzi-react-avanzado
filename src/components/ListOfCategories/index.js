import React, {useEffect, useState, memo} from "react";
import {Category} from "../Category";
import {Item, List} from "./styles";
import routes from "../../shared/routes";
import {LoadingIndicator} from "../LoadingIndicator";


const URL_API = 'http://localhost:3001/categories';
const fetchCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    fetch(URL_API)
      .then(res => res.json())
      .then(response => {
        setCategories(response);
        setLoading(false);
      })
  }, []);

  return {categories, loading};
};

const ListOfCategoriesComponent = () => {
  const {categories, loading} = fetchCategories();
  const [showFixed, setShowFixed] = useState(false);

  // add scroll event
  useEffect(function () {
    const onScroll = e => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const newShowFixed = scrollTop > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    }

    document.addEventListener('scroll', onScroll);

    // clean event after use
    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed) => {
    return <List fixed={fixed}>
      {
        loading ? <Item key="loading"><LoadingIndicator/></Item>
          : categories.map((category) => <Item key={category.id}>
            <Category {...category} path={`${routes.pet_base}/${category.id}`}/>
          </Item>)
      }
    </List>
  };

  if (loading) {
    return <LoadingIndicator/>;
  }

  return (
    <React.Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </React.Fragment>
  );
};

export const ListOfCategories = memo(ListOfCategoriesComponent)

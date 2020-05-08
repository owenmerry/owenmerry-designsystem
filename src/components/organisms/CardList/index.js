import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CardListStyle } from './styles';
import {Button, Card, Input} from '../../index';

const CardList = props => {
  const CardListItems = props.items;
  const showLoadMore = props.showLoadMore;
  const clickLoadMore = props.clickLoadMore;
  const loadMoreText = props.loadMoreText;
  const loadMoreTextLoading = props.loadMoreTextLoading;
  const isLoadMoreLoading = props.isLoadMoreLoading;
  const isLoading = props.loading;

  // state
  const [stateCardListItems, setStateCardListItems] = useState(CardListItems);
  const [stateSearch, setStateSearch] = useState('');

  useEffect(() => {
    setStateCardListItems(CardListItems);
    console.log('CardList Module useEffect');
  }, [CardListItems]);

  const updateData = (search) => {
    // const searchWord = stateSearch;
    setStateSearch(search);
    const searchWord = search;
    if (searchWord === '') { return setStateCardListItems(props.items); }
    const filteredList = props.items.filter((item) => {
      return item.title.toLowerCase().search(searchWord) >= 0 || false;
    });
    console.log(`search ${searchWord}`, filteredList);
    setStateCardListItems(filteredList);
  };

  // functions
  const getLoadMoreText = () => {
    return isLoadMoreLoading ? loadMoreTextLoading : loadMoreText;
  };
  const searchChange = (e) => {
    // setStateSearch(e.target.value);
    updateData(e.target.value);
  };

  return (
    <CardListStyle {...props}>
      <div className='controls'>
        <Input
          loading={isLoading}
          className='search'
          placeholder='Search'
          onChange={searchChange} />
      </div>
      <div className='list'>
        {stateCardListItems.map((item, index) => (
          <Card
            key={item.id || index}
            loading={isLoading}
            {...props.cardSettings}
            {...item}
          />
        ))
        }
      </div>
      {showLoadMore ? (
        <div className='more'>
          <Button onClick={clickLoadMore}>{getLoadMoreText()}</Button>

        </div>
      )
        : ''}
    </CardListStyle>);
};

CardList.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  buttonLabel: PropTypes.string,
  cardSettings: PropTypes.object,
  items: PropTypes.array,
  showLoadMore: PropTypes.bool,
  clickLoadMore: PropTypes.func,
  loadMoreText: PropTypes.string,
  loadMoreTextLoading: PropTypes.string,
  isLoadMoreLoading: PropTypes.bool,
  loading: PropTypes.bool,
  grid: PropTypes.string,
};

CardList.defaultProps = {
  grid: 3
};

export default CardList;

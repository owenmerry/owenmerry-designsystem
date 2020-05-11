import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CardListStyle } from './styles';
import {Button, Card, Input, Wrapper, AddItem} from '../../index';

const CardList = props => {
  const CardListItems = props.items;
  const showLoadMore = props.showLoadMore;
  const clickLoadMore = props.clickLoadMore;
  const loadMoreText = props.loadMoreText;
  const loadMoreTextLoading = props.loadMoreTextLoading;
  const isLoadMoreLoading = props.isLoadMoreLoading;
  const isLoading = props.loading;
  const hasAddItem = !!props.addItem;

  // state
  const [stateCardListItems, setStateCardListItems] = useState(CardListItems);
  const [stateSearch, setStateSearch] = useState('');

  useEffect(() => {
    setStateCardListItems(CardListItems);
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
    <Wrapper>
      <CardListStyle {...props}>
        <div className='controls'>
          {hasAddItem && (
            <div className='control'>
              <AddItem loading={isLoading} inline addItem={props.addItem} />
            </div>
          )}
          <div className='control'>
            <Input
              inline
              loading={isLoading}
              className='search'
              placeholder='Search'
              onChange={searchChange}
              focusExpand
            />
          </div>

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
      </CardListStyle>
    </Wrapper>);
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
  addItem: PropTypes.func,
};

CardList.defaultProps = {
  grid: 3
};

export default CardList;

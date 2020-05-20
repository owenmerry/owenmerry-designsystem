import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CardListStyle } from './styles';
import {Button, Card, Input, Wrapper, AddItem, MoreDrop} from '../../index';
// import LazyLoad from 'react-lazy-load';
import LazyLoad from 'react-lazyload';

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
    const searchWord = search.toLowerCase();
    if (searchWord === '') { return setStateCardListItems(props.items); }
    const filteredList = props.items.filter((item) => {
      return (item.title && item.title.toLowerCase().search(searchWord) >= 0) ||
      (item.subtitle && item.subtitle.toLowerCase().search(searchWord) >= 0) ||
      (item.link && item.link.toLowerCase().search(searchWord) >= 0) ||
      false;
    });
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
              <AddItem
                loading={isLoading}
                inline
                addItem={props.addItem}
                inputPlaceholder={props.addItemPlaceholder}
                buttonLabel={props.addItemButton}
              />
            </div>
          )}
          <div className='control'>
            <Input
              inline
              loading={isLoading}
              className='search'
              placeholder='Filter'
              onChange={searchChange}
              focusExpand
            />
          </div>

          {/* <div className='control'>
            <MoreDrop />
          </div> */}

        </div>
        <div className='list'>
          {stateCardListItems.map((item, index) => (
            <LazyLoad key={item.id || index} once placeholder={<Card loading title='loading' subtitle='loading' {...props.cardSettings} />}>
              <Card
                loading={isLoading}
                {...props.cardSettings}
                {...item}
              />
            </LazyLoad>
          ))
          }
        </div>
        {stateCardListItems.length === 0 && (<div className='list-empty'>
          No results found
        </div>)}
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
  addItemPlaceholder: PropTypes.string,
  addItemButton: PropTypes.string,
};

CardList.defaultProps = {
  grid: 3
};

export default CardList;

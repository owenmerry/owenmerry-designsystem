import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CardListStyle } from './styles';
import Card from '../../molecules/Card/index';
import Button from '../../atoms/Button/index';

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

  // functions
  const getLoadMoreText = () => {
    return isLoadMoreLoading ? loadMoreTextLoading : loadMoreText;
  };

  return (
    <CardListStyle>
      <div className='list'>
        {CardListItems.map((item, index) => (
          <div key={index} className='card'>
            <Card
              loading={isLoading}
              {...props.cardSettings}
              {...item}
            />
          </div>
        ))
        }
        <div>
          {showLoadMore ? (
            <Button onClick={clickLoadMore}>{getLoadMoreText()}</Button>
          )
            : ''}
        </div>
      </div>
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
};

CardList.defaultProps = {};

export default CardList;

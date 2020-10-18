import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CardEditStyle } from './styles';
import { PopUp, Input, Button, Card } from '../../index';

const CardEdit = (props) => {
  const dataProp = props.data;
  const formType = props.formType || 'link';

  // state
  const [stateFormData, setStateFormData] = useState(dataProp || {title: '', description: '', url: ''});

  useEffect(() => {
    console.log('props data:', props.data);
    setStateFormData(props.data);
  }, [dataProp]);

  // functions
  const submitForm = () => {
    props.onSubmit(stateFormData);
  };

  return (
    <CardEditStyle>
      <PopUp show={props.show} onPopUpHidden={props.onPopUpHidden}>
        <div className='edit-box'>

          {formType === 'link' && (
            <div className='form'>
              <div className='title'>
                <h2>Edit Link</h2>
              </div>
              <div className='input-box'>
                <div className='label'>Title:</div>
                <div><Input width='100%' value={stateFormData.title} onChange={(e) => setStateFormData({...stateFormData, title: e.target.value})} /></div>
              </div>
              <div className='input-box'>
                <div className='label'>Description:</div>
                <div><Input type='textarea' width='100%' value={stateFormData.description} onChange={(e) => setStateFormData({...stateFormData, description: e.target.value})} /></div>
              </div>
              <div className='input-box'>
                <div className='label'>URL:</div>
                <div><Input width='100%' value={stateFormData.url} onChange={(e) => setStateFormData({...stateFormData, url: e.target.value})} /></div>
              </div>
              <div className='input-box'>
                <div className='label'>Image URL:</div>
                <div><Input width='100%' value={stateFormData.image} onChange={(e) => setStateFormData({...stateFormData, image: e.target.value})} /></div>
              </div>
              <div className='button-box'>
                <Button onClick={submitForm}>Save Details</Button>
              </div>
              <div className='card-live'>
                <h2>Preview:</h2>
                <Card
                  width='300px'
                  image={stateFormData.image}
                  title={stateFormData.title}
                  subtitle={stateFormData.description}
                />
              </div>
            </div>
          )}

          {formType === 'collection' && (
            <div className='form'>
              <div className='title'>
                <h2>Edit Collection</h2>
              </div>
              <div className='input-box'>
                <div className='label'>Name:</div>
                <div><Input width='100%' value={stateFormData.name} onChange={(e) => setStateFormData({...stateFormData, name: e.target.value})} /></div>
              </div>
              <div className='button-box'>
                <Button onClick={submitForm}>Save Details</Button>
              </div>
            </div>
          )}

          {formType === 'addtocollection' && (
            <div className='form'>
              <div className='title'>
                <h2>Add to Collection</h2>
              </div>
              <div className='input-box input-box-list'>
                <div className='label'>Save to..</div>
                {stateFormData.collections && stateFormData.collections.map((item) => (
                  <div onClick={() => props.onSubmit({collectionid: item.id, linkid: stateFormData.linkid})} className='item'>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* <div>
            <Card
              width='300px'
              image={stateFormData.image}
              title={stateFormData.title}
              subtitle={stateFormData.description}
            />
          </div> */}
        </div>
      </PopUp>
    </CardEditStyle>
  );
};

CardEdit.propTypes = {
  show: PropTypes.bool,
  data: PropTypes.object,
  onPopUpHidden: PropTypes.func,
  onSubmit: PropTypes.func,
};

CardEdit.defaultProps = {
};

export default CardEdit;
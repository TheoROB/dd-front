import React, { useState } from 'react';

const ModalForm = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [formData, setFormData] = useState({});

  const openModalHandler = () => {
    setIsShowing(true);
  };

  const closeModalHandler = () => {
    setIsShowing(false);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/api/player/new', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(formData);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      {isShowing ? (
        <div className="modal">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="pseudo"
              placeholder="Name"
              value={formData.pseudo || ''}
              onChange={handleFormChange}
            />
            <input
              type="text"
              name="image"
              placeholder="imageUrl"
              value={formData.image || ''}
              onChange={handleFormChange}
            />
            <input
              type="text"
              name="elo"
              placeholder="elo"
              value={formData.elo || ''}
              onChange={handleFormChange}
            />
            <input
              type="text"
              name="attack"
              placeholder="attack"
              value={formData.attack || ''}
              onChange={handleFormChange}
            />
            <input
              type="text"
              name="creator_id"
              placeholder="creator_id"
              value={formData.creator_id || ''}
              onChange={handleFormChange}
            />
            <input type="submit" value="Submit" />
          </form>
          <button className="close-modal-btn" onClick={closeModalHandler}>
            close
          </button>
        </div>
      ) : (
        <button className="open-modal-btn" onClick={openModalHandler}>
          add a player
        </button>
      )}
    </div>
  );
};

export default ModalForm;
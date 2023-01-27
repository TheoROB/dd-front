import React, { useState } from "react";


const Modal = async (pseudo, attack, shield) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
    setIsOpen(true);
    };

    const hideModal = () => {
    setIsOpen(false);
    };

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [posts, setPosts] = useState([]);

    //Faire en sorte d'importer setPosts

    await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        pseudo: pseudo,
        attack: attack,
        shield: shield,
    }),
    headers: {
       'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((data) => {
       setPosts((posts) => [data, ...posts]);
       setTitle('');
       setBody('');
    })
    .catch((err) => {
       console.log(err.message);
    });

    const handleSubmit = (e) => {
    e.preventDefault();
    Modal(title, body);
};    
    

  return (
    <div>
      <button onClick={showModal}>add student</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea name="" className="form-control" id="" cols="10" rows="8" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button type="submit">Add Post</button>
            </form>
            <button onClick={hideModal}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
};


export default Modal;
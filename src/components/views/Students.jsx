import React, { useState } from "react";
import '../../style/students.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import Modal from "../modal/Modal";

function Students() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setPosts(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);
  
    
  return (
    <>
    <div className="fullPage">
      <div className="menu">
        <h1>Étudiants :</h1>
          <div className="orderStudents">
            <p>Age</p>
            <p>Sexe</p>
            <p>A-Z</p>
          </div>
          <div>
            {/* <FontAwesomeIcon icon={faHome} /> */}
            {/* <Modal /> */}
            <img src="" alt="revenir en arriere" />
          </div>
      </div>
      <div className="studentsList">
              {posts.map((post) => {
              return (
                <div className="cardStudentsList">
                  <div className="cardStudentsImage">
                    <img src="" alt="" />
                  </div>
                  <div className="cardStudentsdescription">
                    <p key={post.id}>{post.title}</p>
                  </div>
                </div>
              );
            })}      
          </div>
    </div>
    </>
  );
}

export default Students;
import React, { useState } from "react";
import '../../style/students.css';
import { useEffect } from "react";
import Modal from "../modal/Modal";

function Students() {
  const [students, setStudents] = useState([]);


async function getUserr (){
  const result = await fetch("http://localhost:8000/api/players")
       const res = await result.json()
       setStudents(res)
}

  useEffect(() => {
    getUserr()
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
            <Modal />
            <img src="" alt="revenir en arriere" />
          </div>
      </div>
      <div className="studentsList">
              {students.map((student) => {
              return (
                <>

                <div className="cardStudentsList">
                  <div className="cardStudentsImage">
                  </div>
                  <div className="cardStudentsdescription">
                    <p className="PlayerNameText" key={student.id}>{student.pseudo}</p>
                  </div>
                </div>
                </>
              );
            })}      
          </div>
    </div>
    </>
  );
}

export default Students;
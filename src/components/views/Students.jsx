import React from "react";
import '../../style/students.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg'

function Students() {
  return (
    <>
    <div className="menu">
      <h1>Étudiants :</h1>
        <div className="orderStudents">
          <p>Age</p>
          <p>Sexe</p>
          <p>A-Z</p>
        </div>
        <div>
          <FontAwesomeIcon icon={solid('plus')} />
          <img src="" alt="croix ajout etudiant" />
          <img src="" alt="revenir en arriere" />
        </div>
    </div>
    </>


  );
}

export default Students;
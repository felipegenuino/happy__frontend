import React from 'react'
 import { FiArrowLeft } from "react-icons/fi";
 import { useHistory } from "react-router-dom";


 import mapMarkerImg from '../assets/Local.svg' 

 import '../styles/Components/Sidebar.css'


export default function(){
    const { goBack } = useHistory();

    return (
        <aside className="app-sidebar">
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
    )
}
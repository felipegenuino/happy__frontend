import React, {useEffect, useState} from 'react'
import { Map, TileLayer, Marker, Popup} from "react-leaflet";

import {Link} from 'react-router-dom'

import api from '../services/api'

import '../styles/pages/orphanagesMap.css'
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import mapMarkerImg from '../assets/Local.svg' 

import Leaflet from 'leaflet'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconAnchor:[29, 68],
    iconSize:[58, 58],
    popupAnchor: [170, 2]
})


interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string
}

function OrphanagesMap(){
    const [orphanages, setOrphanages] = useState<Orphanage[]>([])

    console.log(orphanages);
    useEffect(()=>{
        api.get('orphanages').then(response => {
            
            setOrphanages(response.data)
        })
        }, []);

    return(
       
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :) </p>
                </header>

                <footer>
                    <strong> Rio do Sul</strong>
                    <span>Santa Catarina</span>
                </footer>
            </aside>

            <Map
             center={[-27.5834688,-48.6080512]} 
             zoom={15}
             style={{width: '100%', height: '100%'}}
             >
                {/* <TileLayer
                    url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                /> */}

                <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />



{orphanages.map( (orphanage) => {
 return (

    <Marker 
    position={[orphanage.latitude, orphanage.longitude]}
    icon={mapIcon}
    key={orphanage.id}
>

    <Popup 
        closeButton={false}
        minWidth={240}
        maxWidth={240}
        className="map-popup" >
        <span>{orphanage.name}</span>

        <Link to={`/orphanages/${orphanage.id}`} >
            <FiArrowRight  size={32} color="#fff" />
        </Link>
    </Popup>

</Marker>

 )
})}





            </Map>


            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>

        </div>
    )
}

export default OrphanagesMap
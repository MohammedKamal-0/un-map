"use client"
import React from 'react'
import L, { icon } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer , useMapEvents } from 'react-leaflet'
import MarkerIcon from '../../../../node_modules/leaflet/dist/images/marker-icon.png'
// import MarkerIcon from '../../../../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaBuildingColumns } from "react-icons/fa6";

export default function Map() {

  const [isOpen, setIsOpen] = useState(false);
  var styles
  if (isOpen) {
      styles = 'flex'
  } else {
      styles = 'none'
  }
  



  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}
      >
        <Popup>You are here</Popup>
      </Marker>
    )
  }
  



  return (
    <div>
          <MapContainer style={{
            margin:'0',
            height:'80vh',
            width:'100%'
          }} center={[33.27406820466889, 44.37757743190237]} zoom={16} scrollWheelZoom={false}>
          <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
            {/* <Marker 
            
            icon={
              new L.Icon({
                //icon pines
                iconUrl:MarkerIcon.src,
                iconRetinaUrl:MarkerIcon.src,
                iconSize:[25 , 41],
                iconAnchor:[12.5 , 41],
                popupAnchor:[0 , -41],
                // shadowUrl:MarkerShadow.src,
                shadowSize:[41 , 41],
              })}
              position={[33.27406820466889, 44.37757743190237]}>

                <Popup>
                 <h1 className='text'>hhhhhhhh</h1>
                </Popup>
              </Marker> */}


              {cities.map((city , idx) => (
                <Marker 
                position={[city.lat , city.long]}
                icon={MarkerIcon}
                key={idx}>
                      <Popup>
                        <p>{city.city} , </p>
                      </Popup>
                </Marker>
              ))}


              <LocationMarker />
          </MapContainer>
    </div>

    
  )
}


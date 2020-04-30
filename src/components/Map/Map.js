import React from "react"
// import PropTypes from 'prop-types'
// import leaflet from "leaflet"
// import gql from 'graphql-tag'
// import { Subscription } from 'react-apollo'
// import { Map as LeafletMap, TileLayer } from "react-leaflet"
// import MarkerClusterGroup from "react-leaflet-markercluster"

// import { useTranslation } from 'react-i18next'

// import { useHistory } from 'react-router-dom'
// import 'react-leaflet-markercluster/dist/styles.min.css'
// import 'leaflet/dist/leaflet.css'
// import geoJson from './geoJson.json'
// import variables from "../../styles/App.scss"

// const QUERY = gql`
//   subscription {
//     inventorydb_v_object(
//       where: { latit: { _is_null: false }, longit: { _is_null: false } }
//     ) {
//       title
//       address
//       latit
//       longit
//       statusid
//       deviceid
//     }
//   }
// `

const Map = (props) => {
  // const { t } = useTranslation()

  // const createClusterCustomIcon = (cluster) => {
  // const count = cluster.getChildCount()
  // const AllChildMarkers = cluster.getAllChildMarkers()
  // const status = {}
  // AllChildMarkers.forEach((item, i) => {
  //   switch (item.options.status) {
  //     case 0:
  //       status.alarm = variables.MarkerKlusterAlarm
  //       break
  //     case 1:
  //       status.enable = variables.MarkerKlusterEnable
  //       break
  //     default:
  //       status.disable = variables.MarkerKlusterDisable
  //       break
  //   }
  // })
  // const color = status.alarm || status.enable || status.disable
  // return leaflet.divIcon({
  //   html: `<div style="background-color: ${color}80" class="markerClusterDivThree">
  //             <div style="background-color: ${color}90" class="markerClusterDivFour">
  //               <span class="markerClusterLabel">${count}</span>
  //             </div>
  //           </div>
  // 				`,
  //   className: `markerCluster`,
  // })
  // return leaflet.divIcon({
  //   html: `<div>
  //       <span class="markerClusterLabel">${count}</span>
  //     </div>`,
  //   className: `${options.cluster}`,
  // })
  // return leaflet.icon({
  //   iconUrl: '/icons/svg/carbattery-alarm.svg',
  //   iconSize: [50, 65],
  //   iconAnchor: [16, 37],
  //   popupAnchor: [0, -20],
  // })
  // }

  // let history = useHistory()
  // const MarkerCustom = (props) => {
  //   const HandleClickMarker = (deviceid) => {
  //     history.push(`/monitoring/${deviceid}`)
  //   }
  //   const ListMarker = props.list.map((item) => {
  //     // console.log('item = ', item)
  //     let status = ''
  //     switch (item.statusid) {
  //       case 1:
  //         status = '/icons/svg/carbattery.svg'
  //         break
  //       case 0:
  //         status = '/icons/svg/carbattery-alarm.svg'
  //         break
  //       default:
  //         status = '/icons/svg/carbattery-disable.svg'
  //         break
  //     }
  //     const icon = new leaflet.icon({
  //       iconUrl: status,
  //       iconSize: [50, 65],
  //       iconAnchor: [16, 37],
  //       popupAnchor: [0, -20],
  //     })
  //     return (
  //       <Marker
  //         position={[item.latit, item.longit]}
  //         icon={icon}
  //         status={item.statusid}
  //         key={item.deviceid}>
  //         <Popup>
  //           {item.title}
  //           <button
  //             type="button"
  //             className="btn btn-outline-dark btn-sm"
  //             onClick={() => HandleClickMarker(item.deviceid)}>
  //             {t('monitoring')}
  //           </button>
  //         </Popup>
  //       </Marker>
  //     )
  //   })

  //   // console.log('ListMarker = ', ListMar/ker)
  //   return ListMarker
  //   // return null
  // }

  return (
    // <Subscription subscription={QUERY}>
    //   {({ data, error, loading }) => {
    //     if (error) {
    //       return 'Ошибка'
    //     }
    //     if (loading) {
    //       return 'Загрузка...'
    //     }

    //     return (
    <div className="leaflet-container">
      {/* <LeafletMap
        center={[55.75352, 37.618032]}
        zoom={9}
        maxZoom={20}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}>
        <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MarkerClusterGroup
          iconCreateFunction={createClusterCustomIcon}
          spiderLegPolylineOptions={{
            weight: 1,
            opacity: 25,
          }}>
        </MarkerClusterGroup>
      </LeafletMap> */}
      Map
    </div>
    //     )
    //   }}
    // </Subscription>
  )
}
export default Map

import { useRouter } from 'next/router'
import { MapContainer, TileLayer, Marker, MapConsumer } from 'react-leaflet'
import L from 'leaflet'

import * as S from './styles'

type Place = {
  id: string,
  name: string,
  slug: string,
  location: {
    latitude: number,
    longitude: number
  }
}


export type MapProps = {
  places?: Place[]
}

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
    attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
)
}

const markerIcon = new L.Icon({
  iconUrl: 'img/suitcase.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
})

const Map = ({ places }: MapProps) => {
  const router = useRouter()

   return (
  <S.MapWrapper>
  <MapContainer
    center={[0, 0]}
    zoom={3}
    style={{ height: '100%', width: '100%' }}
    minZoom={3}
    maxBounds={[
      [-180, 180],
      [180, -180]
    ]}
  >
    <MapConsumer>
      {(map) => {
        const width =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
        if (width < 768) {
          map.setMinZoom(2)
        }
       return null
  }}
    </MapConsumer>
    
    <CustomTileLayer />
    
    {places?.map(({ id, slug, name, location}) => {
      const { latitude, longitude } = location
  
      return (
    <Marker 
    key={`place-${id}`} 
    position={[latitude, longitude]} 
    title={name}
    icon={markerIcon}
    eventHandlers={{
      click: () => {
        router.push(`/place/${slug}`)
      }
    }}
    />
      )
    })}
  </MapContainer>
  </S.MapWrapper>
)
}
export default Map

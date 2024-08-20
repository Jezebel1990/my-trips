import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
  <Map 
    places={[
      {
        id: '2',
        name: 'Seoul',
        slug: 'seoul',
        location: {
          latitude: 37.532600,
          longitude: 127.024612
        }
      }
    ]}
  />
  )
}

import React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router';

function ListCard() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if (location) setCurrentPath(location.pathname);
  }, [location]);
  return (
    <div className='my-5 mx-3'>
      <div className='w-full bg-orange-600 text-white text-center rounded-md py-3 text-xl'>
        <b>Our Products</b>
      </div>
      {data.map(function (item) {
        const isActive = currentPath.replace(/\/$/, '') === item.path.replace(/\/$/, '');
        return (
          <div className={`flex justify-between my-4 mx-6 pb-1 border-b-2 border-black hover:text-orange-600 cursor-pointer ${isActive ? 'text-orange-600' : ''}`} key={item.name}>

            <Link to={item.path}> <div><b>{item.name}</b></div></Link>
            <div className='w-5 mt-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={`fill-current ${isActive ? 'text-orange-600' : ''}`}><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg></div>
          </div>)
      })}
    </div>
  )
}

export default ListCard


const data = [
  {
    name: "Hose Fittings",
    path: '/hose-fittings'
  },
  {
    name: "Adaptors",
    path: '/adaptors'
  },
  {
    name: "Hose Assemblies",
    path: "/hose-assemblies"
  },
  {
    name: "Tube Fittings",
    path: "/tube-fitting"
  },
  {
    name: "SAE Flanges",
    path: "/sae-flanges"
  },
  {
    name: "Clamps",
    path: "/clamps"
  },
  {
    name: "Ball Valves & QRC",
    path: "/ball-valves-qrc"
  },
  {
    name: "Spring Guard and Spiral Sleeves",
    path: "/spring-guards"
  },
  {
    name: "Tube Assemblies",
    path: '/tube-assemblies'
  },
  {
    name: "Microbore Hose & Fittings",
    path: "/microbore-hose-fittings"
  },
  {
    name: "Spools",
    path: "/spools"
  },
  {
    name: "Hose Crimping Machine",
    path: "/hose-crimping-machine"
  },
  {
    name: "Accessories",
    path: "/accessories"
  },
  {
    name: "Hydraulic Manifolds",
    path: "/hydraulic-manifolds"
  },
  {
    name: "Tube Clamps",
    path: "/tube-clamps"
  },
]
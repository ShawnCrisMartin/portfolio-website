import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll, Html } from '@react-three/drei'

export default function World(){
const group = useRef()
const scroll = useScroll()

useFrame((state, delta) => {
const s = scroll.offset // 0 -> 1 over the entire scroll area

// move the whole group along z and rotate slightly with scroll
if(group.current){
group.current.position.z = -s * 10 // slide forward as user scrolls down
group.current.rotation.y = s * Math.PI * 0.5
}

// subtle floating
group.current.children.forEach((mesh, i) => {
const floatOffset = Math.sin(state.clock.elapsedTime * (0.5 + i*0.1) + i) * 0.05
mesh.position.y = mesh.userData.baseY + floatOffset
mesh.rotation.x += delta * 0.1 * (i+1)
})
})

return (
<group ref={group}>
{/* Section 1: Hero object */}
<mesh position={[0, 1.6, 0]} userData={{baseY:1.6}}>
<torusKnotGeometry args={[0.9, 0.28, 128, 32]} />
<meshStandardMaterial metalness={0.9} roughness={0.2} color="#7dd3fc" />
</mesh>

{/* Section 2: Project cards as boxes */}
<mesh position={[-2.6, 0.8, -4]} userData={{baseY:0.8}}>
<boxGeometry args={[1.6, 0.9, 0.3]} />
<meshStandardMaterial color="#60a5fa" metalness={0.3} roughness={0.4} />
<Html distanceFactor={8} position={[0, -0.7, 0]}>
<div className="card">Algo Trading Bot</div>
</Html>
</mesh>

<mesh position={[0, 0.6, -4.6]} userData={{baseY:0.6}}>
<boxGeometry args={[1.6, 0.9, 0.3]} />
<meshStandardMaterial color="#34d399" metalness={0.3} roughness={0.4} />
<Html distanceFactor={8} position={[0, -0.7, 0]}>
<div className="card">RIMA — Patient Robot</div>
</Html>
</mesh>

<mesh position={[2.6, 0.8, -5.2]} userData={{baseY:0.8}}>
<boxGeometry args={[1.6, 0.9, 0.3]} />
<meshStandardMaterial color="#fbbf24" metalness={0.3} roughness={0.4} />
<Html distanceFactor={8} position={[0, -0.7, 0]}>
<div className="card">TERRA — Risk Tool</div>
</Html>
</mesh>

{/* Section 3: Floating badges / icons */}
<mesh position={[-1.5, -0.2, -9]} userData={{baseY:-0.2}}>
<sphereGeometry args={[0.45, 32, 32]} />
<meshStandardMaterial color="#f472b6" metalness={0.6} roughness={0.3} />
<Html distanceFactor={10} position={[0, -0.8, 0]}>
<div className="orb">GitHub</div>
</Html>
</mesh>

<mesh position={[1.5, -0.2, -10]} userData={{baseY:-0.2}}>
<sphereGeometry args={[0.45, 32, 32]} />
<meshStandardMaterial color="#a78bfa" metalness={0.6} roughness={0.3} />
<Html distanceFactor={10} position={[0, -0.8, 0]}>
<div className="orb">Contact</div>
</Html>
</mesh>

{/* subtle floor */}
<mesh rotation={[-Math.PI/2, 0, 0]} position={[0, -1.3, -4]} receiveShadow>
<planeGeometry args={[40, 40]} />
<meshStandardMaterial color="#021223" roughness={1} metalness={0} />
</mesh>
</group>
)
}
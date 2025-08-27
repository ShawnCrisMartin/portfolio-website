import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls, useScroll, Float, Html, OrbitControls } from '@react-three/drei'
import World from './World'

export default function Scene(){
return (
// ScrollControls pages: number of "pages" full-height sections the scroll covers
<div className="canvas-container">
<Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
<ambientLight intensity={0.6} />
<directionalLight position={[5, 10, 5]} intensity={1} />

<Suspense fallback={null}>
<ScrollControls pages={3} damping={6}>
<World />
<OrbitControls enablePan={false} />
</ScrollControls>
</Suspense>
</Canvas>
</div>
)
}
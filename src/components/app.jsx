import React from 'react'
import Scene from './components/Scene'
import ScrollSections from './components/ScrollSections'

export default function App(){
return (
<div className="app">
<header className="header">Shawn — 3D Scroll Portfolio</header>
<main className="main">
<Scene />
<ScrollSections />
</main>
<footer className="footer">Built with React Three Fiber</footer>
</div>
)
}

import React from 'react'

// These are the HTML sections that match the ScrollControls pages.
// Keep them outside the canvas; ScrollControls handles the sync.
export default function ScrollSections(){
return (
<div className="sections">
<section className="section hero">
<h1>Hi — I'm Shawn</h1>
<p>I build software that ties finance and robotics together. Scroll to explore.</p>
</section>

<section className="section projects">
<h2>Projects</h2>
<ul>
<li><strong>Algo Trading Bot</strong> — Automation with Alpaca + n8n</li>
<li><strong>RIMA</strong> — Patient simulation robot (ROS + NLP)</li>
<li><strong>TERRA</strong> — Trading risk analysis tool (Python)</li>
</ul>
</section>

<section className="section contact">
<h2>Contact</h2>
<p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
<p>GitHub: <a href="#">github.com/yourname</a></p>
</section>
</div>
)
}
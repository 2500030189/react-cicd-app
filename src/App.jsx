
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const tools = [
    'GitHub', 'Jenkins', 'SonarQube', 'Trivy',
    'Docker', 'Terraform', 'Amazon EKS'
  ]

  return (
    <div className="container">
      <header>
        <span className="badge">MINOR PROJECT 3</span>
        <h1>React CI/CD Pipeline</h1>
        <p>Automated Deployment using Jenkins, Docker & Amazon EKS</p>
      </header>

      <main>
        <h2>End-to-End DevOps Automation</h2>
        <p>
          Build, test, scan and deploy React applications
          through an automated CI/CD pipeline.
        </p>

        <div className="tools">
          {tools.map((tool) => (
            <span className="tool" key={tool}>{tool}</span>
          ))}
        </div>

        <button onClick={() => setCount(count + 1)}>
          Pipeline Demo: {count}
        </button>
      </main>

      <footer>Built for Minor Project 3 | React + DevOps</footer>
    </div>
  )
}

export default App

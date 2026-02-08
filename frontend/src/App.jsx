import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Generator from './pages/Generator'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
    const [currentPage, setCurrentPage] = useState('home')

    // Persisted state for Generator
    const [savedData, setSavedData] = useState(null)
    const [savedInput, setSavedInput] = useState('')
    const [savedCompletedNodes, setSavedCompletedNodes] = useState(new Set())
    const [savedSelectedNode, setSavedSelectedNode] = useState(null)

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home onNavigate={setCurrentPage} />
            case 'generator':
                return (
                    <Generator
                        savedData={savedData}
                        setSavedData={setSavedData}
                        savedInput={savedInput}
                        setSavedInput={setSavedInput}
                        savedCompletedNodes={savedCompletedNodes}
                        setSavedCompletedNodes={setSavedCompletedNodes}
                        savedSelectedNode={savedSelectedNode}
                        setSavedSelectedNode={setSavedSelectedNode}
                    />
                )
            case 'about':
                return <About onNavigate={setCurrentPage} />
            case 'contact':
                return <Contact onNavigate={setCurrentPage} />
            default:
                return <Home onNavigate={setCurrentPage} />
        }
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
            <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
            <main>
                {renderPage()}
            </main>
        </div>
    )
}

export default App

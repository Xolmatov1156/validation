import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(<>
    <App />
    <Toaster
        position="top-center"
        reverseOrder={false}
    />
</>)

import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import App from "./App.tsx";


const root = document.getElementById('root')!;

createRoot(root).render(
    < App/>
)

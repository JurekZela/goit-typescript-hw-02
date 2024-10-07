import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyled-styled';

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
    < GlobalStyle />
    < Toaster />
  </StrictMode>,
)
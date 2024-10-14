import ReactDOM from 'react-dom/client'; // Importa la API createRoot

it('it', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div); // Crea el root
  
  root.unmount(); // Desmonta el componente
});

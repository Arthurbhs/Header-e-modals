import React,{useState}  from 'react';
import logo from '../../Assents/Picsart_24-03-28_11-26-48-109.png'; // Ajuste o caminho se necessário
import ThirdModal from '../HeaderModal';
import {CircleHelp } from 'lucide-react'; // Importando os ícones do Lucide React


const Header = () => {
  const [showThirdModal, setShowThirdModal] = useState(false);

  const handleOpenThirdModal = () => {
    setShowThirdModal(true);
  };

  const handleCloseThirdModal = () => {
    setShowThirdModal(false);
  };

  return (
    <header className="text-white p-4 shadow-md h-[100px]" style={{ backgroundColor: '#ebeff7' }}>
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-24 h-24"/> 
          <button onClick={handleOpenThirdModal} className="ml-4 text-blue-500"><CircleHelp/></button>
        </div>
        <nav className="flex-col md:flex-row md:flex space-x-4">
        </nav>
      </div>
      {showThirdModal && (
        <ThirdModal onClose={handleCloseThirdModal} />
      )}
    </header>
  );
};

export default Header;

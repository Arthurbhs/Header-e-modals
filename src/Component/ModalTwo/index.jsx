import React, { useEffect, useState } from 'react';
import { X, CircleHelp } from 'lucide-react';

const ModalTwo = ({ onClose }) => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const modalTwoShown = localStorage.getItem('modalTwoShown');
    if (modalTwoShown) {
      setShowModal(false);
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
    localStorage.setItem('modalTwoShown', 'true');
    onClose();
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full relative">
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="flex items-center mb-4">
              <CircleHelp size={24} className="mr-2" />
              <h2 className="text-xl font-bold">Como utilizar?</h2>
            </div>
            <p>
              Para utilizar nosso site é simples, basta escolher uma das instituições Fatec em nosso mapa, e então será exibida sua seção de informações, cursos e comentários.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalTwo;

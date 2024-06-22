import React from 'react';
import { X, CircleHelp } from 'lucide-react'; // Importando os ícones do Lucide React

const ThirdModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700"
        >
          <X size={24} /> {/* Ícone para fechar o modal */}
        </button>
        <div className="flex items-center mb-4">
          <CircleHelp size={24} className="mr-2 text-blue-500" /> {/* Ícone de escola ao lado do título */}
          <h2 className="text-xl font-bold text-gray-900">Como usar</h2>
        </div>
        <p className="text-gray-700">Para utilzar nosso site é simples, basta escolher uma das instituiçoes Fatec em nosso mapa, e então exibira sua sessão de informações, de curso e comentarios.</p>
      </div>
    </div>
  );
};

export default ThirdModal;

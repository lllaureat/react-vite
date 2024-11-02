import { useState } from 'react';
import './App.css'

export default function App() {
  const [photo, setPhoto] = useState("/react-vite/photo1.jpg"); 

  const changePhoto = () => {
    setPhoto(photo === "/react-vite/photo1.jpg" ? "/react-vite/photo2.png" : "/react-vite/photo1.jpg"); 
  };
 
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <img 
        src={photo} 
        style={{ width: '200px', height: '200px', borderRadius: '50%' }} 
      />
      <h2><b>Резюме</b></h2>

      <p><b>Контактна інформація: </b>Шевчук Яніслав Юрійович, +380685000497, yanislav.shevchuk@e-u.edu.ua, м.Кривий ріг</p>
      <p><b>Освіта: </b>Студент 3 курсу, спеціальність 121 &lsquo;Інженерія програмного забезпечення&lsquo; Європейського університету</p>
      <p><b>Навички: </b>HTML, CSS</p>
      <p><b>Мови: </b>Українаська, Російська, Англійська</p>
      <p><b>Хобі та інтереси: </b>Більярд, баскетбол, плавання, рибалка</p>
      <button onClick={changePhoto} style={{ padding: '10px', fontSize: '16px' }}>
        Змінити фото
      </button>
    </div>
  );
}
import { useState } from 'react';
import MemberCard from '../components/MemberCard';



const Members = () => {
  
  const [selectedMember, setSelectedMember] = useState(null);

  
  const btsMembers = [
    {
      id: 1, name: "RM", realName: "Kim Namjoon", role: "Líder / Rapero",
      image: "https://placehold.co/400x600/121212/b388ff?text=RM", 
      birthday: "12 de Septiembre, 1994", birthplace: "Ilsan, Corea del Sur",
      trivia: "Tiene un IQ de 148 y aprendió a hablar inglés fluido viendo la serie 'Friends'."
    },
    {
      id: 2, name: "Jin", realName: "Kim Seokjin", role: "Vocalista / Visual",
      image: "https://placehold.co/400x600/121212/b388ff?text=Jin",
      birthday: "4 de Diciembre, 1992", birthplace: "Gwacheon, Corea del Sur",
      trivia: "Es conocido como 'Worldwide Handsome' y tiene talento para cocinar y los videojuegos."
    },
    {
      id: 3, name: "SUGA", realName: "Min Yoongi", role: "Rapero Líder",
      image: "https://placehold.co/400x600/121212/b388ff?text=SUGA",
      birthday: "9 de Marzo, 1993", birthplace: "Daegu, Corea del Sur",
      trivia: "También produce música bajo el alias 'Agust D'. Toca el piano de forma experta."
    },
    {
      id: 4, name: "j-hope", realName: "Jung Hoseok", role: "Bailarín Principal",
      image: "https://placehold.co/400x600/121212/b388ff?text=j-hope",
      birthday: "18 de Febrero, 1994", birthplace: "Gwangju, Corea del Sur",
      trivia: "Era un bailarín callejero muy famoso en su ciudad natal antes de unirse a BigHit."
    },
    {
      id: 5, name: "Jimin", realName: "Park Jimin", role: "Bailarín / Vocalista",
      image: "https://placehold.co/400x600/121212/b388ff?text=Jimin",
      birthday: "13 de Octubre, 1995", birthplace: "Busan, Corea del Sur",
      trivia: "Fue el mejor estudiante en el departamento de danza moderna en la Escuela de Artes de Busan."
    },
    {
      id: 6, name: "V", realName: "Kim Taehyung", role: "Vocalista / Visual",
      image: "https://placehold.co/400x600/121212/b388ff?text=V",
      birthday: "30 de Diciembre, 1995", birthplace: "Daegu, Corea del Sur",
      trivia: "Sabe tocar el saxofón y actuó en el drama histórico coreano 'Hwarang'."
    },
    {
      id: 7, name: "Jung Kook", realName: "Jeon Jungkook", role: "Vocalista Principal",
      image: "https://placehold.co/400x600/121212/b388ff?text=Jung+Kook",
      birthday: "1 de Septiembre, 1997", birthplace: "Busan, Corea del Sur",
      trivia: "Conocido como el 'Golden Maknae' porque es increíblemente bueno en casi todo lo que intenta (cantar, bailar, dibujar, deportes)."
    }
  ];

  return (
    <div style={{ position: 'relative' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>💜 Perfiles de los Miembros</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
        {btsMembers.map((member) => (
          <MemberCard 
            key={member.id} 
            member={member} 
            onCardClick={setSelectedMember}
          />
        ))}
      </div>

      
      {selectedMember && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.8)', 
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 1000 
        }}>
          
          
          <div style={{
            backgroundColor: '#1e1e1e', padding: '30px', borderRadius: '15px',
            maxWidth: '500px', width: '90%', textAlign: 'center', position: 'relative',
            border: '2px solid #b388ff'
          }}>
            
            
            <button 
              onClick={() => setSelectedMember(null)}
              style={{
                position: 'absolute', top: '10px', right: '15px',
                background: 'none', border: 'none', color: 'white',
                fontSize: '24px', cursor: 'pointer'
              }}
            >
              ✖
            </button>

            <h2 style={{ color: '#b388ff', marginTop: 0 }}>{selectedMember.name}</h2>
            <h4 style={{ color: 'white', marginBottom: '20px' }}>{selectedMember.realName}</h4>
            
            <p style={{ color: '#ccc', textAlign: 'left', lineHeight: '1.6' }}>
              🎂 <strong>Cumpleaños:</strong> {selectedMember.birthday} <br/>
              📍 <strong>Lugar de nacimiento:</strong> {selectedMember.birthplace} <br/><br/>
              ✨ <strong>Dato curioso:</strong> {selectedMember.trivia}
            </p>

          </div>
        </div>
      )}

    </div>
  );
};

export default Members;
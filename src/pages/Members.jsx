import { useState } from 'react';
import MemberCard from '../components/MemberCard';



const Members = () => {
  
  const [selectedMember, setSelectedMember] = useState(null);

  
  const btsMembers = [
    {
      id: 1, name: "RM", realName: "Kim Namjoon", role: "Líder / Rapero",
      image: "https://pbs.twimg.com/media/HDULsTXaMAAoSIW?format=jpg&name=large",
      birthday: "12 de Septiembre, 1994", birthplace: "Ilsan, Corea del Sur",
      trivia: "Tiene un IQ de 148 y aprendió a hablar inglés fluido viendo la serie 'Friends'."
    },
    {
      id: 2, name: "Jin", realName: "Kim Seokjin", role: "Vocalista / Visual",
      image: "https://pbs.twimg.com/media/HDULsTAaMAAYoix?format=jpg&name=large",
      birthday: "4 de Diciembre, 1992", birthplace: "Gwacheon, Corea del Sur",
      trivia: "Es conocido como 'Worldwide Handsome' y tiene talento para cocinar y los videojuegos."
    },
    {
      id: 3, name: "SUGA", realName: "Min Yoongi", role: "Rapero Líder",
      image: "https://pbs.twimg.com/media/HDULsS7aMAAKfm9?format=jpg&name=large",
      birthday: "9 de Marzo, 1993", birthplace: "Daegu, Corea del Sur",
      trivia: "También produce música bajo el alias 'Agust D'. Toca el piano de forma experta."
    },
    {
      id: 4, name: "j-hope", realName: "Jung Hoseok", role: "Bailarín Principal",
      image: "https://pbs.twimg.com/media/HDULsHFa4AAOzuz?format=jpg&name=large",
      birthday: "18 de Febrero, 1994", birthplace: "Gwangju, Corea del Sur",
      trivia: "Era un bailarín callejero muy famoso en su ciudad natal antes de unirse a BigHit."
    },
    {
      id: 5, name: "Jimin", realName: "Park Jimin", role: "Bailarín / Vocalista",
      image: "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/650414695_122115189651199929_6926102453360687587_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=eqlCNpUrUEAQ7kNvwHKAkcQ&_nc_oc=AdrXJ5j_2W8UV6vLNMLdx8TLP3GHZb1VyRCxi0f-h50h6FMRclvdM3tHjuLoSGTILUyck3jhmx5fZbz9T6FMfq-f&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=y-s6WaxAR8yu6EyL9HTC8g&_nc_ss=7a3a8&oh=00_Af3UtG_hhWtzAbWRa7H25qc5W97fbZK0dzkxHI9PTn3d0A&oe=69EC64F8",
      birthday: "13 de Octubre, 1995", birthplace: "Busan, Corea del Sur",
      trivia: "Fue el mejor estudiante en el departamento de danza moderna en la Escuela de Artes de Busan."
    },
    {
      id: 6, name: "V", realName: "Kim Taehyung", role: "Vocalista / Visual",
      image: "https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/651379866_122115189705199929_3006432268436433452_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=5OOc6bSGY_0Q7kNvwHQ9b9V&_nc_oc=AdrDCXWQhYMm68L1gmRIgC15KSjbxV0wuN3__gAQSH6yGzdTKHrjoNxH7wWvDsP8p0PsDMrhWGXoSFeVwhSvX9Tv&_nc_zt=23&_nc_ht=scontent-mad1-1.xx&_nc_gid=e3AGvvpXtBk-RT5HGtf6dw&_nc_ss=7a3a8&oh=00_Af0-M1SxMYEMlkWD7JLt57E71HusVKXX5kai4XEc-EchZA&oe=69EC3829",
      birthday: "30 de Diciembre, 1995", birthplace: "Daegu, Corea del Sur",
      trivia: "Sabe tocar el saxofón y actuó en el drama histórico coreano 'Hwarang'."
    },
    {
      id: 7, name: "Jung Kook", realName: "Jeon Jungkook", role: "Vocalista Principal",
      image: "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/650445616_122115189753199929_2889831930492304489_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=pQ96wDwh2vUQ7kNvwHevDXl&_nc_oc=AdpE_uvP-Te31FyjAH_baVTzI7IXyWedAtEXt3fqR1mlmhL87EgYZSEBPxmfqA1TSoxQhm9nMb3RzGeSVx8sV9GG&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=bUzJub-AP3oD3IhKV6f8sA&_nc_ss=7a3a8&oh=00_Af2o0uOh_PBNf0EcZ89KP-fJ-2WjgRfUb5iIpLnG_44iXw&oe=69EC6D46",
      birthday: "1 de Septiembre, 1997", birthplace: "Busan, Corea del Sur",
      trivia: "Conocido como el 'Golden Maknae' porque es increíblemente bueno en casi todo lo que intenta."
    }
  ];

  return (
    <div style={{ position: 'relative' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>💜 Perfil de los Miembros</h2>
      
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
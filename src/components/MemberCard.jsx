const MemberCard = ({ member, onCardClick }) => {
  return (
    <div 
      onClick={() => onCardClick(member)} 
      style={{
        backgroundColor: '#242424',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        textAlign: 'center',
        paddingBottom: '20px',
        cursor: 'pointer',
        transition: 'transform 0.2s' 
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img 
        src={member.image} 
        alt={member.name} 
        style={{ width: '100%', height: '300px', objectFit: 'cover' }} 
      />
      <h3 style={{ margin: '15px 0 5px 0', color: '#b388ff' }}>{member.name}</h3>
      <h5 style={{ margin: '0 0 15px 0', color: 'white' }}>{member.realName}</h5>
      
      <span style={{ backgroundColor: '#b388ff', color: '#121212', padding: '5px 15px', borderRadius: '20px', fontWeight: 'bold', fontSize: '14px' }}>
        {member.role}
      </span>
    </div>
  );
};

export default MemberCard;
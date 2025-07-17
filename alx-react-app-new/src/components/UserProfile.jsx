const UserProfile = (props) => {
   return (
     <div style={{ border: '0.5px solid gray', padding: '10px', margin: '10px'}}>
	   <h2 style={{color: 'gray'}}><span style={{ fontWeight: 'bold'}}>{props.name}</span></h2>
	   <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
	   <p>Bio: <span style={{ fontSize: 'l.275rem'}}>{props.bio}</span></p>
     </div>
   );
 };
export default UserProfile;

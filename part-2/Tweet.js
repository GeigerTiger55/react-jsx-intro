function Tweet({ username, name, date, message }) {
  const tweetStyles = {
      color: purple,
      backgroundColor: yellow,
    
      
  };
  
    return (
    <div style={tweetStyles}>
      <h3> {username} </h3>
      <p> {message} </p>
      By: {name} At: {date}
    </div>
  );
}

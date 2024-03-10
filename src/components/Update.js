// Old credentials
const oldCredentials = {
    username: 'oldUsername',
    password: 'oldPassword'
  };
  
  // Update the credentials
  const newCredentials = {
    username: 'newUsername',
    password: 'newPassword'
  };
  
  // Update the old credentials with the new ones
  oldCredentials.username = newCredentials.username;
  oldCredentials.password = newCredentials.password;
  
  console.log('Updated credentials:', oldCredentials);
  
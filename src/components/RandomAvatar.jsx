const randomAvatar = () => {
    const avatarsContext = require.context("../images", false, /\.png$/);
    const avatars = avatarsContext.keys().map(avatarsContext);
  
    let lastAvatarIndex = null;
  
    const getRandomAvatar = () => {
      let index = Math.floor(Math.random() * avatars.length);
      while (index === lastAvatarIndex) {
        index = Math.floor(Math.random() * avatars.length);
      }
      lastAvatarIndex = index;
      return avatars[index];
    }
  
    return getRandomAvatar();
  }
  
  export default randomAvatar;
  
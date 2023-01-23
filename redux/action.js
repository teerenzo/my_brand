
export const requestUsers = () => async (dispatch) => {
  dispatch({
    type: "GETBLOG",
  });
  try {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    fetch("https://mybrandapi.up.railway.app/api/articles/", requestOptions)
    .then(response => response.json())
    .then(article => {
        console.log(article)
        dispatch({
            type: "GETBLOG",
            blog: article,
          });
       
//   document.getElementById('post-container').innerHTML = dataToDisplay
}).catch(error => console.log('error', error));
  
  } catch (e) {
    dispatch({
      type: "GETBLOG",
      blog: [],
    });
  }
};
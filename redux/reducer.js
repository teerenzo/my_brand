function incrementCounter(blogs) {

    return { 
  
      type: 'GETBLOG', 
  
      blog: blogs 
  
    }
  
  }

const initialState = {
    blog: [],
  }

  function reducer(state = initialState, action) {

    switch(action.type) {
  
      case 'GETBLOG':
  
        return { ...blogs,blog:action.blog };
  
      default:
  
        return state;
  
    }
  
  }
  export default reducer;
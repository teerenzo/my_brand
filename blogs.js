
    const { Provider, connect, useDispatch, useSelector } = ReactRedux;
    const { applyMiddleware, createStore, combineReducers } = Redux;
    const { useContext,useReducer, createContext } = React

     let articles=[{ _id: "63c9602df654bf3424dddd8c", title: "journey at andela here am", content: "dfgh hdjgsfjsad sdnfghjd dshjgfhd jsdhgfhd jkdhfjd dshgf jdshgf jksdhaf jsdhfg jsdhgf jsdhgfa" }]
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
  


//     //types
    const GET_BLOGS = 'GET_BLOGS';

    //reducer
    const initState = {
        blogs: [],
    }


    const selectBlogs = (rootState) => rootState.blogs.blogs;
 
const blogsReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_BLOGS:
            return {
                ...state,
                blogs: action.payload
            }
        default:
            return state; 
    }
} 

const rootReducer = combineReducers({
    blogs: blogsReducer
});

//action
//Get products

const getBlogs = (articles) => ({
    type: GET_BLOGS, 
    payload: articles
});

const store = createStore(
    rootReducer
);








const Blogs = () => {
    const disPatch = useDispatch();
    const {useState,useEffect}=React
    const [articles, setArticles] = useState([])

     
    useEffect(()=>{
        fetch("https://mybrandapi.up.railway.app/api/articles/", requestOptions)
        .then(response => response.json())
        .then(article => {
            disPatch(getBlogs(article));

            //   document.getElementById('post-container').innerHTML = dataToDisplay
        }).catch(error => console.log('error', error));
    },[])
      
    
   


    const blogs = useSelector(selectBlogs);
    console.log(blogs)

    return (
        
        <div class="post-container">

            {
                blogs && blogs.map(element => (
                    <div key={element._id} class="post">
                        <a href="./viewBlog.html" onclick={readMore(`${element._id}`)}>
                            <img src={element.imageUrl.replace('http', 'https')} alt="" srcset="" />
                            <h2>{element.title}</h2>
                            <div class="post-footer">
                                <p>{element.postedDate}</p>
                                <div class="iconPost"></div>
                                <h4>Renzo</h4>
                            </div>
                        </a>
                    </div>
                ))

            }




        </div>

    )
}




ReactDOM.render(<Provider store={store}><Blogs /> </Provider> , document.querySelector('#post-container1'))
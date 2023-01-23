const Button = ReactBootstrap.Button;
const Card = ReactBootstrap.Card;

const { Provider, connect, useDispatch, useSelector } = ReactRedux;
const { applyMiddleware, createStore, combineReducers } = Redux;
const { useContext, useReducer, useEffect, createContext } = React

//types
const GET_PRODUCTS = 'GET_PRODUCTS';

//reducer
const initState = {
    products: [],
}

const selectProducts = (rootState) => rootState.products.products;

const ShoppingCartReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state; 
    }
} 

const rootReducer = combineReducers({
    products: ShoppingCartReducer
});

//action
//Get products

const getProducts = () => ({
    type: GET_PRODUCTS, 
    payload: [{
        category: 'food',
        name: 'noodles',
        size:'large',
        price:100      
    },{
        category: 'food2',
        name: 'noodles',
        size:'small',
        price:50      
    },{
        category: 'food',
        name: 'rice',
        size:'large',
        price:120      
    }]
});

//store
const store = createStore(
    rootReducer
);

//child component
const Content = () => {
    const disPatch = useDispatch();
  disPatch(getProducts());
    return (
        <Menu/>
    )
}

const Menu = () => {
   const products = useSelector(selectProducts);
   return (
        <div className="container menu-container">
            <div className="row">
                {products.map(product => (
                    <MenuItem product = {product}/>
                ))}
            </div>
        </div>
    )
}

const MenuItem = ({product}) => {
    return (
        <div className="col-md-4 col-xs-4">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        <div>Category: {product.category}</div>
                        <div>Size: {product.size}</div>
                        <div>Prize: {product.price}</div>
                    </Card.Text>
                    <Button className="menu-btn" variant="primary" >Check</Button>
                    <Button className="menu-btn" variant="primary" >Add</Button>
                </Card.Body>
            </Card>
        </div>
    )
}


const app = (
    <Provider store={ store }>
    <Content/>
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
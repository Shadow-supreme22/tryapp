import './Product.css'

const Product=(props)=>{
    return(
        <div className="Product">
            <h1>{props.name}</h1>
            <p>{props.price}</p>
        </div>
    );
}
export default Product;
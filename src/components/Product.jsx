import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Product(props){

   
    return(
       
      
         /* <div class="product-item">
       // <img src= {props.productData.image} />
       // <p class = "product-title">{props.productData.title}</p>
       // <p>${props.productData.price}</p>
       // <Button >View Product</Button>
   // </div> */ 
   
   <Card>
      <Card.Img variant="top" src={props.productData.image}/>
       <Card.Body>
        <Card.Title>{props.productData.title}</Card.Title>
        <Card.Text>
        <strong>$</strong> {props.productData.price} <br />
            {props.productData.description}</Card.Text>
        
           <> <Button variant="primary">Buy Now</Button> 
           <Button variant="warning">Add to Cart</Button> </>
      
       </Card.Body>
      </Card>
      
    )
}

export default Product
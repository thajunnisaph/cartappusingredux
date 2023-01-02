import ProductItem from './ProductItem';
import classes from './Products.module.css';
const Dummydata = [{
  id:'p1',title:'chair',price:3000,description:'This is a first product - amazing!'
},{id:'p2',title:'table',price:30000,description:'This is a first table - amazing!'},
{id:'p3',title:'sofa',price:6000,description:'This is a first product - amazing!'},{
  id:'p4',title:'TV',price:9999,description:'This is a first product - amazing!'
}]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummydata.map((pdt) => (
        <ProductItem
          key = {pdt.id}
          id = {pdt.id}
          title= {pdt.title}
          price={pdt.price}
          description={pdt.description}
        />))}
      </ul>
    </section>
  );
};

export default Products;

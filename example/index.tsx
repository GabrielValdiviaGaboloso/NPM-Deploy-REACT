import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard,ProductImage,ProductTitle,ProductButtons } from '../.';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  // img: './Coffee-mug.png'
}
const App = () => {
  return (
    <>
      <ProductCard
        product={product}
       
        initialValue={{
          count:6,
          //maxCount:10,
        }}

      >
        {
          ({reset,isMaxCountReached,maxCount,increaseBy,count})=>(

            <>
            <ProductImage  />
            <ProductTitle />
            <ProductButtons  />
            
            </>
          )
        }
      </ProductCard  >
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

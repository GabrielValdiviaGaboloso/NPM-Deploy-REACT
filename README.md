# GV-Product-Card

Este es un paquete de prueba de despliege de NPM

### Gabriel Valdivia

## Ejemplo


```
import {ProductCard,ProductImage,ProductTitle,ProductButtons} from 'gv-product-card'
```

```
   <ProductCard
        key={product.id}
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
    ```

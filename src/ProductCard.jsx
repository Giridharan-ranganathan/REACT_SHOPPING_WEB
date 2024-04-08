import {useState,useRef} from 'react'
export default function ProductCard(props = {}) {
    const {CurrentCount,setCurrentCount,service = {}} = props;
    
    const textRef = useRef();
    const [BtnValue,setBtnValue] = useState();

        const addToCart = (e) => {

          if (textRef.current.innerText == "Add To Cart") {
            textRef.current.innerText = "Remove"
            setCurrentCount(CurrentCount + 1)
          }else if(textRef.current.innerText == "Remove"){
            textRef.current.innerText = "Add To Cart"
            setCurrentCount(CurrentCount - 1)
          }
    }

    return(
        <div className="card">
      <div className="card-header">
        <img src={service.image} />
      </div>
      <div className="card-body">
        <h3 className="product_name">{service.iteam}</h3>
        <p className="product_description mb-10">
          {service.des}
        </p>
        <p className="product_price mb-10">${service.price}</p>
        {/* <p className='mb-10'>{Count}</p> */}
      </div>
      <div className="addCartBtn text-center">
        {/* <button type="button" class="btn btn-outline-dark">{service.buttonMessage}</button> */}
        <button type="button" ref={textRef} class="btn btn-outline-dark" onClick={addToCart} value={service.buttonMessage}>{service.buttonMessage}</button>
        {/* <button type="button" class="btn btn-outline-dark" onClick={() => setCurrentCount((CurrentCount) => CurrentCount + 1)}>{service.buttonMessage}</button> */}
      </div>
    </div>
    );
}
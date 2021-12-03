import cover from './cover.jpg';
import one from './one.jpeg';
import two from './two.jpg';
import three from './three.jpeg';
import Button from 'react-bootstrap/Button';
import { Component } from "react";

export class ME extends Component {

  constructor() {
    
    super();
    this.state ={
counter : 0 
    };
  }
  increment =()=> {
    this.setState({
      counter: this.state.counter + 1
    })
  }
    decrement =()=> {
      if (this.state.counter>0){
        this.setState({
          counter: this.state.counter -1
        })
      }
    }

    reset=()=>{
      this.setState({
        counter:0
      });
    }
    render(){
      return(
        <div className='bo'>
          <img className='sora' src={cover}/>
          <br/>
          <br/>
          <p className='tex'> OUR WEBSITE OFFERS YOU THE BEST PRODUCTS AT COMPETITIVE PRICES :) 
          </p>
          <br/>
          <br/>

          <div className='pro'>
<img className='fr' src={one}/>
<img className='sec' src={two}/>
<img className='thr' src={three}/>
          </div>
          <div className="pro-num">
            <h1>code :001</h1>
            <h1>code :002</h1>
            <h1>code :003</h1>
          </div>
          <br/>
          <br/>
          <br/>
          <div className='aa'>
            <div className='cho'>
<button className='rr' >NAME NUMBER</button>
<input className='dd'></input>
</div>
            <br/>
          <button className='dec-btn' style={{marginRight:"100px"}} onClick={this.decrement}>-</button>
          <span className='cc'>{this.state.counter} </span>
          <button className='incr-btn' style={{marginRight:'150px'}} onClick={this.increment}>+</button>
          <br/>
          <button className='re-btn' onClick={this.reset}>Reset</button>
          <br/>
          <br/>
          <br/>

          <button className='se'>BAY</button>
          </div>
        </div>
      )
    }
}
export default ME;
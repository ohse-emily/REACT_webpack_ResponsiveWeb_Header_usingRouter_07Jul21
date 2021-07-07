import React, {Component} from 'react'
import '../css/NavToggle.css'

class NavToggle extends Component{
    render(){
        return(
            <>
                <input 
                    type="checkbox" 
                    id="nav-toggle" 
                    className="nav-toggle" 
                    onClick={()=>this.props.toggle()}
                />

                <label htmlFor = "nav-toggle">
                    {/* 클릭하면 nav-toggle id를 가진 아이를 바라봄  for 예약어 
                    그냥 쓸 수가 없어서 htmlFor로 써야함  jsx안에서 알아서 babel이 for로 바꿔서 랜더   */}
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </>
        )
    }
}

export default NavToggle
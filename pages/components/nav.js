import { useState } from "react"


export default function Navbar({setDark}){
    const [dar,setDar]= useState(false)

    const selectMode=(e)=>{
        if(e.target.checked === true){
            setDark(true)
            setDar(true)

        }if(e.target.checked === false){
            setDark(false)
            setDar(false)
        }
    }


    return(
        <div className="cont">
            <div className="title">
            <h2 className="change">Social Media Dashboard</h2>
            <p>Total Followers: 23,004</p>
            </div>

            <div className="darkmode">
                <h4 className="change">{dar === true? 'Light Mode': 'Dark Mode'}</h4>

            <div>
            <label className="switch">
            <input type="checkbox" id="Frontend" name="devType" value={'Frontend'} onClick={(e)=>selectMode(e)}/>
            <span className="slider round"></span>
            </label>
            </div>

            </div>

            <style jsx>{`

            .change{
                color: ${dar === true? 'white' : 'black'};
            }
            .cont{
                display:flex;
                align-items:center;
                justify-content:space-between;

                margin-top:-1.5em;
                width:100%;
                height:16em;
                background-color:${dar === true? '#20222f' : 'white'};
                color:white; 
            }

            .darkmode{
                width: 15em;
                
                margin-right:5em;
                display:flex;
                align-items:center;
                justify-content: space-around;
            }

            .title{
                
                width:25em;
                margin-left: 2em;

             
            }
           
            p{
                color:#7f83a0;
                margin-top:-1em;
            }

            .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${dar === false? '#f0f3fa': 'rgb(67,151,213)'} ;
background: ${dar === false? '#f0f3fa': 'linear-gradient(90deg, rgba(67,151,213,1) 0%, rgba(57,168,194,1) 35%, rgba(60,202,153,1) 100%);'}
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: #343956;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color:  '#f0f3fa';
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
            
            `}</style>
        </div>
    )
}
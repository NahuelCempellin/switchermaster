import { useState } from "react"
import { user } from "../../mockedFiles/mocked"
import { other } from "../../mockedFiles/mocked"
import Navbar from "./nav"
import Image from "next/image"
import instagram from '../../images/icon-instagram.svg'
import facebook from '../../images/icon-facebook.svg'
import twitter from '../../images/icon-twitter.svg'
import youtbue from '../../images/icon-youtube.svg'
import up from '../../images/icon-up.svg'
import down from '../../images/icon-down.svg'




export default function Landing(){

    const[dark,setDark]= useState(false)
    

    
    return(
        <div className="container">
            <Navbar setDark={setDark}/>
            


        <div className="upperCards">
            {
                user.map((el)=> {
                    return(
                        <div className="cards" key={el.followers}>
                            <span id={el.socialMedia ==='twitter'? 'twitter': el.socialMedia ==='facebook'? 'facebook': el.socialMedia === 'instagram'? 'instagram': 'youtuve' }></span>

                            <div className="nose"> 
                            {el.socialMedia === 'youtuve'? <Image src={youtbue}/>: el.socialMedia === 'facebook'? <Image src={facebook}/>:
                            el.socialMedia === 'instagram'? <Image src={instagram}/>:
                             <Image src={twitter}/>}
                            <p className="name">{el.userName}</p>
                            </div>

                            <div className="count">
                            <h1 className="number">{el.followers}</h1>
                            <p className="follow">{el.socialMedia === 'youtuve'?'S U B S C R I B E R S': 'F O L L O W E R S '}</p>

                            <div className="botom">{
                                el.socialMedia ==='youtuve'? 
                                <Image src={down}/>
                                :
                                <Image src={up}/>
                            }
                            <p className="follows" id={el.socialMedia=== 'youtuve' && 'yt'}>{el.newFollow +' ' +'Today'}</p>

                            </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>






        <div className=" bottomCont">
                <div className="subtitle">
                    <h2>Overview - Today</h2>
                </div>


                <div className="otherCards">
                    {
                        other.map((el)=>{
                            return(
                                <div className="cardChiquito" key={el.cant}>

                                    <div className="milo">
                                    <p className="juro">{el.title}</p>
                                    {el.socialMedia === 'youtube'? <Image src={youtbue}/>: el.socialMedia === 'facebook'? <Image src={facebook}/>:
                                    el.socialMedia === 'instagram'? <Image src={instagram}/>:
                                    <Image src={twitter}/>}
                                   
                                    </div>

                                    <div className="lucho">
                                        <h2 className="cantidad">{el.cant}</h2>

                                        <div className="ultimo">
                                        {el.socialMedia ==='youtube'? 
                                        <Image src={down}/>
                                            :
                                        <Image src={up}/>}
                                        <p className={el.socialMedia === 'youtube'? 'yt' : 'noyt'}>{el.percent}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
        </div>

            <style jsx>{`

.cantidad{
    color: ${dark === false? 'black': 'white'};
}            

.juro{
    color:#818bae;
}
.yt{
    color:#b54051;
}

.noyt{
    color: #2e7e75;
}

.ultimo{
   
    width:auto;
    display:flex;
    align-items:center;
    justify-content: space-around;
    
}

.otherCards{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 3em;
    grid-row-gap: 0px;
    margin-left: 3em;
 }   
 
 .milo{
    
    width: 90%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin-top: 1em;
 }


.subtitle{
    margin-left: 2em;

    color: ${dark === true? 'white': 'black'}
}
           

        .lucho{
            
            display:flex;
            align-items: center;
            justify-content: space-between;
            width:90%;
        }    

        .cardChiquito{
            
            width: 16em;
            height: 7em;
            border-radius: 5px;
            background-color: ${dark === false? '#f0f3fa' : '#252b43'} ;
            box-shadow:${dark === false? '10px 10px 5px 0pxrgba(0,0,0,0.75);-webkit-box-shadow: 3px 4px 5px 0px rgb(0 0 0 / 14%);-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);' : 'none'}; 

            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            margin-bottom: 2em;
            
        }

        .cardChiquito:hover{
                background-color:${dark === true? '#333a56' : '#f0f3fa'};
                cursor: pointer;
        }
                   



            .botom{
                
                width:40%;
                display:flex;
                align-items:center;
                justify-content:space-around;
            }
            .count{
                
                margin-top: -8em;
                width:100%;
                height:7em;
                display:flex;
                align-items:center;
                justify-content: space-around;
                flex-direction: column;
            }
            .container{
                background-color: ${dark === false? 'white' : '#1d2029'};
                width:100%;
                min-height: 103.2vh;
                color:white;

            }

            .upperCards{
                display:flex;
                align-items:center;
                justify-content:space-around;
                
               
            }

            .cards{
                margin-top: -3em;
                border-radius: 5px;
                width:16em;
                height: 14em;
                background-color: ${dark === false? '#f0f3fa' : '#252b43'} ;
                color: ${dark === false? 'black' : 'white'};
                display:flex;
                align-items:center;
                justify-content:space-around;
                flex-direction:column;
                    
                box-shadow:${dark === false? '10px 10px 5px 0pxrgba(0,0,0,0.75);-webkit-box-shadow: 3px 4px 5px 0px rgb(0 0 0 / 14%);-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);' : 'none'} 
                

       
            }
            .cards:hover{
                background-color:${dark === true? '#333a56' : '#f0f3fa'};
                cursor:pointer;
               
            }

            #youtuve{
                padding:.1em;
                background-color:#c4052c;
                border-top-left-radius: 40px 40px;
                border-top-right-radius: 40px 40px;
                margin-top: -3.6em;
                width:100%;
                
            }
            #facebook{
                
                padding:.1em;
                background-color:#1b8df5;
                border-top-left-radius: 40px 40px;
                border-top-right-radius: 40px 40px;
                margin-top: -3.6em;
                width:100%;
            }
            #twitter{

                padding:.1em;
                background-color:#1fa1ef;
                border-top-left-radius: 40px 40px;
                border-top-right-radius: 40px 40px;
                margin-top: -3.6em;
                width:100%;
            }
            #instagram{
                padding:.1em;
                background: rgb(247,196,119);
                background: linear-gradient(90deg, rgba(247,196,119,1) 0%, rgba(236,132,130,1) 50%, rgba(161,72,127,1) 100%);
                border-top-left-radius: 40px 40px;
                border-top-right-radius: 40px 40px;
                margin-top: -3.6em;
                width:100%;
                
            }
            .number{
                font-size: 4em;
                
            }

            .name{
                color: #777f9f;
                font-size:.9em;
                
            }

            .nose{
                
                width:62%;
                display:flex;
                align-items:center;
                justify-content:space-around;
                margin-top:-6em;
            }

            .follow{
                color:#5e6585;
                margin-top: -3em;
                
            }
            .follows{
                font-size: .9em;
                margin-top: .5em;
                color:#43a493;
            }
            #yt{
                color:#ac3942;
            }
            
            `}</style>
        </div>
    )
}
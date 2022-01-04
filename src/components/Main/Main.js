import React, { useState, useEffect } from 'react'
import instagramLogo from "../../assets/owner/instagram.png"
import TwitterLogo from "../../assets/owner/twitter.png"
import MoreIcon from "../../assets/owner/more.png"
import "./Main.css"
const Main = ({ selectedPunk, punkListData }) => {
    const [activePunk, setactivePunk] = useState(punkListData[0])
    useEffect(() => {
        setactivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])
    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighlight'>
                    <div className='punkContainer'>
                        {/* <img className='selectedPunk' src={'https://ipfs.io/ipfs/bafybeichmigzcebanai4n7jjj2xsc2uwhe5dnluvngpo5legnezdbariru'} alt="" /> */}
                        <img className='selectedPunk' src={activePunk.image_original_url} alt="" />
                    </div>
                </div>

                <div className='punkDetails' style={{ color: '#fff' }}>
                    <div className='title'>{activePunk.name}
                        <span className='itemNumber'>.#{activePunk.token_id}</span >
                    </div>

                    <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src={'https://www.cnet.com/a/img/9AFTl2qto-rh5zRSeDm3TAmpVy8=/940x0/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png'} alt="" />

                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div>{activePunk.owner.address}</div>
                            <div className='ownerHandle'>@muhammadAli</div>
                        </div>
                        <div className='ownerLink'>
                            <img src={instagramLogo} alt="" />
                        </div>
                        <div className='ownerLink'>
                            <img src={TwitterLogo} alt="" />
                        </div>
                        <div className='ownerLink'>
                            <img src={MoreIcon} alt="" />
                        </div>


                </div>
                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main

import React, {FunctionComponent} from 'react';
import './logo.css'

type LogoProps = {
    imageUrl:string
}

const Logo:FunctionComponent<LogoProps> = (props)=>{
    const { imageUrl } = props
    return(
        <div className='logoBox'>
            <img src={imageUrl} alt=''/>
        </div>
    )
}
export default Logo
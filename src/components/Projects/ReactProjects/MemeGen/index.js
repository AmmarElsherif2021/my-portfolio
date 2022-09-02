import './index.scss'
import Header from "./components/Header"
import Meme from "./components/Meme"

const MemeGen=()=>{
    return(
        <div className='meme-generator container'>
            <Header />
            <Meme />
        </div>
    )
}
export default MemeGen



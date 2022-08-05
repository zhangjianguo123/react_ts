import { useLocation, useParams } from 'react-router-dom'

function Home() {
    let param = useParams()
    const  location = useLocation()
    console.log('打印路由信息', param, location);
    
    return <>
    <div>我是home组件
    </div>
    </>
}

export default Home
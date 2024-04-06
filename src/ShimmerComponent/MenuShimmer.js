
import "./MenuShimmer.css"

const MenuShimmer = ()=>{
    return(<div className="Shimmer-menu-outer">

    {
        Array(10).fill("").map((e)=> ( <div className="Shimmer-menu-card" key={Math.random()*3}>
            <div className="Shimmer-menu-header"></div>
            <div className="Shimmer-menu-body" ></div>
        </div>))
    }
       
    </div>)
}

export default MenuShimmer
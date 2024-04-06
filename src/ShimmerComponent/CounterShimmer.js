import "./CounterShimmer.css"
import CardsShimmer from "./CardsShimmer"
const CounterShimmer = () =>{
    return(<>
        <div className="outer-Shimmer">
            <div className="Shimmer-nav" key={"CSN10"}></div>
            <div className="inner-Shimmer" key={"CSI10"}>
                   { Array(10).fill(" ").map((e)=>{return (<><CardsShimmer key={Math.random() * 8}/></>)})}
            </div>
        </div>
    </>)
}

export default CounterShimmer
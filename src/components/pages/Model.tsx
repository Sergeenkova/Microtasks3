import { useParams } from "react-router-dom"
import { adidasArr } from "./Adidas"

export const Model = () => {
    const params = useParams()

    return (
        <div style={{textAlign: "center"}}>
            <h2>{adidasArr[Number(params.id)].model}</h2>
            <h3>{adidasArr[Number(params.id)].collection}</h3>
            <h4>{adidasArr[Number(params.id)].price}</h4>
        </div>
    )
}
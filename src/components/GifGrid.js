
import { useFetchGifs } from "../hooks/useFetchGif";
import { GifGridItem } from "./GifGridItem";

//4Evk6WvzDVCnAMkCh3WCxTAsCsG3y4uV
export const GifGrid = ({category}) => {
    const {loading,data} = useFetchGifs(category);
  
        return (
        <div className="card-grid animate__bounceInRight">
            <h3>{category}</h3>
            {loading && <p>loading...</p>}
            <ul>
                {data.map(img =>{
                    return <GifGridItem {...img} key={img.id}/>
                })}
            </ul>
        </div>
    )

}
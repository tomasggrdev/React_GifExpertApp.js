import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
    const [categories,setCategory] = useState(['one punch']);
    
    return(
    <>
        <header>
            <h1 className={"animate__animated animate__bounce"}>GifExpertApp</h1>
            <AddCategory setCategory={setCategory} categories={categories}/>
        </header>
        <hr></hr>
        <ul>       
            {
                categories.map((category) => {
                    return <GifGrid 
                        category={category} 
                        key={category}/>
                })
            }
        </ul>
 
    </>
    )
}

export default GifExpertApp
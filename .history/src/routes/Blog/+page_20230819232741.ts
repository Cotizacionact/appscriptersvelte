import type { PageLoad } from "../../../.svelte-kit/types/src/routes/Blog/$types";
import { client } from "../../sanityClient";



export async function load({params}:PageLoad){
    const data = await client.fetch(/* groq */ `*[_type=="BlogPost"]{
        _id,
        name
    }`);
    console.log(data)
    if(data){
        return{
            Posts: await data
        };
    }
    return{
        status:500,
        body: new Error("Test")
    }
    
}
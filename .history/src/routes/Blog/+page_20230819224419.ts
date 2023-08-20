import { client } from "../../sanityClient";

export type Post = {
    name:string
}

export async function load({}){
    const data = await client.fetch(/* groq */ `*[_type=="BlogPost"]`);

    if(data){
        return{
            Posts:data
        };
    }
    return{
        status:500,
        body: new Error("Test")
    }
    
}
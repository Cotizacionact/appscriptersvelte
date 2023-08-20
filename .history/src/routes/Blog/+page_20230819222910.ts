import { client } from "../../sanityClient";

export async function load({}){
    const data = await client.fetch(`*[_type="BlogPost"]`);

    if(data){
        return{
            Posts:data
        };
    }
    return{
        status:500,
        body: new Error("Internal Server Error")
    }
    
}
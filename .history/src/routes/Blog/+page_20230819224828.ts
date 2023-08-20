import { client } from "../../sanityClient";



export async function load({}){
    const data = await client.fetch(/* groq */ `*[_type=="BlogPost"]{
        _id,
        name
    }`);
    console.log(data)
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
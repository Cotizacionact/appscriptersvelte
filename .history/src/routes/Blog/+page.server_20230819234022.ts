import { client } from "../../sanityClient";



export async function load({}){
    const posts = await client.fetch(/* groq */ `*[_type=="BlogPost"]{
        _id,
        name
    }`);

    if(posts){
        return{
            posts: posts
        };
    }
    return{
        status:500,
        body: new Error("Test")
    }
    
}
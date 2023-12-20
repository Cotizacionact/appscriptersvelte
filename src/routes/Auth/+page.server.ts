
import { redirect, fail, type Actions } from "@sveltejs/kit";
import { XataClient } from "../../xata";
import { XATA_API_KEY,XATA_BRANCH } from "$env/static/private";
import bcrypt from "bcrypt";

const xata = new XataClient({
    apiKey:XATA_API_KEY,
    branch:XATA_BRANCH
})


export const actions: Actions = {
    register: async ({request}) =>{
        const body = Object.fromEntries(await request.formData())
        let password = body.password
        let hashedPassword = await bcrypt.hash(password,12);
        let res
        
        try {
            res = await xata.db.Users.create({
                username:body.username as string,
                password: hashedPassword,
                email: body.email as string,
                verified: false,
            })
        }catch (err){
            console.log(err)
            return fail(409, {error:"Email ya esta registrado"})
        }

        throw redirect(303, "/Private")
    },
    login:async ({request})=>{
        const body = Object.fromEntries(await request.formData())
        let res
        let password = body.password
            res = await xata.db.Users.filter({email:body.email as string}).getFirst()
            if(res&&await bcrypt.compare(password as string,res.password)){
                console.log(2)
                throw redirect(303, "/Private")
                
            }else if(res){
                console.log(1)
                return fail(400, {error:"Credenciales incorrectas"})
            }else{
                console.log(2)
                return fail(500, {error:"Error de servidor intentelo mas tarde"})
            }

    }
};
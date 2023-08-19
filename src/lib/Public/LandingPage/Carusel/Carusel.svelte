<script lang="ts">
    import type {Carusel} from "./handlers.ts"
	import CaruselState0 from './CaruselState0.svelte';
    import IoIosArrowBack from 'svelte-icons/io/IoIosArrowBack.svelte'
    import IoIosArrowForward from 'svelte-icons/io/IoIosArrowForward.svelte'
	import CaruselState1 from "./CaruselState1.svelte";
	import CaruselState2 from "./CaruselState2.svelte";

    let state:number = 0
    const  handleCarusel:Carusel = {
        0: CaruselState0,
        1: CaruselState1,
        2: CaruselState2
    }

    function moveCarusel(direction:"next"|"back"){
        let max = Object.keys(handleCarusel).length-1
        if(direction === "next"){
            if(state>=max){
                state = 0
            }else{state = state+1}
        }else if(direction=="back"){
            if(state<=0){
                state = max
            }else{state = state -1}
        }

    }

</script>

<div class="relative h-full">
   <svelte:component this={handleCarusel[state]}></svelte:component>
    <button class="absolute right-0 top-[50%] flex w-10 justify-center bg-black p-0.5 text-white opacity-40 hover:opacity-70" on:click={()=>{moveCarusel("next")}}><IoIosArrowForward/></button>
    <button class="absolute left-0 top-[50%] flex w-10 justify-center bg-black p-0.5 text-white opacity-40 hover:opacity-70" on:click={()=>{moveCarusel("back")}}><IoIosArrowBack></IoIosArrowBack></button>
    <div class="absolute bottom-0 w-full">
        <div class="w-full flex space-x-2 justify-center">
            <div  class={`h-2 ${state ===0 ? "w-6 bg-gray-600":"w-4 bg-gray-300"}`}></div>
            <div  class={`h-2 ${state ===1 ? "w-6 bg-gray-600":"w-4 bg-gray-300"}`}></div>
            <div  class={`h-2 ${state ===2 ? "w-6 bg-gray-600":"w-4 bg-gray-300"}`}></div>
        </div>
    </div>
</div>


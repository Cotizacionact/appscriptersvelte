<script>
    let show = false
    let show2 = false

    function handleShow(){show = !show}
    function handleShow2(){show2=!show2}
</script>

<div class="flex min-h-[60vh] p-2 px-10 flex-wrap">
    <div class="flex w-full md:w-1/3 flex-col items-center">
        <h1 class="text-center text-4xl">Front End</h1>
        {#if show === false} 
            <p class="p-2 text-center">
                This part of development relates to visual aspect of the
                aplication, also known as the User Interface
            </p>
            
        {/if}
        <div class="flex w-3/4 flex-col items-center rounded-xl border-2 bg-[#1d4ed8]  p-2 text-2xl text-white">
            <button class=" p-1 w-4/5 rounded text-center bg-sky-400 hover:bg-sky-600" on:click={handleShow}>See Tools</button>
            {#if show === true} 
                <div class="mt-2 flex w-full flex-col items-center space-y-2 rounded-lg bg-white p-2">
                    <img
                        alt="tailwind logo"
                        src="/Images/tailwindcss-logotype.svg"
                        class="w-2/3 p-2 h-10"
                    />
                     <div class="w-full border-b border-black"></div>
                    <img alt="codux logo" src="/Images/CoduxLogo.png" class="w-1/2" />
                    <div  class="w-full border-b border-black"></div>
                    <img alt="Next Logo" src="/Images/NextLogo.png" class="w-2/5" />
                </div>
            {/if}
        </div>
    </div>
    <div class="w-full md:w-1/3 p-2">
        <h1 class="text-center text-5xl font-bold">Our Tools</h1>
        <h2 class="mt-2 text-center">High quality work require outstanding
            tools. Using state of the art libraries and reliable providers
            we bring value to any costumer.</h2>
        <center>
            <button class="mt-2 rounded bg-green-500 p-2 text-white hover:bg-green-700 w-full">
                Learn More
            </button>
        </center>
    </div>
    <div class="flex w-full md:w-1/3 flex-col items-center">
        <h1 class="text-center text-4xl">Back End</h1>
       {#if show2 === false }
        <p class="text-center">
            This part of development relates to data aspect of the
            aplication, here you will be able to store images, and
            information in databases.
        </p>
        {/if}
        <div class="flex w-3/4 flex-col items-center rounded-xl border-2 bg-[#1d4ed8]  p-2 text-2xl text-white">
            <button class=" p-1 w-4/5 rounded text-center bg-sky-400 hover:bg-sky-600" on:click={handleShow2}>See Tools</button>
            {#if show2 === true}
                <div class="mt-2 flex w-full flex-col items-center space-y-2 rounded-lg bg-white p-2">
                    <img
                        alt="Node Logo"
                        src="/Images/NodeLogo.svg"
                        class="w-2/3 p-2"
                    />
                    <div class="border-b border-black w-full"></div>
                    <img alt="App Script Logo" src="/Images/GoogleAppLogo.png" class="w-2/3" />
                    <div class="w-full border-b border-black"></div>
                    <img alt="Mongo Logo" src="/Images/MongoDB_Logo.svg.png" class="w-3/5" />
                </div>
            {/if}
        </div>
    </div>
</div>
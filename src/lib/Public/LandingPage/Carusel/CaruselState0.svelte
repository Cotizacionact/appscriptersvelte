<script lang="ts">
 export let popupModal:Boolean
</script>
<div class="flex min-h-[10vh] md:min-h-[60vh] p-2 px-10 flex-wrap relative">



    <div class="w-full md:w-1/2 p-2 flex flex-col items-center justify-center">
            <h1 class="text-5xl font-bold text-center leading-normal tracking-widest">
                Create  
                <span class="p-1 bg-[#1C64F2] text-white rounded">
                    tailor made
                </span> 
                websites and web applications.
            </h1>
        <div class="flex items-center">
            <img alt="tailor made websites, tailor made web aplications" src="/Images/tailor takeing measurments.png" class="lg:w-1/4"/>
            <h2 class="mt-2 text-xl  text-justify w-3/4 p-4">
                Innovation has taken over the world. Nowadays, there has been a rush to digitalize almost anything. However, at App Scripter, we've seen this is not always the case. Therefore, we look to provide a clear path to success in this digital environment. Learn how we will guide into establishing your presence online by reading the following article.
            </h2>
        </div>
        <button class="GreenButton mt-5 p-2 px-5 w-full mb-5" on:click={() => (popupModal = true)}>
            Roadmap to success
        </button>

    </div>

    <div class="flex flex-col w-full md:w-1/2 items-center justify-center p-2">
        <form class="border-2 rounded p-2 sm:w-3/4  bg-white border-blue-300 flex flex-col">
            <h2 class="text-3xl font-bold text-center">Interested in a free consultation?</h2>
            <p class="text-justify">If you’re unsure we are the right solution to your digital needs, join us in a free consultation with no string attached.</p>
            <input type="text" placeholder="Full Name*" required class="SimpleInput"/>
            <input type="email" placeholder="Email Adress*" required class="SimpleInput"/>
            <textarea placeholder="Let us know about your situation" required class="SimpleInput"></textarea>
            <button type="submit" class="GreenButton p-2 mx-2" on:click={()=>popupModal=true}>Schedule Consultation</button>
        </form>

        <div class="rounded border-2 border-blue-300 mt-4 bg-white w-full sm:w-3/4 p-4">
            <h3 class="font-bold text-2xl text-center">
                Interested in our services? 
            </h3>
            <p class="text-justify p-2">
                To give you peace of mind, we provide our services through Fiverr. Web development is our specialty, but we got more to offer.
            </p>
            <button class="RedButton p-2 w-full">Check out our services</button>
        </div>
    </div>

</div>
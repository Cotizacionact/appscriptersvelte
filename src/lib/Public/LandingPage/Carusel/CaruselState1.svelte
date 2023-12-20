<script lang="ts">
    export let popupModal:Boolean
    let state = 0
    let _foundation:Boolean = false
    let _standard:Boolean = false
</script>

<section class="flex min-h-[60vh] p-2 px-10 flex-wrap">
    {#if state !==3}
        <article class="w-full md:w-1/2 p-2">
            <h1 class="text-5xl font-bold text-center">No recurring fees</h1>
            <div class="py-10">
                <h2 class="my-2 font-bold text-2xl sm:text-left text-center">Too good to be true?</h2>

                    <p class="mt-2 text-xl lg:leading-relaxed text-justify">
                        Our plans are built to be friendly to your wallet. We charge for our hand labour, not for you being online. Most of our work is hand coded, therefore you won't have to pay subscription fees. You only pay when you require one of our services or assistance. 
                    </p>
            </div>

            <h2 class="my-2 font-bold text-2xl">After the service, we won't ever charge you</h2>
            <p class="text-xl lg:leading-relaxed ">
                Unless you ask us to use a certain paid software to get the job done, we will never charge you again. Our working process is designed to not accrue any charges while in the development period. However, be mindful of how large the project is, as a large period of development time may increase your cost.
            </p>
            <button type="button" class="mt-2 GreenButton p-2" on:click={()=>(popupModal=true)}>
                Learn More
            </button>
        </article>
        <article class="w-full md:w-1/2 p-2">
            <img alt="Scripters diferent development plans" src="/Images/pricing_plans_click_me.png" class="w-1/4 mx-40 hidden md:block">
            <div class="flex justify-center">
                <button class="PlanButtons w-1/4" on:click={()=>state=1}>
                    Basic plan
                </button>
                <button class="PlanButtons w-1/4"  on:click={()=>state=2}>
                    Standard Plan
                </button>
                <button class="PlanButtons w-1/4"  on:click={()=>state=3}>
                    Premium plan
                </button>
            </div>
            
            <div class="border-2 bg-white rounded border-blue-200 p-4 mb-10">
                {#if state == 0}

                <h3 class="ParagraphHeader">Main Service</h3>
                <div class="flex flex-col md:flex-row">
                    <div class="w-full md:w-2/6 border p-2 mr-1">
                        <h2 class="text-4xl md:text-base font-bold text-center">Teir system</h2>
                        <h3 class="text-xl md:text-xs text-justify">
                            Click on the tabs above to learn about our diferent teirs, there is something for everyone!
                        </h3>
                        <img src="/Images/Teir Model.png" alt="App Scripter Teir Model"/>
                        <p class="text-xl md:text-xs text-center mb-2 text">Is App scripter the way for you?</p>
                        <button class="w-full GreenButton text-xl md:text-xs p-2" on:click={()=>state=1}>See our basic plan!</button>
                    </div>
                    <div class="md:w-4/6">
                        <p class="m-2 text-justify" >Although we provide several services, web development is our speciality. Therefore, we’ve packaged for your three proposals. Keep in mind that even though we do provide some digital marketing in our development packages, we are <b>NOT</b> a marketing company. However, we would be glad to collaborate with your marketing team.</p>
                    </div>
                </div>
                <h3 class="ParagraphHeader">Who is this service for</h3>
                <p class="m-2">
                    If you have a design for a website in Figma, or any visual media, we’ll replicate it in HTML for you. If you already have an existing website that needs additional development or starting from scratch. 
                </p>
                <p class="m-2">If you don't have a design, then we will create a proposal. However, keep in mind we are a business focused on developing applications. Web applications differ from websites in many aspects, primarily on scale and functionality. Websites are meant to inform, meanwhile web applications are software solutions on the web such as social media applications, inventory management, logistics, and many others. To learn more about web applications and determine if you're the right client, click the following link</p>
                <button class="GreenButton p-2 w-full" on:click={()=>popupModal=true}>Learn more</button>

                {:else if state == 1}
                    <h3 class="ParagraphHeader" >Basic Plan</h3>            
                    <h4 class="font-bold text-xl">Do you have a design or marketing team or you yourself produce your own markeing?</h4>
                    <p class="text-justify">Perhaps you are the right client. As we said before we <b>don't</b> produce marketing content. We are here to do one job ony, to get you online as cheap as possible. While producing stunning results</p>

                    <div class="rounded border-2 border-red-500 m-2">
                        <div class="bg-red-500 p-2 w-full">
                            <h3  class="text-white text-center font-bold text-2xl">Create a solid foundation, then go all the way!</h3>
                            <p class="text-white text-center">There is no hurry enjoy the process with weekly updates on your site</p>
                        </div>
                        <div class="p-2">
                            
                            <p>
                                We did say there was something for everyone. That what the free consultation is all about. There is no better way to get started than with the basics. Every large project needs a solid base, therefore every package in the development series contains the basic package. 
                            </p>
                            {#if _foundation == true}
                                <h4 class="font-bold text-xl">Scale from basic to standard</h4>
                                <p class="text-justify">
                                    Larger proyect may require longer development periods, we factor that in into our prices. Currently all of our work is hand crafted,but as we begin to gain traction we will colaborate with other entreprenurs to provider higher quality content.
                                </p>
                                <p class="text-justify">
                                    Fortunately, modern tools have allowed developers the opportunity to create a wonderful project by just coding it into existence. Artificial intelligence hasn’t, and most likely won't ever be fully replace old fashion development. Artificial intelligence is here to enhance developers to create more stunning and meaningful websites
                                </p>
                                <div class="flex space-x-2">
                                    <button class="GreenButton p-2 text-white w-2/3" on:click={()=>state=2}>Scale to Standard</button>
                                    <button class="RedButton p-2 text-white w-1/3" on:click={()=>_foundation=false}>See less</button>
                                </div>
                            {:else}
                                <button class="GreenButton p-2 text-white w-full" on:click={()=>_foundation=true}>See more!</button>
                            {/if}
                        </div>
                    </div>
                    <h4 class="font-bold text-xl">We want your trust!</h4>
                    <p class="mb-4 text-justify">
                        Fiverr is a tool that guarantees results, we are willing to put our knowledge to the test to create something great with the backing of a known provider. We are sure that if you truly know what you want to build, I will build it for you. We explain what each of our packages include in Fiverr, so go there now!
                    </p>

                    
                    <a href="https://www.fiverr.com/appscripter/develop-a-web-application">
                        <button class="RedButton p-4 text-2xl w-full">
                            to Fiverr!
                        </button>
                    </a>


                {:else if state ==2}

                    <h3 class="ParagraphHeader">Standard Plan</h3>
                    <div class="flex flex-col lg:flex-row p-2 pb-15">
                        <div class="w-full lg:w-2/3 p-4">
                            <h4 class="font-bold text-xl">So you want to build an application, not a website?</h4>
                            <p class="text-justify">Feel free to pitch your idea, this way we can develop a proposal that will meet your needs. Application can vary widely and can be tricky to implement. We will focus on taking that stress away from you. At this point, you should be sure what your goal is and who is going to be the end user of your software. </p>
                            
                        </div>
                        <div class="w-full flex justify-center lg:w-1/3">
                            <img alt="Transform your idea into an application" src="/Images/transform your idea into an aplication.png"/>
                        </div>
                    </div>
                    <div class="border border-green-500 rounded">
                        <div class="bg-green-500 text-white font-bold text-xl">
                            <h3 class="text-center">
                                Scripter's goal oriented approach
                            </h3>
                        </div>
                        <div class="p-2">
                            <p class="text-justify">By focusing on the solution your software will provide, we make sure that when we deliver our service, you will have a web application that fulfils its purpose. Doesn’t matter where you want to start, the end result will be a robust and functional application.</p>
                            {#if _standard == true}
                                <div>
                                    <div>
                                        <h4 class="font-bold text-xl">Chose where you want to start</h4>
                                        <div class="flex flex-col lg:flex-row">
                                            <div class="w-full lg:w-2/6 flex justify-center">
                                                <img alt="Diferent paths to developing your app" src="/Images/Diferent pathways to acheive success in software.png" class="w-1/2 lg:w-full"/>
                                            </div>
                                            <div class="w-full lg:w-4/6 flex flex-col justify-center">
                                                <h5 class="font-bold text-lg">Start from the functionality</h5>
                                                <p class="text-justify">Do you want to be able to use the application as fast as possible? Perhaps you might be interested in getting started in being able to use the app and don’t mind looks as long as it works. If that is you, we should start by developing the logic for your software</p>
                                                <h5 class="font-bold text-lg">Or the visual interface</h5>
                                                <p class="text-justify">Are you looking to stun your clients and want to start marketing your brand as soon as possible? Perhaps it would be best to start with the visual aspects of your site first. Regardless if you want your design first or the functionality in the end, both paths will lead to the same result.</p>
                                            </div>
                                        </div>
                                        <div class="flex space-x-2">
                                            <button class="w-3/4 BlueButton p-2" on:click={()=>state=3}>Have a large app in mind, scale to our premium plan</button>
                                            <button class="w-1/4 RedButton p-2" on:click={()=>_standard=false}>See less</button>
                                        </div>
                                    </div>
                                </div>
                            {:else}
                                <button class="BlueButton p-2 text-white w-full mt-2" on:click={()=>_standard=true}>See more!</button>
                            {/if}

                        </div>
                        </div>






                {/if}

            </div>

        </article>
    {:else}
        <article class="border-2 w-full rounded bg-white p-4 mb-10 border-blue-500 shadow-md">
            <h3 class="ParagraphHeader text-white bg-blue-500 w-full my-2 p-1 rounded">Premium plan</h3>
            <div class="flex flex-col sm:flex-row justify-between">
                <div class="md:w-1/2 border-r-2 p-2 rounded">
                    <h3 class="text-xl font-bold text-center">Are you looking to build a large application?</h3>
                    <div class="flex flex-col lg:flex-row items-center">
                        <div class="lg:w-1/2">
                            <p class="text-justify">
                                Perhaps you are the right client. As we said before, we <b>don't</b> produce marketing content. We are here to do one job only, to get you online as cheap as possible. While producing stunning results
                            </p>
                            <p class="font-thin text-center bg-gray-200 rounded p-2">
                                Remember, our plans are laid out as building blocks, so by purchasing the premium plan, you're also purchasing everything included in the basic and standard plan! 
                            </p>
                        </div>
                        <img alt="explaining web development teir model" src="/Images/Explanation of the teir model.png" class="lg:w-1/2 p-2 sm:py-10 lg:py-20" />
                    </div>
                    <h3 class="text-xl font-bold text-center">Pay as you go</h3>
                    
                    <p class="">Have a large project and don't want to pay much up front? The web development service is designed to help you scale into the next stage of your application. Feel free to purchase the basic plan, followed by the standard and premium. You’ll receive a discount for the amounts paid for the basic when upgrading to standard, and you’ll be discounted the standard price when updating to premium.</p>
                </div>
                <div class="md:w-1/2 p-2">
                    <h3 class="text-xl font-bold text-center">Are you looking to build a large application?</h3>
                    <p class="text-justify p-2">These applications are usually the sort of apps to have user generated content. Unlike the standard plan that can also have user generated content, this tier provides more powerful tools to give your users the ability to create unique content. However, that's not what we are limited to. Here are some examples of the sort of apps you could expect to have in the premium plan vs. the standard plan</p>
                    <div class="flex border-2 border-sky-400 rounded">
                        <div class="w-1/2 border-r-2 border-sky-400">
                            <h4 class="bg-sky-400 text-center text-white text-xl">Standard Plan</h4>
                            <ol class="p-2 text-center">
                                <li>Basic E-commerce</li>
                                <li>Personal Blog</li>
                                <li>Employee Time-tracking</li>
                                <li>Restaurant Online Orders</li>
                                <li>Data Gathering</li>
                                <li>Statistics and Probability Calculations</li>
                            </ol>
                        </div>
                        <div class="w-1/2">
                            <h4 class="bg-sky-400 text-center text-white text-xl" >Premium plan</h4>
                            <ol class="p-2 text-center">
                                <li>E-commerce with personal blog and product/content upload</li>
                                <li>User Generated Blogs</li>
                                <li>Company productivity app</li>
                                <li>Hotel Management</li>
                                <li>Finance/Accounitng Tracker</li>
                                <li>Statistics and Probability S imulations</li>
                            </ol>
                        </div>
                    </div>
                </div>
                
            </div>
            <h3 class="text-2xl font-bold">Software with advanced mathematics?</h3>
            <p class="text-justify">Our talent covers from software development all the way to artificial intelligence. Throughout the years we’ve cultivated our talent to be proficient in the topics of: linear algebra, vector calculus, probability theory, mathematical statistics, stochastic processes and much more. To learn more about what we can do I suggest you check out the Anahuac Mexico Actuarial Science study plan to see if I have the knowledge required to produce your advanced mathematical software.</p>
            <a href="https://www.anahuac.mx/licenciatura-en-actuaria">
                <button class="BlueButton p-2 w-full">See Actuarial Science Study Plan</button>
            </a>
        </article>
    {/if}
</section>
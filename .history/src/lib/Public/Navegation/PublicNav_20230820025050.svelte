<script>
    let show = false

</script>

<header class="w-full flex items-center justify-between bg-[#1d4ed8] p-5 h-[10vh]">
  <a href="/">
    <img src="/Images/Logo_Original.png" width={60} class="rounded bg-white p-2" alt="Logo"/>
  </a>  
    <div class=" hidden sm:flex w-1/3 justify-evenly text-white items-center">
        <p>Services</p>
        <p>About Us</p>
        <p class="bg-white text-black p-2 rounded-xl">Login</p>
    </div> 
    <div class="space-y-2 border p-2 rounded sm:hidden">
      <div class="w-8 h-1 bg-white"></div>
      <div class="w-8 h-1 bg-white"></div>
      <div class="w-8 h-1 bg-white"></div>
    </div>
    {#if show=== true}
    <div class="absolute w-1/3 bg-white border right-0 bottom-[-100%] rounded p-2">
      <p class="border-b text-center hover:bg-gray-200 hover:rounded">Services</p>
      <p class="border-b text-center hover:bg-gray-200 hover:rounded">About Us</p>
      <a href="./Auth" class="text-center bg-green-500 hover:bg-green-700 rounded font-bold text-white">Login</a>
    </div>
   {/if} 
</header>
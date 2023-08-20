<script lang="ts">
    export let state:number
</script>

<main class="flex justify-center">
    <form action="?/login" method="POST" class="shadow-md flex flex-col md:w-1/4 border rounded my-2 p-2 space-y-2">
        <h1 class="font-bold text-2xl">Sign In</h1>
        <label for="email">Email</label>
        <input class="shadow-sm rounded border p-1"  type="text" name="email" id="email" placeholder="Type your email"/>
        <label for="password">Password</label>
        <input class="shadow-sm rounded border p-1" type="password" name="password" id="password" placeholder="Password"/>
        <button class="shadow-sm hover:shadow-md active:shadow-lg bg-green-500 text-white p-2 rounded hover:bg-green-700 active:bg-green-900">Login</button>
        <p>Don't have an account yet? <a on:click={()=>state=1} class="text-blue-500 underline">Register</a></p> 
    </form>
</main>
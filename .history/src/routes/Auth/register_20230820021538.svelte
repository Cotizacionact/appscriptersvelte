<script lang="ts">

</script>

<main class="flex justify-center">
    <form action="?/register" method="POST" class="shadow-md flex flex-col md:w-1/4 border rounded my-2 p-2 space-y-2">
        <h1>Register</h1>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" placeholder="Type your email"/>
        <label for="password">Password</label>
        <input class="rounded border p-1" type="password" name="password" id="password" placeholder="Password"/>
        <button class="bg-green-500 text-white p-2 rounded hover:bg-green-700 active:bg-green-900">Sign Up</button>
    </form>
</main>
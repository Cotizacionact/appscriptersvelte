<script lang="ts">

</script>

<main class="flex justify-center">
    <form action="?/register" method="POST" class="flex flex-col md:w-1/4 border rounded my-2 space-y-2">
        <h1>Register</h1>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" placeholder="Type your email"/>
        <label for="password">password</label>
        <input type="password" name="password" id="password" placeholder="Password"/>
        <button class="bg-green-500 text-white">Sign Up</button>
    </form>
</main>
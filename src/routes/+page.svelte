<script lang="ts">

    import { SvelteReader } from "svelte-reader"
    import { lists } from "$lib/lists";
    import Book from "$lib/components/Book.svelte";

    let current_book = "";
</script>


<div class="w-full h-full">
    <!-- {#if current_book === ""} -->
        <div class="lg:flex w-full lg:h-screen">
            <div class="flex lg:min-w-max">
                <img class=" lg:min-w-max" src="/cover.png" alt="cover">
            </div>
            <div class="text-black">
                <div class="text-center w-full py-10">Pengantar</div>
                <div class="py-10 px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iure quaerat, deserunt beatae voluptate suscipit sapiente totam neque voluptatem, quae at illo voluptatum harum. Esse ratione dolorum eum tempora delectus!</div>
            </div>
        </div>
        <div class="flex h-screen overflow-x-scroll scrollbar-none">
            {#each lists as book}
                <div class="w-full h-full flex justify-center items-center">
                    <Book title={book.judul} author={book.nama}  func={() => current_book = book.absen}/>
                </div>
            {/each}
            
        </div>
    <!-- {/if} -->
    {#if current_book !== ""}
        <div class="fixed md:hidden h-screen w-screen left-0 top-0 z-40">
            <button class="hover:text-black fixed left-0 top-0 text-zinc-300 transition-colors duration-300 z-50 p-5 bg-white" on:click={() => current_book = ""}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"/></svg>
            </button>
            <SvelteReader
                url="/{current_book}.epub"
                epubOptions={{
                    allowPopups: true, // Adds `allow-popups` to sandbox-attribute
                    allowScriptedContent: true, // Adds `allow-scripts` to sandbox-attribute
                    flow: "scrolled",
                    manager: "continuous",
                }}
            />
        </div>
        <div class="fixed h-screen w-screen left-0 top-0 z-30">
                <button class="hover:text-black fixed text-zinc-300 transition-colors duration-300 left-0 top-0 z-50 p-5 bg-white" on:click={() => current_book = ""}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"/></svg>
                </button>
                <SvelteReader
                    url="/{current_book}.epub"
                    epubOptions={{
                        allowPopups: true, // Adds `allow-popups` to sandbox-attribute
                        allowScriptedContent: true, // Adds `allow-scripts` to sandbox-attribute
                    }}  
                />
        </div>
    {/if}
</div>

<!-- <div class="w-full bg-zinc-100 flex">
    <div class="max-w-screen-sm">
        <div class="p-10"><img class="rounded-lg" src="{Mading}" alt="class mading"></div>
    </div>
    <div>
        <div class="p-10">
            Kelas XI A2 adalah sebuah kelas di sekolah <a href="https://smakstlouis1sby.sch.id/">SMAK St. Louis 1 Surabaya</a>, kita adalah kelas yang fokus pada bidang IPA Teknik dimana kita mempelajari Fisika, Matematika, Ekonomi, dan Advanced English. Kita juga kelas yang SkiBiDi!<br><br>

            Kepanjangan SkiBiDi adalah:<br>
            <div class="px-4">
                <b>Ski</b>llful<br>
                <b>Be</b> one<br>
                <b>Di</b>scipline<br>
            </div>
        </div>
        
    </div>
</div> -->
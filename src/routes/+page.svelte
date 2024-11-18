<script lang="ts">
	import { SvelteReader } from 'svelte-reader';
	import { lists } from '$lib/lists';
	import Book from '$lib/components/Book.svelte';

	let current_book = '';
</script>

<div class="w-full h-full">
	<!-- {#if current_book === ""} -->
	<div class="main-display h-max w-full lg:h-screen">
		<div class="flex lg:min-w-max">
			<img class="lg:min-w-max" src="/cover.png" alt="cover" />
		</div>
		<div class="text-black h-max text-base sm:text-2xl lg:text-base">
			<div class="h-max text-center lg:text-base font-bold p-5 sm:p-10 xl:p-10">Pengantar</div>
			<div class="min-h-max pb-10 lg:text-sm xl:text-base px-10">
				Puji syukur kami panjatkan ke hadirat Tuhan Yang Maha Esa karena berkat rahmat dan
				karunia-Nya, buku fiksi ini dapat terselesaikan. Buku ini adalah kumpulan cerita yang lahir
				dari pengalaman, imajinasi, dan refleksi kami terhadap berbagai hal yang terjadi dalam
				kehidupan sehari-hari. Setiap cerita di dalamnya mencoba mengajak pembaca untuk merenungkan
				makna hidup, cinta, harapan, serta hubungan manusia dengan dirinya sendiri maupun
				lingkungannya.
				<br />
				Penulisan buku ini tentu saja tidak terlepas dari dukungan dan dorongan berbagai pihak. Dengan
				segala kerendahan hati, kami ingin mengucapkan terima kasih kepada:
				<ul class="list-disc pl-10">
					<li>
						Bapak Leonardus Dimas Fernandatama, S.Pd. yang telah dengan sabar memberikan arahan
						serta dukungan teknis dalam proses pembuatan buku ini.
					</li>
					<li>
						Keluarga dan sahabat yang selalu memberikan dukungan moral dan semangat selama proses
						penulisan.
					</li>
					<li>
						Para pembaca yang telah menjadi inspirasi bagi terciptanya cerita-cerita dalam buku ini.
					</li>
				</ul>
				<br />
				Kami menyadari bahwa buku ini mungkin masih memiliki kekurangan. Oleh karena itu, kritik dan
				saran yang membangun sangat kami harapkan demi pengembangan karya-karya kami di masa mendatang.
				Akhir kata, semoga buku ini dapat memberikan hiburan sekaligus makna bagi para pembaca. Kami
				berharap, setiap cerita yang disajikan dapat meninggalkan kesan mendalam dan inspirasi bagi siapa
				saja yang membacanya.
				<br />
				<br />
				<div class="text-right">
					Surabaya, 15 November 2024 <br />
					Penulis, <br />
					Murid-Murid Kelas XI-A2 <br />
				</div>
			</div>
		</div>
	</div>
	<div class="flex h-screen overflow-x-scroll scrollbar-none">
		{#each lists as book}
			<div class="w-full h-full flex justify-center items-center">
				<Book title={book.judul} author={book.nama} func={() => (current_book = book.absen)} />
			</div>
		{/each}
	</div>

	{#if current_book !== ''}
		<div class="fixed md:hidden h-screen w-screen left-0 top-0 z-40">
			<button
				class="hover:text-black fixed left-0 top-0 text-zinc-300 transition-colors duration-300 z-50 p-5 bg-white"
				on:click={() => (current_book = '')}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"
					><path
						fill="currentColor"
						d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"
					/></svg
				>
			</button>
			<SvelteReader
				url="/assets/books/{current_book}.epub"
				epubOptions={{
					allowPopups: true, // Adds `allow-popups` to sandbox-attribute
					allowScriptedContent: true, // Adds `allow-scripts` to sandbox-attribute
					flow: 'scrolled',
					manager: 'continuous'
				}}
			/>
		</div>
		<div class="fixed h-screen w-screen left-0 top-0 z-30">
			<button
				class="hover:text-black fixed text-zinc-300 transition-colors duration-300 left-0 top-0 z-50 p-5 bg-white"
				on:click={() => (current_book = '')}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"
					><path
						fill="currentColor"
						d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"
					/></svg
				>
			</button>
			<SvelteReader
				url="/assets/books/{current_book}.epub"
				epubOptions={{
					allowPopups: true, // Adds `allow-popups` to sandbox-attribute
					allowScriptedContent: true // Adds `allow-scripts` to sandbox-attribute
				}}
			/>
		</div>
	{/if}
</div>

<style lang="scss">
	@media (min-width: 1025px) {
		.main-display {
			@apply flex;
		}
	}
</style>

<script lang="ts">
	export let title: string;
	export let author: string;
	export let func: () => void;
</script>

<button
	on:click={func}
	class="hover:bg-purple-700 bg-purple-950 transition-colors duration-300 group w-full h-full px-3"
	style="-webkit-user-select: none;
   -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;"
>
	<div class="w-full min-w-max h-full text-center p-1 flex flex-col items-center justify-center">
		<div
			class="border-purple-300 text-purple-300 group-hover:border-white group-hover:text-white border-b-2 px-4 font-bold"
		>
			{title}
		</div>
		<div class="text-sm text-purple-300 group-hover:text-purple-200">{author}</div>
	</div>
</button>

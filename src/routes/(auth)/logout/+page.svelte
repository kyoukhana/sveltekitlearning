<script lang="ts">
	import { goto } from '$app/navigation';
	import supabase from '$lib/utils/supabase';
	import { onMount } from 'svelte';
    
	onMount(async () =>  {
		let { error } = await supabase.auth.signOut();

        if(error){
            console.log(error);
        }

        goto('/login'); //Only works client side refer lesson again for more options
	});
</script>

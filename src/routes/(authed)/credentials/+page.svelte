<script>
	const userView = 'http://127.0.0.1:8000/users/userView/';
	import Status from './card/components/Status.svelte';
	import { onMount } from 'svelte';
	import { user } from '../../../stores/auth.js';
	import { authenticated } from '../../../stores/auth.js';

   let message = '';

  user.subscribe((value) => {
    //console.log(value);
  });



	let headersList = {
		'Content-Type': 'application/json',
	};

	/* onMount(async () => {
    try{
      const res = await fetch(userView, {
        method: 'GET',
        headers: headersList,
        credentials: 'include',
      });
      const data = await res.json();
      message = data;
      authenticated.set(true);

    }catch(e){
      message = 'No estas logeado';
      authenticated.set(false);
      console.log(e)
    }
  
  }); */
 
</script>

<svelte:head>
	<title>Bienvenido</title>
</svelte:head>
<div class="container">
	<h1 class="text-center m-1">Bienvenido!</h1>
	<h1 class="text-center m-1 text-uppercase" style="font-weight: bold; color: #7352F2 ">{$user}</h1>
	<Status  />
</div>

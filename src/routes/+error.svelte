<script>
	
  import { page } from '$app/stores';
	
</script>

<div class="e404">
  <div class="huge">{$page.status}</div>
  <div class="big">Pagina no encontrada {$page.error.message}
  
  <li aria-current={$page.url.pathname === '/' ? 'page' : undefined} >
    <a class="nav-link" href="/">Volver atras</a>
  </li>
  </div>
</div>

<style>
	.huge {
		font-size: 12rem;
	}
	.e404 {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}
</style>

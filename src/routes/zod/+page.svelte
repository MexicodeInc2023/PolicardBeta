<script>
  
    import { superForm } from 'sveltekit-superforms/client';
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
  
    export let data
  
    // Client API:
    const { form, errors, constraints } = superForm(data.form);
  </script>
  
  <SuperDebug data={$form} />
  
  <form method="POST" action="?/register">
    <label for="password">Constraseña</label>
    <input
      type="password"
      name="password"
      aria-invalid={$errors.password ? 'true' : undefined}
      bind:value={$form.password}
      {...$constraints.password} />
    {#if $errors.password}<span class="invalid">{$errors.password}</span>{/if}
  
    <label for="email">E-mail</label>
    <input
      type="email"
      name="email"
      aria-invalid={$errors.email ? 'true' : undefined}
      bind:value={$form.email}
      {...$constraints.email} />
    {#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
  
    <div><button>Submit</button></div>
  </form>
  
  <style>
    .invalid {
      color: red;
    }
  </style>
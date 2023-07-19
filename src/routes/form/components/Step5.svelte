<!-- <script>
    import imageDfl from "../../../lib/img/default.jpg"
    let fileInput;
    let files;
    let avatar;

    function getBase64(image) {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
            avatar = e.target.result;
        };
    };

</script>

<div class="container">
    <form>
        <div>
            <h3>Sube una fotografia personal</h3>
            <p>Esto se mostrará en tu credencial</p>
            <form>
            {#if avatar}
            <img id="avatar" src={avatar} alt="avatar" loading="lazy" decoding="async"/>
             {:else}
            <img id="avatar" src={imageDfl} alt="avatar" loading="lazy" decoding="async"/>
        {/if}
        </form>
        </div>
        <input class="hidden" id="file-to-upload" type="file" accept=".png,.jpg" bind:files bind:this={fileInput} on:change={() => getBase64(files[0])}/>
        <button class="upload-btn" on:click={ () => fileInput.click() }>Upload</button>
    </form>
   
</div>

<style>
    .container{display:flex;flex-direction:column;align-items:center;text-align:center}#avatar{border-radius:99999px;height:128px;width:128px;margin-bottom:10px}.hidden{display:none}h3{font-weight:700;font-size:24px;line-height:28px;color:#022959;margin-bottom:9px;text-align:center}p{font-size:16px;line-height:25px;color:#9699aa;margin-bottom:22px;text-align:center}.upload-btn{width:128px;height:32px;background-color:#000;font-family:sans-serif;color:#fff;font-weight:700;border:none}.upload-btn:hover{background-color:#fff;color:#000;outline:#000 solid 2px}
</style> -->

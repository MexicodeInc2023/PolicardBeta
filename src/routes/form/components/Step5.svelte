<script>
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
            <img id="avatar" src={avatar} alt="avatar"/>
             {:else}
            <img id="avatar" src={imageDfl} alt="avatar"/>
        {/if}
        </form>
        </div>
        <input class="hidden" id="file-to-upload" type="file" accept=".png,.jpg" bind:files bind:this={fileInput} on:change={() => getBase64(files[0])}/>
        <button class="upload-btn" on:click={ () => fileInput.click() }>Upload</button>
    </form>
   
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #avatar {
        border-radius: 99999px;
        height: 128px;
        width: 128px;
        margin-bottom: 10px;
    }

    .hidden {
        display: none;
    }

    .upload-btn {
        width: 128px;
        height: 32px;
        background-color: black;
        font-family: sans-serif;
        color: white;
        font-weight: bold;
        border: none;
    }

    .upload-btn:hover {
        background-color: white;
        color: black;
        outline: black solid 2px;
    }
</style>

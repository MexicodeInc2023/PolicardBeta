<script>
    import logo from '../lib/img/favicon.ico';
</script>
<div class="modal fade" id="staticBackdrop1" 
role="dialog" 
data-bs-backdrop="static"
data-bs-keyboard="false"
tabindex="-1"
aria-labelledby="staticBackdropLabel"
aria-hidden="true">
    <div class="modal-dialog">
        <div class="card">
               <div class="card-img">
                   <img class ="img-fluid" src={logo} alt="" loading="lazy" decoding="async">
               </div>
               <div class="card-title">
                   <p>xd!</p>
               </div>
               <div class="card-text">
                   <p>Yay! It's a nice order! <br>It will arrive soon.</p>
               </div>
               <button class="btn">Track delivery</button>
           </div>
    </div>
</div>

<style>

.card{border-radius:3vh;margin:auto;max-width:380px;padding:7vh 6vh;align-items:center;box-shadow:0 6px 20px 0 rgba(0,0,0,0.19)}@media(max-width:767px){.card{width:90vw}}.card-img{padding:20px 0;width:40%}.card-img img{opacity:.7}.card-title{margin-bottom:unset}.card-title p{color:#1de2e2;font-weight:900;font-size:30px;margin-bottom:unset}.card-text p{color:grey;font-size:25px;text-align:center;padding:3vh 0;font-weight:lighter}.btn{width:100%;background-color:#1de2e2;border-color:#1de2e2;border-radius:25px;color:#fff;font-size:20px}.btn:focus{box-shadow:none;outline:none;box-shadow:none;color:#fff;-webkit-box-shadow:none;-webkit-user-select:none;transition:none}.btn:hover{color:#fff}
</style>
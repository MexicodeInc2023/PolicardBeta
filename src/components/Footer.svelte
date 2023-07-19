<script>
	import logo from '../lib/img/policard-wt-sf.png';
	import logoMex from '../lib/img/mexicode.png';
</script>

<div class="blockcode">
	<footer class="shadow" style="background-color: #a4c3b2;">
		<div
			class="d-flex justify-content-between align-items-center mx-auto py-4 flex-wrap"
			style="width: 80%"
		>
			<div href="/#" class="d-flex align-items-center p-0 text-dark">
				<img alt="logo" src={logo} width="30px" loading="lazy" decoding="async" />
				<span class="ml-3 h5 font-weight-bold">Policard</span>
			</div>
			<small
				>&copy; Universidad Politécnica de Tapachula, By Mexic0de. Todos los derechos reservados.</small
			>
			<div class="footer-col">
				<h5>Conocenos:</h5>
				<div class="conocenos">
					<a href="https://mexic0de.page/" target="_blank"><img src={logoMex} width="30px"></a>
				</div>
			</div>
	</footer>
</div>

<style>

.footer-col ul li a{
	font-size: 16px;
	text-transform: capitalize;
	color: #ffffff;
	text-decoration: none;
	font-weight: 300;
	color: #bbbbbb;
	display: block;
	transition: all 0.3s ease;
}
.footer-col ul li a:hover{
	color: #ffffff;
	padding-left: 8px;
}
.footer-col .conocenos a{
	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: rgba(255,255,255,0.2);
	margin:0 10px 10px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: #ffffff;
	transition: all 0.5s ease;
}
.footer-col .conocenos a:hover{
	color: #24262b;
	background-color: #ffffff;
}
	footer{background-color:#e4e4e4;padding:10px 0;width:100%;height:auto;color:#000}@media print{footer{display:none}}
</style>

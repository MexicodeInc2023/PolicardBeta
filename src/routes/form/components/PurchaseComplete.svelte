<script>
import thankYouImg from "../../../lib/img/icon-thank-you.svg"

let showComponent = false
window.setTimeout(()=>{showComponent = true}, 0)
</script>

<article class:show={showComponent}>
	<img src={thankYouImg} alt="">
	<h3>Thank you!</h3>
	<p>Thank you for confirming your data! We hope you have fun using our platform. 
		If you ever need supp	ort, please feel free to email us at mexicode@gmail.com.</p>
		<a href="/login" class="loginn">Iniciar Sesion</a>
</article>

<style>
	
article {
	display: flex;
	flex-direction: column;
	align-items: center;	
	transition: 0.3s;
	position: relative;
	right: -10rem;
	opacity: 0;
}

.show {
	opacity: 1;
	right: 0;
}

img {
	width: 56px;
	height: 56px;
	margin-top: 47px;
	margin-bottom: 24px;
}

h3 {
	font-weight: 700;
	font-size: 24px;
	line-height: 28px;
	text-align: center;
	color: #022959;
	margin-bottom: 9px;
}

p {
	font-weight: 400;
	font-size: 16px;
	line-height: 25px;
	text-align: center;
	color: #9699AA;
	margin-bottom: 47px;
}

@media screen and (min-width: 992px) {
	img {
		width: 80px;
		height: 80px;
		margin-bottom: 32px;
		margin-top: 125px;
	}

	h3 {
		font-size: 32px;
		line-height: 37px;
		margin-bottom: 14px;
	}
}
	.previousButton {
		--primary-color: #645bff;
		--secondary-color: #fff;
		--hover-color: #111;
		--arrow-width: 10px;
		--arrow-stroke: 2px;
		box-sizing: border-box;
		border: 0;
		border-radius: 20px;
		color: var(--secondary-color);
		padding: 1em 1.8em;
		background: var(--primary-color);
		display: flex;
		transition: 0.2s background;
		align-items: center;
		gap: 0.6em;
		font-weight: bold;
	}
	.loginn {
		padding: 1.3em 3em;
		margin-top: 10px;
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 2.5px;
		font-weight: 500;
		color: #000;
		background-color: #fff;
		border: none;
		border-radius: 45px;
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease 0s;
		cursor: pointer;
		outline: none;
	}

	.loginn:hover {
		background-color: #23c483;
		box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
		color: #fff;
		transform: translateY(-7px);
	}

	.loginn:active {
		transform: translateY(-1px);
		}
</style>
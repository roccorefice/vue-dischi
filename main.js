// Istruzioni:
// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali. 
// Servendoci di Vue JS stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
// Chiamata: https://flynn.boolean.careers/exercises/api/array/music
// Layout base:
// https://bitbucket.org/booleancareers/ex-dischi-musicali-layout

let app = new Vue ({
	el:"#app",
	data:{
		albums:[],
	},
	mounted(){
		axios
		.get('https://flynn.boolean.careers/exercises/api/array/music')
		.then(response => {
			dischi  = response.data.response;
			for (let i = 0; i < dischi.length; i++) {
				this.albums.push(dischi[i])	
			}
			console.log(this.albums);			
		});
	}
})

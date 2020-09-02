<template lang="pug">
.container
	div
		Logo
			h1.title subdomains
		.links
			a(
				href="https://nuxtjs.org/"
				target="_blank"
				rel="noopener noreferrer"
				class="button--green"
			) Documentation
			a(
				href="https://github.com/nuxt/nuxt.js"
				target="_blank"
				rel="noopener noreferrer"
				class="button--grey"
			) GitHub
</template>

<script>
import axios from 'axios';
export default {

	async asyncData ({ req, res }) {
    console.log('23', this)
    let nameForApi;
    if (process.server) {
      console.log('1', req.headers.host);
      console.log('2', req.headers.referer);
      //-console.log('3', res);
      console.log('4', process.server);
      //console.log('5', res._events);
      nameForApi = req.headers.host.split('.')[0];
      let dataapp= { host: req.headers.host };
    }
    const { data } = await axios.get('https://api.kunners.com/api/products?')
    return { kunners: data.data, pagination: data.pagination, title: nameForApi, titleWeb:'Mariate'}
	},
	created(){
		this.getKunners();
	},
	methods:{
		getKunners (){
			console.log('kunners', this.kunners)
		}
	}
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

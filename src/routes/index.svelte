<script>
    let greeting = 'hello world'
    import FetchWeather from './components/fetchWeather.svelte'
</script>

<div class="container">
    <h1>{greeting.toUpperCase()}</h1>
    <h1>Kinda weird :/</h1>
    <div class="weather-info">
        <FetchWeather />
    </div>
</div>


<style>
    * {
        font-family: sans-serif;
    }
    .container {
        display: flex;
        justify-content: space-around;
    }
</style>
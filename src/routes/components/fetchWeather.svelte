<script>
    // import Error from ".svelte-kit/dev/components/error.svelte";
import { onMount } from "svelte";

    const apiKey = '4fa609d4f9122723da2dd27ba0fb4227';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=';
    const proxy = 'https://murmuring-ocean-97980.herokuapp.com/';

    // const results = [];

    onMount(async () => {
        const res = await
            fetch(`${proxy}${apiUrl}${apiKey}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(results => {
                let base = results.base;
                console.log(base);
            })
            // let weatherData = await res.json();
            // console.log(weatherData)
            .catch(error => {
                console.log('This is an error:', + error);
            });
            console.log(results);
    });

</script>

<div class="weather-info">
    <h1>Weather Information</h1>
    <ul>
        <li>{base}</li>
    </ul>
</div>

// TODO base is not defined
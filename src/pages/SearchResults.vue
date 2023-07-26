<template>
    <div class="search-results-container">
        <div class="search-results-content">
            <h1 class="search-results-title">Resultados de búsqueda</h1>
            <div class="search-results-grid">
                <div v-for="ticket in tickets" :key="ticket.id" class="search-result-item">
                    <p class="search-result-airline">{{ ticket.airline }}</p>
                    <p class="search-result-price">{{ ticket.price }}</p>
                    <p class="search-result-stops">{{ ticket.stops }} Escala/s</p>
                    <p class="search-result-duration">{{ ticket.duration }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SearchResults',
    data() {
        return {
            tickets: [
                { id: 1, airline: 'Avianca', price: '$290', stops: 1, duration: '2h 30m' },
                { id: 2, airline: 'Spirit', price: '$250', stops: 2, duration: '4h' },
                { id: 3, airline: 'American Airlines', price: '$480', stops: 0, duration: '1h 15m' },
            ]
        };
    }
};
</script>
  
<style>
.search-results-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f2f2f2;
}

.search-results-content {
    max-width: 800px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.search-results-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.search-results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
}

.search-result-item {
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.search-result-airline {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}

.search-result-price {
    font-size: 16px;
    color: #007bff;
    margin-bottom: 10px;
}

.search-result-stops {
    font-size: 14px;
    color: #666666;
    margin-bottom: 5px;
}

.search-result-duration {
    font-size: 14px;
    color: #666666;
}
</style>
  
<template>
    <div class="home">
        <h1 class="title">Búsqueda de Tickets Aéreos</h1>
        <form @submit.prevent="searchFlights" class="search-form">
            <label class="label">Ciudad de Origen:</label>
            <input v-model="origin" type="text" required class="input" />
            <label class="label">Ciudad de Destino:</label>
            <input v-model="destination" type="text" required class="input" />
            <label class="label">Fecha de Salida:</label>
            <input v-model="departureDate" type="date" required class="input" />
            <label class="label">Fecha de Retorno:</label>
            <input v-model="returnDate" type="date" required class="input" />
            <router-link to="/search" class="search-btn">Buscar</router-link>
        </form>
    </div>
</template>
  
<script>
export default {
    name: "Home",
    data() {
        return {
            origin: "",
            destination: "",
            departureDate: "",
            returnDate: "",
        };
    },
    methods: {
        buscarVuelos() {
        },
    },
};
</script>
  
<style scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 1rem;
}

.search-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.label {
    font-weight: bold;
}

.input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 250px;
}

.search-btn {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
}

.search-btn:hover {
    background-color: #0056b3;
}
</style>
  
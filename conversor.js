const apiKey = '98f9f7d90d0c0991f6d06007';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

// Função para buscar taxa de câmbio da API
async function getExchangeRate(daMoeda, paraMoeda) {
    try {
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = await response.json();
       
        if (data.result === "success") {
            return data.conversion_rates[paraMoeda];
        } else {
            throw new Error("Erro ao buscar as taxas de câmbio");
        }
    } catch (error) {
        console.error("Erro:", error);
        return null;
    }
}

const newQuote = document.querySelector("#newQuoteBtn")

const getData = async () => {
    try {
        const res = await axios.get("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
        return res.data.quotes[0]
    } catch (error) {
        return "Failed to Fetch"
    }
};

const sendQuote = async() => {
    const data = await getData();
    document.querySelector("#quote").innerText = data.text
    document.querySelector("#author").innerText = data.author
}


newQuote.addEventListener("click", sendQuote)




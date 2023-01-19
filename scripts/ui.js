
const indexBookContainer = document.querySelector("#index-book-container")
const messageContainer = document.querySelector("#message-container")
const showBookContainer = document.querySelector("#show-book-container")

export const onIndexBooksSucess = (books) => {
    books.forEach(book => {
        const div = document.createElement("div")
        div.innerHTML = `
        <h3>${book.title}</h3>
        <button data-id=${book._id}>Show Genre</button>
        `
        indexBookContainer.appendChild(div)
    })
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
    <h3>You have an Error</h3>
    <p>${error}</p> 
    `
}

export const onCreateBookSucess = () => {
    messageContainer.innerText = "You have created a book"
}

export const onShowBookSucess = (book => {
        //clear the div so only 1 item displays
    while(showBookContainer.firstChild){
        showBookContainer.removeChild(showBookContainer.lastChild)
    }
    const div = document.createElement("div")
    div.innerHTML = `
    <h3>${book.title}</h3>
    <p>${book.author}</p>
    <p>${book.genre}</p>
    `
    showBookContainer.appendChild(div)
})



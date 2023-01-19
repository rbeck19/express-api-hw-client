
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

    <form data-id="${book._id}">
        <input type="text" name="title" value="${book.title}" />
        <input type="text" name="author" value="${book.author}" />
        <input type="text" name="genre" value="${book.genre}" />
        <input type="submit" value="Update Book" />
    </form>
    <button data-id="${book._id}">Delete Book</button>
    `
    showBookContainer.appendChild(div)
})

export const onUpdateBookSucess = () => {
    messageContainer.innerText = "Update was successful"
}

export const onDeleteBookSucess = () => {
    messageContainer.innerText = "Delete was successful"
}

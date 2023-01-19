import { indexBooks, createBook, showBook } from "./api.js"
import { onIndexBooksSucess, onFailure, onCreateBookSucess, onShowBookSucess } from "./ui.js"

const createBookForm = document.querySelector("#create-book-form")
const indexBookContainer = document.querySelector("#index-book-container")

indexBooks()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexBooksSucess(res.books)
    })
    .catch(onFailure)

createBookForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const bookData = {
        book: {
            title: event.target["title"].value,
            author: event.target["author"].value,
            genre: event.target["genre"].value
        }
    } 
    createBook(bookData)
        .then(onCreateBookSucess)
        .catch(onFailure)
})

indexBookContainer.addEventListener("click", (event) => {
    const id = event.target.getAttribute("data-id")
    if(!id) return
    showBook(id)
        .then(res => res.json())
        .then((res) => onShowBookSucess(res.book))
        .catch(onFailure)
})


import { 
    indexBooks, 
    createBook, 
    showBook,
    updateBook,
    deleteBook
} from "./api.js"

import { 
    onIndexBooksSucess, 
    onFailure, 
    onCreateBookSucess, 
    onShowBookSucess,
    onUpdateBookSucess,
    onDeleteBookSucess 
} from "./ui.js"

const createBookForm = document.querySelector("#create-book-form")
const indexBookContainer = document.querySelector("#index-book-container")
const showBookContainer = document.querySelector("#show-book-container")


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

showBookContainer.addEventListener("submit", (event) => {
    event.preventDefault()
    const id = event.target.getAttribute("data-id")
    const bookData = {
        book: {
            title: event.target["title"].value,
            author: event.target["author"].value,
            genre: event.target["genre"].value
        }
    }
    updateBook(bookData, id)
        .then(onUpdateBookSucess)
        .catch(onFailure)
})

showBookContainer.addEventListener("click", (event) => {
    const id = event.target.getAttribute("data-id")
    if(!id) return
    deleteBook(id)
        .then(onDeleteBookSucess)
        .catch(onFailure)
})
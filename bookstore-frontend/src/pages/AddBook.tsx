import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "../types/book";
import { addBooks } from "../services/BookService";

const AddBook=()=>{
    const navigate=useNavigate();
    const[book,setBook]=useState<Book>({
                                title:"",
                                author:"",
                                price:0,
                                description:"",
                                imageUrl:"",
                                stock:0
        }
    )

const handleChange=(e:React.ChangeEvent<HTMLInputElement |HTMLTextAreaElement>)=>{
    setBook({...book,
        [e.target.name]:e.target.name==="price" || e.target.name==="stock"
        ?Number(e.target.value)
        :e.target.value
    })
}
const handleSubmit=async(e:React.SubmitEvent)=>{
            e.preventDefault();
            await addBooks(book)
            navigate("/")
    }
return (
    <form
  onSubmit={handleSubmit}
  className="max-w-2xl mx-auto bg-white shadow rounded-lg p-8 mt-8"
>

  <h2 className="text-3xl font-bold mb-6">
    Add Book
  </h2>

  <input
    name="title"
    value={book.title}
    onChange={handleChange}
    placeholder="Title"
    className="w-full border p-3 rounded mb-4"
  />

  <input
    name="author"
    value={book.author}
    onChange={handleChange}
    placeholder="Author"
    className="w-full border p-3 rounded mb-4"
  />

  <input
    name="price"
    value={book.price}
    onChange={handleChange}
    placeholder="Price"
    className="w-full border p-3 rounded mb-4"
  />

    <input
    name="imageUrl"
    value={book.imageUrl}
    onChange={handleChange}
    placeholder="imageUrl"
    className="w-full border p-3 rounded mb-4"
  />
    <input
    name="stock"
    value={book.stock}
    onChange={handleChange}
    placeholder="Stock"
    className="w-full border p-3 rounded mb-4"
  />

  <textarea
    name="description"
    value={book.description}
    onChange={handleChange}
    className="w-full border p-3 rounded mb-4"
  />

  <button
    type="submit"
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
  >
    Save Book
  </button>

</form>
)
}

export default AddBook;
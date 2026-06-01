import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBooksById,deleteBookByID } from "../services/BookService";
import { Book } from "../types/book";

const BookDetails=()=>{
   const {id} = useParams();
   const navigate=useNavigate();
   const[book,setBook] = useState<Book | null>(null);

   useEffect(()=>{
    fetchBook();
   },[])

   const fetchBook= async()=>{
    try{
        const response=await getBooksById(Number(id))
        setBook(response.data)
    }catch(error){
        console.log("Error: loading book:", error)
   }
};
if(!book){
    return<h2>loading...</h2>
}

const handleDelete=async()=>{
    const confirmDelete=window.confirm("Are you sure you want to delete this book?")
   if(confirmDelete){
    await deleteBookByID(Number(id));
    navigate("/")

   }
}


return (
    <div className="max-w-5xl mx-auto mt-10 bg-white rounded-lg shadow p-8">

  <div className="grid md:grid-cols-2 gap-10">

    <img
      src={book.imageUrl}
      alt={book.title}
      className="rounded-lg"
    />

    <div>

      <h1 className="text-4xl font-bold">
        {book.title}
      </h1>

      <p className="text-gray-500 mt-2">
        {book.author}
      </p>

      <p className="text-3xl text-blue-600 font-bold mt-6">
        ${book.price}
      </p>

      <p className="mt-6">
        {book.description}
      </p>

      <p className="mt-4">
        Stock: {book.stock}
      </p>

      <div className="flex gap-4 mt-8">

        <button
          onClick={()=>navigate(`/edit/${id}`)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Delete
        </button>

      </div>

    </div>

  </div>

</div>

)
}

export default BookDetails;
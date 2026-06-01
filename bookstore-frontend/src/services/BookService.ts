import axios from "axios";
import { Book } from "../types/book";
const API_URL="http://localhost:8080/books"

export const getAllBooks=async()=>{
    return await axios.get<Book[]>(API_URL);
}

export const getBooksById=async(id:number)=>{
    return await axios.get<Book>(`${API_URL}/${id}`);
}

export const addBooks=async(book:Book)=> {
    return await axios.post<Book>(API_URL,book);
}

export const updateBooks=async(id:number,book:Book)=>{
    return await axios.put<Book> (`${API_URL}/${id}`,book);
}

export const deleteBookByID=async(id:number)=>{
    return await axios.delete<Book>(`${API_URL}/${id}`)
}
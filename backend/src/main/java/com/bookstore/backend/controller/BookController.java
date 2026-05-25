package com.bookstore.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookstore.backend.ResourceNotFound.ResourceNotFound;
import com.bookstore.backend.entity.Book;
import com.bookstore.backend.repository.BookRepository;
import com.bookstore.backend.service.BookService;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "http://localhost:3000")

public class BookController {
	@Autowired
	private BookService bookService;
	
	//Add book API
	@PostMapping
	public Book addBook(@RequestBody Book book) {
		System.out.println("Received book: " + book);
		return bookService.addBook(book);
	}
	
	@GetMapping
	public List<Book> getAllBooks(){
		return bookService.getAllBooks();
	}
	
	
	@GetMapping("/{id}")
	public Book getBookByID(@PathVariable Long id){
		return bookService.getBookByID(id);
	}
	
	@PutMapping("/{id}")
	public Book updateBookByID(@PathVariable Long id, @RequestBody Book book) {
		Book bookData=bookService.getBookByID(id);
		bookData.setTitle(book.getTitle());
		bookData.setAuthor(book.getAuthor());
		bookData.setDescription(book.getDescription());
		bookData.setImageUrl(book.getImageUrl());
		bookData.setPrice(book.getPrice());
		bookData.setStock(book.getStock());
		return bookService.addBook(bookData);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteBookById(@PathVariable Long id){
		Book book = bookService.getBookByID(id);
		bookService.deleteBookById(id);
		return ResponseEntity.ok("Success fully "+ book.getTitle() + " deleted");
	}
	
	

}

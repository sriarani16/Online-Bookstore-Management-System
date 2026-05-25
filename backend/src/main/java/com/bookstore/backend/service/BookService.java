package com.bookstore.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.bookstore.backend.ResourceNotFound.ResourceNotFound;
import com.bookstore.backend.entity.Book;
import com.bookstore.backend.repository.BookRepository;

@Service
public class BookService {
	@Autowired
	private BookRepository bookRepository;
	
	public Book addBook(@RequestBody Book book) {
		System.out.println("Received book: " + book);
		return bookRepository.save(book);
	}
	
	public List<Book> getAllBooks(){
		return bookRepository.findAll();
		
	}
	
	public Book getBookByID(@PathVariable Long id){
		return bookRepository.findById(id).orElseThrow(()-> new ResourceNotFound("Book Not Found for id "+id));
	}
	
	public ResponseEntity<?> deleteBookById(@PathVariable Long id){
		Book book = bookRepository.findById(id).orElseThrow(()-> new ResourceNotFound("Book Not Found for id "+id));
		bookRepository.delete(book);
		return ResponseEntity.ok("Success fully "+ book.getTitle() + " deleted");
	}


}

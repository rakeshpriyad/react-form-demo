package com.test.react.restful.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.test.react.restful.entities.Product;
import com.test.react.restful.service.ProductService;

@RestController
public class ProductAPI {
	Logger log = LoggerFactory.getLogger(ProductAPI.class);

	@Autowired
	private ProductService productService;
	@CrossOrigin
	@GetMapping(value ="/products", produces = "application/json")
	public List<Product> findAll() {
		List<Product> products = productService.findAll();
		/*
		 * System.out.println(products); HttpHeaders headers = new HttpHeaders();
		 * headers.add("Content-Type", "application/json"); if (products != null) return
		 * new ResponseEntity<>(products, headers, HttpStatus.OK); else return new
		 * ResponseEntity<>(headers, HttpStatus.OK);
		 */
		return products;
	}

	@CrossOrigin
	@PostMapping(value ="/products", consumes = "application/json")
	public ResponseEntity create(@Valid @RequestBody Product product) {
		return ResponseEntity.ok(productService.save(product));
	}

	@CrossOrigin
	@GetMapping("/products/{id}")
	public ResponseEntity<Product> findById(@PathVariable Long id) {
		Optional<Product> stock = productService.findById(id);
		if (!stock.isPresent()) {
			log.error("Id " + id + " is not existed");
			ResponseEntity.badRequest().build();
		}

		return ResponseEntity.ok(stock.get());
	}

	@CrossOrigin
	@PutMapping("/products/{id}")
	public ResponseEntity<Product> update(@PathVariable Long id, @Valid @RequestBody Product product) {
		if (!productService.findById(id).isPresent()) {
			log.error("Id " + id + " is not existed");
			ResponseEntity.badRequest().build();
		}

		return ResponseEntity.ok(productService.save(product));
	}

	@CrossOrigin
	@DeleteMapping("/products/{id}")
	public ResponseEntity delete(@PathVariable Long id) {
		if (!productService.findById(id).isPresent()) {
			log.error("Id " + id + " is not existed");
			ResponseEntity.badRequest().build();
		}

		productService.deleteById(id);

		return ResponseEntity.ok().build();
	}
}

package com.test.react.restful.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.react.restful.entities.Product;

public interface ProductRespository extends JpaRepository<Product, Long> {
}

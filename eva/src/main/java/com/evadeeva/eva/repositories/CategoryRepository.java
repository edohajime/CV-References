package com.evadeeva.eva.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.evadeeva.eva.models.Category;

public interface CategoryRepository extends JpaRepository<Category, Short> {

}

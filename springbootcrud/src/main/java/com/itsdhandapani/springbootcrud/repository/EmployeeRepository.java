package com.itsdhandapani.springbootcrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.itsdhandapani.springbootcrud.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
// JpaRepository extends PagingAndSortingRepository extends CrudRepository
}

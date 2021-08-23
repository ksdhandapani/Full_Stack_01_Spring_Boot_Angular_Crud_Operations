package com.itsdhandapani.springbootcrud.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import com.itsdhandapani.springbootcrud.exception.ResourceNotFoundException;
import com.itsdhandapani.springbootcrud.model.Employee;
import com.itsdhandapani.springbootcrud.repository.EmployeeRepository;

@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	@GetMapping(path = "/employees")
	public List<Employee> getEmployees(){
		return this.employeeRepository.findAll();
	}
	
	@PostMapping(path = "/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return this.employeeRepository.save(employee);
	}
	
	@GetMapping(path = "/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") Long employeeId){
		Employee employee = this.employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with id : "+employeeId));
		return ResponseEntity.ok(employee);
	}
	
	@PutMapping(path = "/employees/{id}")
	public ResponseEntity<Employee> updateEmployeeById(@PathVariable("id") Long employeeId, @RequestBody Employee employee)
	{
		Employee employeeToBeUpdated = this.employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with id : "+employeeId));
		employeeToBeUpdated.setFirstName(employee.getFirstName());
		employeeToBeUpdated.setLastName(employee.getLastName());
		employeeToBeUpdated.setEmailAddress(employee.getEmailAddress());
		Employee employeeSaved = this.employeeRepository.save(employeeToBeUpdated);
		return ResponseEntity.ok(employeeSaved);
		
	}
	
	@DeleteMapping(path = "/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployeeId(@PathVariable("id") Long employeeId){
		Employee employeeToBeDeleted = this.employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with id : "+employeeId));
		this.employeeRepository.deleteById(employeeToBeDeleted.getId());
		Map<String, Boolean> response = new HashMap<String, Boolean>();
		response.put("deleteStatus",true);
		return ResponseEntity.ok(response);
	}
	
}

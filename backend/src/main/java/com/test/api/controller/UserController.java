package com.test.api.controller;

import com.test.api.model.User;
import com.test.api.repository.UserRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "User API", description = "Api for mananging users ")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Operation(summary = "Create user", responses = @ApiResponse(responseCode = "200", description = "Create a new user"))
    @PostMapping("/")
    public User createUser(@Valid @RequestBody User user) {
        return userRepository.save(user);
    }

    @Operation(summary = "Read all users", responses = @ApiResponse(responseCode = "200", description = "Get a list of all users"))    @GetMapping("/")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Operation(summary = "Read user", responses = @ApiResponse(responseCode = "200", description = "Get a user by ID"))
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(user);
    }

    @Operation(summary = "Update user", responses = @ApiResponse(responseCode = "200", description = "Update a user by ID"))
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long userId, @Valid @RequestBody User userDetails) {
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());
        User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    @Operation(summary = "Delete user", responses = @ApiResponse(responseCode = "200", description = "Delete a user by ID"))
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable(value = "id") Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        userRepository.delete(user);
        return ResponseEntity.ok().build();
    }
}

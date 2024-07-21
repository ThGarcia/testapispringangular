package com.test.api.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition
public class OpenApiConfig {
    @Bean
    public OpenAPI baseOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Spring Boot Swagger Project OpenAPI Test")
                        .version("1.0.0")
                        .description("This is a test API for managing users, built using Spring Boot and documented with Swagger. The API allows you to perform CRUD operations (Create, Read, Update, Delete) on user records."));
    }
}

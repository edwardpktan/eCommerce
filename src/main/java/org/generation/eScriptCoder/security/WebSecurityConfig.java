package org.generation.eScriptCoder.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

    @Autowired
    private DataSource dataSource;


    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth)
            throws Exception {

        //When a user is authenticated, Spring security will create a user section where this user is derived by a sessionID
        //Spring security object will also be responsible to manage the session 9e.g timeout, error)
        //Spring security object will need to end  the user session if logout or time out.
        //In an sql query, we can get the infromation from the front-end through the ? symbol
        //Sending of the information from the front end is through the thymeleaf templating system
        //AuthenticationManagerBuilder provides a usersByUsernameQuery method
        //1) Query to get the username, password , enabled from our users table that matches what the front end send to us(admin)
        //2) userByusernameQuery method will check the password matches and check enabled is 1
        //3) authoritiesByUsernameQuery method - to retrieve the role of this user.
        auth.jdbcAuthentication()
                .passwordEncoder(new BCryptPasswordEncoder())
                .dataSource(dataSource)
                .usersByUsernameQuery("select username, password, enabled from users where username=?")
                .authoritiesByUsernameQuery("select username, role from users where username=?");
    }

    /*
    https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/jdbc.html
    */

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        //After the authentication has been done and user is correct and login.
        //We nee to setup the security policy for the HTTP pages that we are able to access

        http.csrf().disable(); // Same as @crossOrigin for development


        http.formLogin().loginPage("/login");


        http.formLogin().defaultSuccessUrl("/productForm", true);




        http.logout().logoutSuccessUrl("/index");

        //Which are the pages or resources that we allow users to access without login
        //Which are the page or pages that need to have an admin role before we can access.

        http.authorizeHttpRequests((requests) -> requests
                .requestMatchers("/", "/product", "/index","/eScriptCoder/**","/images/**","/js/**","/css/**", "/productimages/**","/login", "/aboutus").permitAll()
                .requestMatchers("/productForm/**").hasRole("ADMIN") // hasRole will take away the ROLE_
        );
        return http.build();
    }


}

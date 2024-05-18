package com.example.mediaScocial.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.mediaScocial.Enity.Post;

public interface postRepository extends JpaRepository<Post, Integer> {

    @Query("SELECT p FROM Post p WHERE p.user.id = :userID")
    List<Post> findByUser(Integer userID);

}

package com.example.mediaScocial.services;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mediaScocial.Enity.Post;
import com.example.mediaScocial.Enity.User;
import com.example.mediaScocial.repositories.postRepository;
import com.example.mediaScocial.repositories.userRepository;

@Service
public class postServiceImplementation implements postService {
    @Autowired
    private postRepository postRepository;

    @Autowired
    private userService userService;

    @Autowired
    private userRepository userRepository;

    @Override
    public Post createNewPost(Post post, Integer userId) throws Exception {
        User user = userService.findUserById(userId);

        Post newPost = new Post();
        newPost.setCaption(post.getCaption());
        newPost.setImage(post.getImage());
        newPost.setVideo(post.getVideo());
        newPost.setCreatedAt(new Date(System.currentTimeMillis()));
        newPost.setUser(user);

        return postRepository.save(newPost);
    }

    @Override
    public Post findPostById(Integer postId) throws Exception {
        Optional<Post> post = postRepository.findById(postId);

        if (post.isPresent()) {
            return post.get();
        } else {
            throw new Exception("Post not found with Id : " + postId);
        }
    }

    @Override
    public String deletePost(Integer postId, Integer userId) throws Exception {
        Optional<Post> post = postRepository.findById(postId);

        if (post.isPresent()) {
            Post postToDelete = post.get();
            if (postToDelete.getUser().getId() == userId) {
                postRepository.deleteById(postId);
                return "Post deleted successfully";
            }
            throw new Exception("You are not authorized to delete this post");
        } else {
            throw new Exception("Post not found with Id : " + postId);
        }
    }

    @Override
    public List<Post> getAllPost() throws Exception {

        List<Post> posts = postRepository.findAll();
        return posts;
    }

    @Override
    public List<Post> findPostByUserId(Integer userId) throws Exception {

        // List<Post> posts = postRepository.findByUser(userId);

        List<Post> posts = getAllPost();

        System.out.println(posts);

        List<Post> userPosts = new ArrayList<>();

        for (Post post : posts) {
            if (post.getUser().getId() == userId) {
                userPosts.add(post);
                System.out.println(post.getUser().getId() + " " + userId);
            }
        }

        if (posts.isEmpty()) {
            throw new Exception("No post found for user with Id : " + userId);
        }

        return userPosts;
    }

    @Override
    public Post savedPost(Integer userId, Integer postId) throws Exception {

        User user = userService.findUserById(userId);
        Post post = findPostById(postId);

        if (user.getSavedPosts().contains(post)) {
            user.getSavedPosts().remove(post);
            userRepository.save(user);
            return post;
        }
        user.getSavedPosts().add(post);
        userRepository.save(user);
        return post;
    }

    @Override
    public Post likePost(Integer postId, Integer userId) throws Exception {
        User user = userService.findUserById(userId);

        Post post = findPostById(postId);

        if (post.getLikes().contains(user)) {
            post.getLikes().remove(user);
        } else {
            post.getLikes().add(user);
        }

        return postRepository.save(post);
    }

    @Override
    public List<Post> getSavedPosts(Integer userId) throws Exception {

        User user = userService.findUserById(userId);

        return user.getSavedPosts();

    }

}

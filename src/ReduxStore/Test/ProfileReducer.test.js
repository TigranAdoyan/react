import React from 'react';
import ReactDOM from 'react-dom';
import ProfileReducer, { AddPost_ActionCreator, DeletePost_ActionCreator } from '../ProfileReducer';
import App from '../../App';


let state = {
    posts: [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
    ],
};

it('posts is added', () => {
    // 1. Test data;
    const action = AddPost_ActionCreator("New Post");
    // 2. Action
    const NewState = ProfileReducer(state, action)
        // 3. Expectation Result
    expect(NewState.posts.length).toBe(3);
});

it('posts is deleted', () => {
    // 1. Test Data
    const action = DeletePost_ActionCreator(1);
    // 2. Action
    const NewState = ProfileReducer(state, action);
    // 3. Expectation Result
    expect(NewState.posts.length).toBe(1);
});

it('posts value is correct', () => {
    // 1. Test data;
    const action = AddPost_ActionCreator('New Post');
    // 2. Action
    const NewState = ProfileReducer(state, action);
    // 3. Expectation Result
    expect(NewState.posts[2].title).toBe("New Post");
});
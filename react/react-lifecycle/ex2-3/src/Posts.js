import "./Posts.css"

import React, { useEffect, useState } from 'react'

import PostApiManager from './postApiManager';
import Post from './Post';

export default function Posts() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const getPosts = async () => {
            const fetchedPosts = await PostApiManager.get10Posts();
            setPosts(fetchedPosts);
        }
        
        getPosts();
    }, [])
    
    const handleWindowResize = () => {
        const postsElement = document.getElementById("posts");

        postsElement.style.color = "red";
        const columnsCount = Math.floor(window.innerWidth / 500);
        console.log(`repeat(${columnsCount}, 1fr)`)
        postsElement.style.gridTemplateColumns = `repeat(${columnsCount}, 1fr)`;
        console.log(window.innerWidth);
    }

    useEffect(() => {
        const handleWindowResizeWithContext = handleWindowResize.bind(this);
        window.addEventListener("resize", handleWindowResizeWithContext);

        return () => {
            window.removeEventListener("resize", handleWindowResizeWithContext);
        }
    }, [])

    return (
        <div id="posts" className="posts">
            {posts.map(post => 
                <Post key={post.id} post={post}/>
            )}
        </div>
    )
}

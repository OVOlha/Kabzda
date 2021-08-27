import React from 'react';
import './MyPosts.module.css';
import mp from './MyPosts.module.css';

const MyPosts = () => {
    return <div className='MyPostsBlock'>
        My posts
        <div className={`${mp.item} '&::before'${mp.item}`}>Post1</div>
        <div className={mp.item}>Post2</div>
        <div className={mp.item}>Post3</div>
        <div className={mp.item}>Post4</div>
        <div className={mp.item}>Other</div>
    </div>
}

export default MyPosts;
import React, { useEffect, useState } from 'react'
import Post from './Post'
import Quorabox from './Quorabox'
import '../css/Feed.css'
import db from '../firebase'

function Feed() {

    const [post, setpost] = useState([])

    useEffect(() => {
        db.collection('questions').orderBy('timeStamp','desc').onSnapshot((snapshot) => setpost(
       
          snapshot.docs.map((doc) => ({
            id: doc.id,
            question: doc.data(),
          }))
        )
      );
  }, []);

    return (
        <div className="feed">
            <Quorabox/>
            {post.map(({ id, question }) => (
        <Post
          key={id}
          Id={id}
          question={question.question}
          timestamp={question.timeStamp}
          q_user={question.user}
        />
      ))}

    

        </div>
    )
}

export default Feed;

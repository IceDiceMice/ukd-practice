import React, {useState} from 'react'
import Main from './main'
const Posts = () => {
    const [text, setFirstName] = useState('');
    const [posts, setPosts] = useState([{
        id:1,
        text:'newPost1'},
        {
            id:2,
            text:'newPost2'},
            {
                id:3,
                text:'newPost3'}
            ]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
        const post = { id: new Date().getTime().toString(), text};
        console.log(post);
        setPosts((posts) => {
          return [ post, ...posts];
        });
        setFirstName('');
    };
    const removeItem = (id) => {
        let newPost = posts.filter((post) => post.id !== id);
        setPosts(newPost);
      };
    return (
        
      <>
      <Main />
        <article>
          <form className='form' onSubmit={handleSubmit}>
            <div className='form-control'>
              <textarea
                type='text'
                id='text'
                name='text'
                value={text}
                onChange={(e) => setFirstName(e.target.value)}
                required>
                </textarea>
            </div>
       
            <button type='submit'>Submit</button>
          </form>
          {posts.map((post) => {
            const { id, text} = post;
            return (
              <div className='item' key={id}>
         
                <p>{text}</p>
                <button onClick={() => removeItem(id)}>remove</button>
              </div>
            );
          })}
        </article>
      </>
    );
  };
  
  export default Posts;
  
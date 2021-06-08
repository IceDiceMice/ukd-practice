import React, {useState} from 'react'

const Posts = () => {
    const [firstName, setFirstName] = useState('');
    const [posts, setPosts] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
        const post = { id: new Date().getTime().toString(), firstName};
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
        <article>
          <form className='form' onSubmit={handleSubmit}>
            <div className='form-control'>
              <textarea
                type='text'
                id='firstName'
                name='firstName'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}>
                </textarea>
            </div>
       
            <button type='submit'>Submit</button>
          </form>
          {posts.map((post) => {
            const { id, firstName} = post;
            return (
              <div className='item' key={id}>
                <p>{id}</p>
                <p>{firstName}</p>
                <button onClick={() => removeItem(id)}>remove</button>
              </div>
            );
          })}
        </article>
      </>
    );
  };
  
  export default Posts;
  
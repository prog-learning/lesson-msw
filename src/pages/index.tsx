import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const getBooks = async () => {
  const res = await axios.get('/books');
  // return await res.json();
  return res.data;
};

const postBooks = async () => {
  const res = await axios.post('/api/books');
  console.log(res);
  // return res.data;
};

const Home: NextPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      if (typeof window === 'undefined') return;
      const response = await axios.get('/books');
      // const response = await getBooks();
      setBooks(response.data);
      // setBooks(response);
    })();
  }, []);

  return (
    <div className='p-6'>
      <h1 className='text-4xl font-bold'>Lesson MSW</h1>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={postBooks}
      >
        POST
      </button>

      <div>
        <pre>
          <code>{JSON.stringify(books, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
};

export default Home;

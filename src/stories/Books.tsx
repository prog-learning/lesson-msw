import axios from 'axios';
import { useEffect, useState } from 'react';

interface ButtonProps {}

const getBooks = async () => {
  const res = await axios.get('/books');
  // return await res.json();
  return res.data;
};

export const Books = ({}: ButtonProps) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      if (typeof window === 'undefined') return;
      const response = await getBooks();
      setBooks(response);
    })();
  }, []);

  return (
    <button type='button'>
      <pre>
        <code>{JSON.stringify(books, null, 2)}</code>
      </pre>
    </button>
  );
};

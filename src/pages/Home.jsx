import React, { useContext, useEffect } from 'react';
import { Form } from '../components/Form';
import { Loader } from '../components/Loader';
import { Notes } from '../components/Notes';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export function Home() {
  const {
    loading, notes, fetchNotes, removeNote,
  } = useContext(FirebaseContext);

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <Form />
      {
        loading
          ? <Loader />
          : <Notes notes={notes} onRemove={removeNote} />
      }
    </>
  );
}

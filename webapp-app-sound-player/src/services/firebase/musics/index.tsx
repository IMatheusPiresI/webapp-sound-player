import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '..';
import { IMusic } from './types';

const collectionMusicsRef = collection(db, 'musics');
const getAllMusics = async () => {
  const querySnapshotMusics = await getDocs(collectionMusicsRef);

  let allMusics: IMusic[] = [];
  querySnapshotMusics.forEach((doc) => {
    allMusics.push(doc.data() as IMusic);
  });

  return allMusics;
};

const addMusic = async (musicData: IMusic) => {
  await addDoc(collectionMusicsRef, musicData);
};

export { getAllMusics, addMusic };

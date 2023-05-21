import { collection, getDocs } from 'firebase/firestore';
import { db } from '..';
import { IMusic } from './types';

const getAllMusics = async () => {
  const collectionMusicsRef = collection(db, 'musics');
  const querySnapshotMusics = await getDocs(collectionMusicsRef);

  let allMusics: IMusic[] = [];
  querySnapshotMusics.forEach((doc) => {
    allMusics.push(doc.data() as IMusic);
  });

  return allMusics;
};

export { getAllMusics };

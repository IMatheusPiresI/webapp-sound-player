import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db, storageRef } from '..';
import { IMusic } from './types';
import { deleteObject, ref } from 'firebase/storage';

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

const removeMusicFromStorage = async (musicFileName: string) => {
  const fileRef = ref(storageRef, musicFileName);

  await deleteObject(fileRef);
};

const removeMusicById = async (musicId: string) => {
  const queryResult = query(
    collection(db, 'musics'),
    where('id', '==', musicId)
  );
  const querySnapshot = await getDocs(queryResult);

  if (!querySnapshot.empty) {
    const doc = querySnapshot.docs[0];
    await deleteDoc(doc.ref);
  }
};

async function removeMusicAllPlaylistById(musicId: string) {
  try {
    const playlistsRef = collection(db, 'playlists');

    const querySnapshot = await getDocs(playlistsRef);

    querySnapshot.forEach(async (doc) => {
      const playlist = doc.data();

      if (playlist.musics && playlist.musics.length > 0) {
        const novasMusicas = playlist.musics.filter(
          (musica: IMusic) => musica.id !== musicId
        );

        await updateDoc(doc.ref, { musics: novasMusicas });
      }
    });
  } catch (error) {
    console.error('Error on music remove:', error);
  }
}

export {
  getAllMusics,
  addMusic,
  removeMusicById,
  removeMusicFromStorage,
  removeMusicAllPlaylistById,
};

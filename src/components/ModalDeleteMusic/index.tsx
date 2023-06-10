import React, { useState } from 'react';
import { ModalBase } from '../ModalBase';
import { IProps } from './types';
import {
  removeMusicAllPlaylistById,
  removeMusicById,
  removeMusicFromStorage,
} from '@/services/firebase/musics';
import { useMusicContext } from '@/resources/hooks/useMusicContext';
import { toast } from 'react-toastify';

export const ModalDeleteMusic: React.FC<IProps> = ({
  music,
  onClose,
  isVisible,
}) => {
  const { removeMusicFromList } = useMusicContext();
  const [loading, setLoading] = useState<boolean>(false);
  const handleDeleteMusic = async () => {
    if (!music) return;
    setLoading(true);
    try {
      await Promise.all([
        await removeMusicById(music.id),
        await removeMusicFromStorage(music.musicName),
        await removeMusicAllPlaylistById(music.id),
      ]);
      removeMusicFromList(music.id);
      toast.success('Song Remove Successfully!');
      onClose();
    } catch (err) {
      toast.success('Error on Remove Song. Try Again!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalBase onClose={onClose} isVisible={isVisible}>
      <div className="bg-slate-100 px-4 py-6 rounded-lg w-full max-w-md mx-4">
        <p className="text-center text-xl mb-3 text-red-600 font-bold">
          Remove Song
        </p>

        <p className="text-red-500">
          Are you sure you want to remove the song{' '}
          <span className="font-bold text-red-600">{music?.musicName}</span>?
          When removing, it will not be possible to undo this action.
        </p>

        <div className="flex justify-between w-full gap-4 mt-4">
          <button
            className="bg-gray-300 w-full py-2 rounded-full"
            onClick={onClose}
          >
            <p className="uppercase font-medium text-lg text-gray-600">
              cancel
            </p>
          </button>
          <button
            className="w-full py-2 rounded-full bg-red-200"
            onClick={handleDeleteMusic}
          >
            {loading ? (
              <div className="flex items-center justify-center w-full h-full">
                <div
                  className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-white border-r-transparent align-[-0.125em]"
                  role="status"
                />
              </div>
            ) : (
              <p className="uppercase font-medium text-lg text-red-600">
                delete
              </p>
            )}
          </button>
        </div>
      </div>
    </ModalBase>
  );
};

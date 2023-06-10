'use client';

import { ItemMusicListPlay } from '@/components/ItemMusicListPlay';
import { MiniPlayer } from '@/components/MiniPlayer';
import { ModalDeleteMusic } from '@/components/ModalDeleteMusic';
import { useMusicContext } from '@/resources/hooks/useMusicContext';
import { IMusic } from '@/services/firebase/musics/types';
import React, { useCallback, useEffect, useRef, useState } from 'react';

export const ListMusics = () => {
  const { allMusics } = useMusicContext();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [musicPlay, setMusicPlay] = useState<IMusic | null>(null);
  const [isPlayling, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const [musicDelete, setMusicDelete] = useState<IMusic | null>(null);

  const handleDeleteMusic = (music: IMusic) => {
    setShowModalDelete(true);
    setMusicDelete(music);
  };

  const handleCloseModalDelete = () => {
    setShowModalDelete(false);
  };

  const handlePlay = (music: IMusic) => {
    if (music.id === musicPlay?.id && !audioRef.current?.paused) {
      audioRef.current?.pause();
      return;
    }
    if (music.id === musicPlay?.id && audioRef.current?.paused) {
      audioRef.current?.play();
      return;
    }
    setMusicPlay(music);
  };

  const changeCurrentAudioPlay = useCallback(() => {
    if (!musicPlay || !audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.load();
    audioRef.current.play();
    setIsPlaying(true);
  }, [musicPlay]);

  if (audioRef.current) {
    audioRef.current.onplaying = () => {
      if (!isPlayling) {
        setIsPlaying(true);
      }
    };

    audioRef.current.onpause = () => {
      if (!isPlayling) return;
      setIsPlaying(false);
    };

    audioRef.current.ontimeupdate = () => {
      setCurrentTime(audioRef.current?.currentTime ?? 0);
    };
  }

  const handleChangeDuration = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = event.target.valueAsNumber;
  };

  useEffect(() => {
    changeCurrentAudioPlay();
  }, [changeCurrentAudioPlay]);

  return (
    <section className="w-full max-w-lg pb-32">
      {allMusics.map((music) => (
        <ItemMusicListPlay
          music={music}
          key={music.id}
          onClick={() => handlePlay(music)}
          onDelete={() => handleDeleteMusic(music)}
          isPlaying={music.id === musicPlay?.id && isPlayling}
        />
      ))}
      <audio
        controls
        ref={audioRef}
        className="z-50 opacity-0 pointer-events-none absolute w-0 h-0"
      >
        <source src={musicPlay?.url} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {musicPlay && (
        <MiniPlayer
          isPlaying={isPlayling}
          music={musicPlay}
          onActionPlayPause={() => handlePlay(musicPlay)}
          value={currentTime}
          max={audioRef.current?.duration}
          onChange={handleChangeDuration}
        />
      )}

      <ModalDeleteMusic
        isVisible={showModalDelete}
        music={musicDelete}
        onClose={handleCloseModalDelete}
      />
    </section>
  );
};

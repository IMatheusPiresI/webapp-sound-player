import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { MiniPlayerMusicPreview } from '../MiniPlayerMusicPreview';
import { IProps } from './types';

export const CardMusicFileMP3: React.FC<IProps> = ({
  onSelectAudioCallback,
  audioSelected,
  ...rest
}) => {
  const [audio, setAudio] = useState<string | undefined>(undefined);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSelectSong = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      onSelectAudioCallback(file);
      event.target.value = '';
    }
  };

  const handleChangeAudio = useCallback(() => {
    if (audioSelected) {
      const reader = new FileReader();
      reader.readAsDataURL(audioSelected);
      reader.onloadend = () => {
        setFileName(audioSelected.name);
        setAudio(reader.result as string);
      };
      return;
    }
    setAudio(undefined);
    setFileName(null);
  }, [audioSelected]);

  useEffect(() => {
    handleChangeAudio();
  }, [handleChangeAudio]);

  return (
    <div className="w-full">
      <div className="w-full h-20 border border-white relative mb-2">
        <div className="absolute h-full w-full flex items-center justify-center">
          <p className="text-white/[0.4] text-center font-medium text-md truncate px-4">
            {fileName ?? 'MUSIC FILE .MP3'}
          </p>
        </div>
        <label
          htmlFor="music"
          className="absolute w-full h-full cursor-pointer z-10"
        />
        <input
          type="file"
          accept=".mp3"
          name="music"
          id="music"
          className="bg-cyan-300 w-0 h-0 opacity-0 absolute"
          {...rest}
          onChange={handleSelectSong}
        />
      </div>
      <MiniPlayerMusicPreview audio={audio} name={fileName} />
    </div>
  );
};

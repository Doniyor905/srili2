import { axiosInstance } from '@/services/instance';
import React from 'react';

interface Props {
  className?: string;
  onUploaded: (url: string) => void;
}

export const UploadImageInput: React.FC<Props> = ({ onUploaded }) => {
  const [file, setFile] = React.useState<File | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    const { data } = await axiosInstance.post('/admin/upload', formData);
    onUploaded(data.url);
  };
  return (
    <div className="space-y-2 border flex items-center justify-center cursor-pointer">
      <input type="file" accept="image/*" onChange={handleChange} />
      <button
        type="button"
        onClick={handleUpload}
        className="bg-primary text-white px-3 py-1 rounded cursor-pointer">
        Fotoğrafı kaydet
      </button>
    </div>
  );
};

import { useState } from 'react';
import axios from 'axios';

export function useGenerateStoryAndImage(message: string) {
  const [story, setStory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateStoryAndImage = async () => {
    setLoading(true);

    try {
      const [storyResponse, imageResponse] = await Promise.all([
        axios.post('/generate/text', { message }),
        axios.post('/generate/image', { message }),
      ]);

      setStory(storyResponse.data.story);
      setImageUrl(imageResponse.data.imageUrl);
    } catch (err) {
      setError('Something went wrong while generating the story or image.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { story, imageUrl, loading, error, generateStoryAndImage };
}

import { useState } from 'react';
import axios from 'axios';

export function useGenerateStoryAndImage(userPrompt: string, storyType: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateStoryAndImage = async () => {
    setLoading(true);

    try {
      console.log("Fetching story and image...");
      const storyResponse = await (
        axios.post('http://localhost:9090/generate/text', {
          userPrompt: userPrompt,
          storyType: storyType,
        }));
        const storyPages = storyResponse.data.storyPages;

        const imageResponse = await axios.post('http://localhost:9090/generate/image', {
        userPrompt: userPrompt,
      });
      console.log(imageResponse)
      const imageUrl = imageResponse.data.imageUrl;
      return { storyPages, imageUrl };
      
    } catch (err) {
      setError('Something went wrong while generating the story or image.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, generateStoryAndImage };
}

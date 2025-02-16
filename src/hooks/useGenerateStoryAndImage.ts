import { useState } from 'react';
import axios from 'axios';

export function useGenerateStoryAndImage(userPrompt: string, storyType: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateStoryAndImage = async () => {
    setLoading(true);

    try {
      console.log("Fetching story and image...");
      const [storyResponse, imageResponse] = await Promise.all([
        axios.post('http://localhost:9090/generate/text', {
          userText: userPrompt,
          storyType: storyType,
        }),
        axios.post('http://localhost:9090/generate/image', { userPrompt: userPrompt }),
      ]);
      const story = storyResponse.data.story;
      const imageUrl = imageResponse.data.imageUrl;
      return { story, imageUrl };
      
    } catch (err) {
      setError('Something went wrong while generating the story or image.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, generateStoryAndImage };
}

import axios from 'axios';
import { RefObject } from 'react';
import { ImageResult } from './Api-types';

const API_KEY = 'js3vYlAEud4E_3IXmVe7TTaBrXAHaS1SApRLf3_q2Nw';

async function fetchImg (query: string, page: number, controllerRef: RefObject<AbortController>): Promise<ImageResult[]> {
try {
  const separated = query.split('/');
  const extractedQuery = separated[1];
  
  const response = await axios.get(`https://api.unsplash.com/search/photos?`, {
      signal: controllerRef?.current?.signal,
      params: { 
        client_id: API_KEY,
      query: extractedQuery,
      page,
      orientation: 'portrait',
      per_page: 12,
    }});

  return response.data.results;
} catch (error) {
  console.log('error');
  
  throw error;
}
}

export default fetchImg;
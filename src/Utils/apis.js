//we use axios to send asynchronus http requests and perform CRUD operations.
import axios from 'axios';
import { BASE_API_URL } from './constants';

const getStory = async (id) => {
  try {
        //we pass the type of story we want ie top ,new or best then make an api call respective to the .json url confirm article
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getStories = async (type) => {
  try {
    //the axios library always returns data in a .data property thus wer rename it ti storyIds since the api returns an array of story IDs
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
    return stories;
  } catch (error) {
    console.log('Error while getting list of stories.');
  }
};
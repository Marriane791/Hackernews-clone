import React from 'react';
import Story from './Story';
import useDataFetcher from '../Hooks/dataFetcher'
import Loader from './Loader';

const ShowStories = (props) => {
  const { type } = props.match.params;
  const { isLoading, stories } = useDataFetcher(type);

  return (
    <React.Fragment>
      <Loader show={isLoading}>Loading...</Loader>
      <React.Fragment>
        {stories.map(({ data: story }) => (
          <Story key={story.id} story={story} />
        ))}
      </React.Fragment>
    </React.Fragment>
  );
};

export default ShowStories;

import toast from 'react-hot-toast';

export const showSearchQueryAbsence = () => {
  toast('To search for movies you need to specify what you are looking for.');
};

export const showSearchQueryRepeat = searchQuery => {
  toast(`You already found all the movies on the query "${searchQuery}".`);
};

export const showIncorrectQuery = searchQuery => {
  toast(
    `Sorry, there are no movies matching your query: "${searchQuery}". Please try to search something else.`
  );
};

export const showQueryError = error => {
  toast(`You caught the following error: ${error.message}.`);
};

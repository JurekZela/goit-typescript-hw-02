import { useState, useEffect, useRef, FormEvent } from 'react';
import  { toast } from 'react-hot-toast';
import { RotatingTriangles } from 'react-loader-spinner'
import fetchImg from '../Api/Api.js';
import  Searchbar  from '../Searchbar/Searchbar.js';
import { Wrapper } from '../../GlobalStyled-styled.js';
import ImageGallery from '../ImageGallery/ImageGallery.js';
import Button from '../Button/Button.js';
import { IImages } from '../ImageGallery/ImagesGallery-types.js';


const Loader = <RotatingTriangles
visible={true}
height="80"
width="80"
ariaLabel="rotating-triangels-loading"
wrapperStyle={{}}
wrapperClass="rotating-triangels-wrapper"
/>

export default function App () {
  const [images, setImages] = useState<IImages[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPages] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMoreImages, setLoadingMoreImages] = useState<boolean>(false);
  const [totalHits, setTotalHits] = useState<number>(0);


  const controllerRef = useRef<AbortController>(new AbortController);

  useEffect(() => {

    async function loadingResults() {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }

      controllerRef.current = new AbortController();
      try {
        setLoading(true);
        setLoadingMoreImages(true);

        if (!query) {
          return;
        }
        

        const initialQuizzes = await fetchImg(query, page, controllerRef);
        
        setTotalHits(initialQuizzes.length);

        if (initialQuizzes.length) {
          setImages(prevImages => page >= 1 ? [...prevImages, ...initialQuizzes ] : [...initialQuizzes])
        }else {
          toast.error(`Sorry, but we didn't found any image!`);
        }
  
      } catch{
           setError(true);
      }
      finally {
        setLoading(false);
        setLoadingMoreImages(false);
      }
    }

    loadingResults()

    return () => {
      
        controllerRef.current.abort();
    }

  }, [query, page]);


  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const value = (target.elements[1] as HTMLInputElement).value.trim();    

    if (!value) {
     toast.error('Not a Value!');
    } else {
      searchImages(value);      
    }

    target.reset();
  };

  const searchImages = (newQuery: string): void => {
    const currentQuery: string = `${Date.now()}/${newQuery}`;

    setQuery(currentQuery);
    setPages(1);
    setImages([]);
  };



 const onClickLoadMore = () => setPages((prevPages: number): number => {return prevPages + 1});

  return (
    <Wrapper>
      <Searchbar onSubmit={handleSubmit}/>
      {error && <b>OOPS! Something went wrong! Please try reloading this page :-) </b>}
      {loading && Loader}
     {
     images.length > 0 && 
     <>
     <ImageGallery images={images}/>
     {page < totalHits && <Button loader={loadingMoreImages} onClick={onClickLoadMore}/>}
     </>
     }
    </Wrapper>
  );
}
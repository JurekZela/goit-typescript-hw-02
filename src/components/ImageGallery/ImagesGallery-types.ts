export interface IIMageProps {
    images: IImages[]
};

export interface IImages {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
  }
import { ReactNode } from "react";

export interface ComponentProps {
  children: ReactNode
}

export interface ButtonProps {
  title: string
  action?: () => void
}

export interface MoviesProps {
  id: string; // unique movie ID (can be imdbID or similar)
  titleText: {
    text: string; // movie title
  };
  primaryImage?: {
    url: string; // poster image URL
    caption?: {
      plainText: string; // optional image caption
    };
  };
  releaseYear: {
    year: number; // release year
    endYear?: number; // optional (for series)
  };
  genres?: {
    genres: {
      text: string;
    }[];
  };
  runtime?: {
    seconds: number;
  };
  plot?: {
    plotText: {
      plainText: string;
    };
  };
}

export interface MovieProps {
  title: string;
  posterImage: string;
  releaseYear: number;
}
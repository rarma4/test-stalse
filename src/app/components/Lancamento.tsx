'use client'
import * as React from 'react';
import { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/components/lancamento.scss';
import Image from 'next/image';
import api from '../services/api';
import { moviesForCard } from '../utils/Utils'

export default function Lancamento() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    customPaging: function () {
      return (
        <button>
          <div className="dotInside"></div>
          <span className="progressSlider-stay progressSlider--thin">
            <svg height="70" width="70">
              <circle id="outer" cx="35" cy="35" r="25" strokeWidth="3" fill="none" stroke="#0040ff" />
              <circle id="inner" cx="35" cy="35" r="25" strokeWidth="5" fill="none" stroke="#e6d0d2" />
            </svg>
          </span>
        </button>
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.04,
          slidesToScroll: 1,
          initialSlide: 0,
          arrows: false,
          autoplay: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.04,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
        }
      }
    ]
  };

  type Movie = {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
    Plot: string;
    [key: string]: any;
  };
  
  const [movies, setMovies] = useState<Movie[]>([]);
  
  async function getMovies() {
    try {
      const apiKey = process.env.NEXT_PUBLIC_APIKEY;
      const responses = await Promise.all(
        moviesForCard.map(id =>
          api.get(`/?i=${id}&apikey=${apiKey}`).then(res => res.data)
          // api.get(`/?i=${id}&apikey=1e5700a2`).then(res => res.data)
        )
      );
      setMovies(responses);
      console.log(apiKey)
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div key={index} className="col-md-3 col-sm-6 p-3 text-center">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{movie.Title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{movie.Year}</h6>
                <div className="iconService w-100 d-flex justify-content-center mb-5">
                  {movie.Poster && movie.Poster !== "N/A" && (
                    <Image
                      src={movie.Poster}
                      alt={movie.Title}
                      width={150}
                      height={220}
                    />
                  )}
                </div>
                <h6 className="card-title">{movie.Language}</h6>
                <p className="card-title">{movie.Country}</p>
                <h6 className="card-title">by {movie.Writer}</h6>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

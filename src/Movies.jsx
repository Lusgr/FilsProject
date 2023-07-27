import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faAngleRight, faCalendarDays, faGlobe, faDownload, faMinus, faTv, faVideo, faPlay,} from "@fortawesome/free-solid-svg-icons";

const Movies = () =>{

  const [popular, setPopular] = useState([])
  const [scrolling, setScrolling] = useState(false);
  const [input, setInput] = useState("")

  const inputChange = (e)=>{
    setInput(e.target.value)
  }

  useEffect(() => {
    const handleScroll = () => {
      const offset = 100;
      if (window.scrollY > offset) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleMovieClick = (movieId) => {
    window.location.href = ""
  }

    const API_KEY = "98ce681abbaf8891e99d2da7e3e42d60";
    const BASE_URL = "https://api.themoviedb.org/3/";
    const URL_API = BASE_URL + "discover/movie?sort_by=popularity.desc&" + API_KEY
    const URL_POP2010 = BASE_URL + "discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&" + API_KEY
    const IMG_URL = "https://image.tmdb.org/t/p/w500";
    const URL_RATE = BASE_URL +  'discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&' + API_KEY
    const searchURL = BASE_URL + 'search/movie?api_key=' + API_KEY + '&query=';
    const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    const genre = BASE_URL + "genre/movie/list";

    useEffect(() => {
      fetchPopularMovies();
    }, []);
  
    const fetchPopularMovies = () => {
      fetch(POPULAR_MOVIES_URL)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setPopular(data.results);
        })
        .catch((error) => {
          console.error("Error fetching popular movies:", error);
        });
    };
  
      

    return(
        <div>
        <div className='header'> 
          <div>
            <a  className="market" href='https://themeforest.net/item/movflx-video-production-and-movie-react-js-template/37648670'>Envato Market</a>
          </div>
          <div>
            <a href='https://themeforest.net/checkout/from_item/37648670?license=regular&support=bundle_6month'> 
              <button className="buyButton">Buy now</button>
            </a>
          </div>
        </div>
        <div className='mainPart'>
            <div>
              <div className="menu-wrap">
                <div className="main-nav"  style={{ position: scrolling ? 'static' : 'fixed', top: 0, left: 0, width: '100%', backgroundColor: scrolling ? 'black' : 'none', padding: '10px 0'}}>
                <nav>
                  <div className="logo">
                    <img src='https://movflxx.netlify.app/img/logo/logo.png'/>
                  </div>
                  <ul>
                    <li>HOMEONE</li>
                    <li>MOVIE</li>
                    <li>TV SHOW</li>
                    <li>PRICING</li>
                    <li>BLOG</li>
                    <li>CONTACTS</li>
                    <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                  </ul>
                  <div className="action">
                    <ul className="header-action">
                      <li><FontAwesomeIcon icon={faGlobe}/> </li>
                      <li>               
                        <select>
                            <option>En</option>
                            <option>Am</option>
                        </select>
                        
                        </li>  
                        <li>
                          <button className="sign">Singn in</button>
                        </li>
                    </ul>
                  </div>
                  </nav>
                  </div>
              </div>
            <div className="unlimitedMovie">
                    <p className="movflx">Movflx</p>
                    <h1 className="movietitle">Unlimited Movie, <br/>TVs Shows, & More.</h1>
                </div>
                <div className="firstPart">
                <ul className="ul1">
                    <li className="pg">PG 18</li>
                    <li className="hd">HD</li>
                    <li>Romancee</li>
                    <li>Drama</li>
                    <li><FontAwesomeIcon icon={faCalendarDays} />  2022</li>
                    <li>  128 min</li>
                </ul>
                </div>
                <div>
                  <button className="watch">
                  <FontAwesomeIcon icon={faAngleRight} />
                     Watch now</button>
                  
                   
                </div>
               
            </div>
        </div>

        <div>
          <div className="row">
            <div>
              <p className="rowText1">ONLINE STREAMING</p>
              <h1 className="rowText2">Upcoming Movies</h1>
            </div>
          </div>
          <div className="buttonPart">
            <div>
              <ul>
                <li><button className="movies movies1"> TV shows</button></li>
                <li><button className="movies">documentary</button></li>
                <li><button className="movies">Movies</button></li>
                <li><button className="movies">sports</button></li>
              </ul>
            </div>
          </div>
          <div className="moviesPart1">
            <div className="popularMovies">
            {popular.map((movie) => (
            <div key={movie.id} onClick={()=>{handleMovieClick(movie.id), console.log(movie.id);}}>
              <img className="imgs" src={IMG_URL + movie.poster_path} alt={movie.title}/>
              <h3 className="moviesHeader">{movie.title}</h3>
              <div>
            <p className="k4">4k</p>
            <p className="date">{movie.release_date}</p>
          </div>
            </div>
          ))}
            </div>
          </div>
        </div>
        <div className="downloadPart1">
          <div className="downloadPart">
            <div>
              <img src="	https://movflxx.netlify.app/img/images/services_img.jpg"></img>
            </div>
            <div className="iconsPart">
              <button className="download">Download <FontAwesomeIcon className="i" icon={faDownload} /></button>
            </div>
            <div className="servise">
              <div className="iconsPart">
                
                  <FontAwesomeIcon className="i2" icon={faMinus}/> <p>OUR SERVICES</p>
              </div>
              <div className="iconsPart">
                <h1>Download Your Shows<br/> Watch Offline.</h1>
                </div>
                <div className="iconsPart">
                  <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There<br/> are many variations of passages of lorem Ipsum available, but the majority have<br/> suffered alteration in some injected humour.</p>
                </div>
                <div className="iconsPart"> 
                    <ul>
                      <li className="li">
                        <FontAwesomeIcon style={{color:"white"}} icon={faTv}/> 
                      </li>
                      <li>
                          <h2>Enjoy on Your TV.</h2>
                          <p>Lorem ipsum dolor sit amet, consecetur<br/> adipiscing elit, sed do eiusmod tempor.</p>
                        </li>
                      </ul>
                      <ul>
                          <li className="li">
                            <FontAwesomeIcon style={{color:"white"}} icon={faVideo}/>
                          </li>
                          <li>
                            <h2>faVideo</h2>
                            <p>Lorem ipsum dolor sit amet, consecetur<br/> adipiscing elit, sed do eiusmod tempor.</p>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
        </div>
        <div className="filmPart2"> 
          <div> 
            <div className="paddingpart2">
              <p className="streaming streaming1">ONLINE STREAMING</p>
              <h1 className="streaming">Top Rated Movies</h1>
            </div>
            <div className="filmsPart2">
              <button className="shows shows1">TV SHOWS</button>
              <button className="shows">Movies</button>
              <button className="shows">DOCUMENTARY</button>
              <button className="shows">SPORTS</button>
            </div>
          </div>
          </div>
          <div className="moviesPart1">
            <div className="popularMovies">
              {popular.map((movie) => (
              <div key={movie.id} onClick={()=>{handleMovieClick(movie.id)}}>
                <img className="imgs" src={IMG_URL + movie.poster_path} alt={movie.title}/>
                <h3 className="moviesHeader">{movie.title}</h3>
                <div>
                  <p className="k4">4k</p>
                  <p className="date">{movie.release_date}</p>
                </div>
              </div>
              ))}
            </div>
          </div>
          <div>
            <div className="imagePart">
              <div>
                <h5 className="forPadding">ONLINE STREAMING</h5>
                <h1 className="forPadding">Live Movie & TV Shows For<br/> Friends & Family</h1>
                <p className="forPadding">Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod<br/> There are many variations of passages of lorem Ipsum available, but the<br/> majority have suffered alteration.</p>
                <h2 className="hd2 forPadding">HD 4K</h2>
                <h4 className="forPadding"><span><div>20</div></span> k+</h4>
                <p className="p forPadding">Active Customer</p>
                <a className="a forPadding" href="https://www.youtube.com/watch?v=R2gbPxeNk2E"><FontAwesomeIcon icon={faPlay} /> WATCH TV</a>
              </div>
              <div>
                <img src="https://movflxx.netlify.app/img/images/live_img.png"></img>
              </div>
            </div>
          </div>
          <div className="bestSeries">
            <div className="stream">
              <p className="streaming streaming1">BEST TV SERIES</p>
              <h1 className="streaming stream2">World Best TV Series</h1>
            </div>
            <div className="moviesPart1">
              <div className="popularMovies">

                {popular.slice(0, 4).map((movie) => (
                  <div key={movie.id} onClick={()=>{handleMovieClick(movie.id)}}>
                      <img className="imgs" src={IMG_URL + movie.poster_path} alt={movie.title}/>
                      <h3 className="moviesHeader">{movie.title}</h3>
                      <div>
                        <p className="k4">4k</p>
                        <p className="date">{movie.release_date}</p>
                    </div>
                  </div>
                  ))}
              </div>
              </div>
          </div>
          <div className="yelowPart">
            <div>
              <h1>TRIAL START FIRST 30 DAYS.</h1>
              <p>Enter your email to create or restart your membership.</p>
            </div>
            <div>
              <form>
                <input placeholder="Enter your email" value={input} onChange={inputChange}/>
              </form>
            </div>
          </div>
          <div className="footer">
            <nav>
                  <div className="logo">
                    <img src='https://movflxx.netlify.app/img/logo/logo.png'/>
                  </div>
                  <ul>
                    <li>HOMEONE</li>
                    <li>MOVIE</li>
                    <li>TV SHOW</li>
                    <li>PRICING</li>
                    <li>BLOG</li>
                    <li>CONTACTS</li>
                    <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                  </ul>
                  </nav>
          </div>
          <div className="footer2">
            <ul>
              <li>FAQ</li>
              <li>HELP CENTER</li>
              <li>TERMS OF USE</li> 
              <li>PRIVACY</li>
            </ul>
            <div>
              
            </div>
          </div>
      </div>
    )
}

export default Movies
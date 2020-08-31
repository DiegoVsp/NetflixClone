import React from 'react';
import './FeaturedMovie.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

export default ({ item }) => {
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name)
  }
  let descricao = item.overview;
  // if(descricao.length > 200) {
  //   descricao = descricao.substring(0,200) + '...';
  // }
  let desc = descricao.length > 200? descricao.substring(0, 200)+'...' : descricao;
  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featured--vertical">
        <div className="featured--Horizontal">
          <div className="featured--name">
            {item.original_name}
          </div>
            <div className="featured--info">
              <div className="featured--points">{item.vote_average} pontos</div>
              <div className="featured--year">{firstDate.getFullYear()}</div>
              <div className="featured--seasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
            </div>
            <div className="featured--description">{desc}</div>
            <div className="featured--buttons">
              <a href={`/watch/${item.id}`}className="featured--watchbutton">Assistir</a>
              <a href={`/list/add/${item.id}`}className="featured--mylistbutton">+ Minha Lista</a>
            </div>
            <div className="featured--genres"><strong>Generos:</strong>{genres.join(', ')}</div>
        </div>
      </div>
    </section>
  )
}

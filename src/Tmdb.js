const API_KEY = '8ac931fc341b0cbde341833f65624174';
const API_BASE = 'https://api.themoviedb.org/3';

// originais da netflix
// recomendados (trending)
// em alta (top rated)
// ação
// comédia
// terror
// romance
// documentários
const basicFetch = async (url) => {
  const req = await fetch(`${API_BASE}${url}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: await basicFetch(`/movie/top_rated/?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(`/discover/tv?with_network=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: "horror",
        title: "Horror",
        items: await basicFetch(`/discover/tv?with_network=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(`/discover/tv?with_network=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(`/discover/tv?with_network=99&language=pt-BR&api_key=${API_KEY}`)
      }
    ]
  },
}
    


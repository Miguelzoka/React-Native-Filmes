import React, { useEffect, useState } from "react";
import { Card, Text } from "react-native-paper";
import apiFilmes from "../../services/apiFilmes";

const FilmesDetalhes = ({ navigation, route }) => {
  const [filme, setFilme] = useState({});

  useEffect(() => {
    const id = route.params.id;
    apiFilmes.get(`/movie/${id}`).then((resultado) => {
      setFilme(resultado.data);
    });
    apiFilmes.get(`/movie/${id}`).then((resultado) => {
      setFilme(resultado.data);
    });
  }, []);

  return (
    <>
      <Card style={{marginBottom: 20}}>
        <Card.Cover
          source={{uri: "https://image.tmdb.org/t/p/w500/" + filme.backdrop_path}}/>
        <Card.Content>
          <Text variant="titleLarge">{filme.title}</Text>
          <Text variant="bodyMedium">{filme.overview}</Text>
        </Card.Content>
      </Card>
        <Card.Content>
          <Text variant="BodyMedium">Orçamento: {filme.budget}</Text>
          <Text variant="bodyMedium">Voto: {filme.vote_average}</Text>
          <Text variant="bodyMedium">Duração: {filme.runtime}</Text>
          <Text variant="bodyMedium">Lançamento: {filme.release_date}</Text>
        </Card.Content>
    </>
  );
};

export default FilmesDetalhes;

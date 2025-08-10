import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useGetPokemonDetailsQuery } from '../services/pokemonApi';
import Loader from './Loader';

const Details: React.FC = () => {
  const { detailsId } = useParams<{ detailsId: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    data: details,
    error,
    isLoading,
  } = useGetPokemonDetailsQuery(detailsId || '', {
    skip: !detailsId,
  });

  const handleClose = (): void => {
    navigate(`/${location.search}`);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500 p-4">Error: Pokémon not found</div>;
  }

  if (!details) {
    return (
      <div className="p-4 text-center text-text-secondary">
        Select a Pokémon to see the details.
      </div>
    );
  }

  const imageUrl =
    details.sprites.other?.['official-artwork']?.front_default ||
    details.sprites.front_default;

  return (
    <div className="bg-background-secondary rounded-lg shadow-lg relative text-text-primary p-4 border border-border">
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl transition-colors z-10"
        aria-label="Close details"
      >
        &times;
      </button>
      <div className="pt-8">
        <h2
          className="text-xl font-bold capitalize mb-4 text-center"
          style={{ color: '#ff7043' }}
        >
          {details.name}
        </h2>
        <img
          src={imageUrl}
          alt={details.name}
          className="mx-auto mb-4 w-48 h-48 object-contain"
        />
        <div className="space-y-2">
          <p>
            <strong>ID:</strong> {details.id}
          </p>
          <p>
            <strong>Height:</strong> {details.height / 10} m
          </p>
          <p>
            <strong>Weight:</strong> {details.weight / 10} kg
          </p>
          <p>
            <strong>Types:</strong>{' '}
            {details.types.map((t) => t.type.name).join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;

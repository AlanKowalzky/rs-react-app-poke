import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Loader from './Loader';

interface PokemonDetails {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  height: number;
  weight: number;
  types: { type: { name: string } }[];
}

const Details: React.FC = () => {
  const { detailsId } = useParams<{ detailsId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [details, setDetails] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!detailsId) {
      setDetails(null);
      setLoading(false);
      return;
    }

    const fetchDetails = async (): Promise<void> => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${detailsId}`
        );
        if (!response.ok) {
          throw new Error('Pokémon not found');
        }
        const data = await response.json();
        setDetails(data);
      } catch (e: unknown) {
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [detailsId]);

  const handleClose = (): void => {
    navigate(`/${location.search}`);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500 p-4">Error: {error}</div>;
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
        <h2 className="text-xl font-bold capitalize mb-4 text-center text-pokemon-orange">
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

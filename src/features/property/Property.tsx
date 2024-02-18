import { useEffect } from 'react';

export default function Property() {
  useEffect(() => {
    try {
      throw {
        code: 'comethng',
        error: 'comethng',
      };
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <div>Property</div>;
}

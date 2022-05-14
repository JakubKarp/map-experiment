import Points from '../data/wwa_points.json';
import { v4 as uuidv4 } from 'uuid';

export const getData = () => {
  let data;
  let error;
  let load;

  try {
    const { features } = Points;
    features.forEach(point => (point.id = uuidv4()));
    data = features;
  } catch (e) {
    error = e;
  } finally {
    load = false;
  }

  return { data, error, load };
};

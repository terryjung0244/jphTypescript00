import { useSelector } from 'react-redux';
import type { RootState } from 'service/store';

function useAppSelector<T>(fn: (state: RootState) => T): T {
  return useSelector<RootState, T>(fn);
}

export default useAppSelector;

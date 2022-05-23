import { renderHook, act } from '@testing-library/react-hooks';
import { AuthContextProvider, useAuth } from '~/utilities/stores';
import { FC } from 'react';

describe('#useAuth', () => {
  const Wrapper: FC = (props) => <AuthContextProvider {...props} />;
  it('should be falsy if user is not set', () => {
    const { result } = renderHook(() => useAuth(), { wrapper: Wrapper });
    expect(result.current.user).toBeFalsy();
  });

  it('should return user data if it exists ', () => {
    const { result } = renderHook(() => useAuth(), { wrapper: Wrapper });
    act(() => {
      result.current.setUser({ email: 'test@gmail.com', name: 'test user' });
    });
    expect(result.current.user).toStrictEqual({ email: 'test@gmail.com', name: 'test user' });
  });
});

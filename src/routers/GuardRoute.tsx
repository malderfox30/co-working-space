import { Loading } from '@base-projects/web-uikit';
import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  isPrivate?: boolean;
  children: JSX.Element;
}

function GuardRoute({ isPrivate = false, children }: Props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const currentUser = await Auth.currentUserInfo();
      if (!currentUser && isPrivate) {
        navigate('/login', {
          replace: true,
        });
      }
      if (currentUser && !isPrivate) {
        navigate('/', {
          replace: true,
        });
      }
      setLoading(false);
    })();
  }, []);
  if (loading) return <Loading />;
  return children;
}

export default GuardRoute;

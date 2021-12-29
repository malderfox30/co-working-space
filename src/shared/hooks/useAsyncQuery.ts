import { useApolloClient } from '@apollo/client';
import {
  PresignedUrlDto,
  PresignedUrlS3Document,
  PresignedUrlS3Mutation,
  PresignedUrlS3MutationVariables,
} from '#/generated/schemas';

const useAsyncQuery = () => {
  const client = useApolloClient();

  const getPresignedUrl = async (presignedUrlDto: PresignedUrlDto) => {
    return client.mutate<
      PresignedUrlS3Mutation,
      PresignedUrlS3MutationVariables
    >({
      mutation: PresignedUrlS3Document,
      variables: {
        presignedUrlDto: presignedUrlDto,
      },
    });
  };

  return {
    getPresignedUrl,
  };
};

export default useAsyncQuery;

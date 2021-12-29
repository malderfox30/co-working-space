import {
  DocumentNode,
  TypedDocumentNode,
  useQuery,
  FetchPolicy,
} from '@apollo/client';
import { useState } from 'react';
import { debounce } from 'lodash';
import {
  Maybe,
  MetaPaginationInterface,
  QueryFilterDto,
} from '#/generated/schemas';

export interface FormatDataResponse {
  meta?: Maybe<MetaPaginationInterface>;
  items?: Maybe<unknown>[] | null;
}

interface Props<TData, TVariables> {
  query: DocumentNode | TypedDocumentNode<TData, TVariables>;
  formatData: (e: TData) => FormatDataResponse | null | undefined;
  variables?: TVariables & {
    queryParams?: QueryFilterDto;
  };
  fetchPolicy?: FetchPolicy;
  skip?: boolean;
}

export const useInfiniteLoadQuery = <TData, TVariables, T>({
  query,
  variables,
  formatData,
  skip,
  fetchPolicy = 'cache-first',
}: Props<TData, TVariables>) => {
  const [data, setData] = useState<unknown[]>([]);
  const [pagination, setPagination] = useState({
    pageNumber: 1,
    pageSize: 10,
    total: 10,
    totalPage: 1,
  });
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const { error, refetch } = useQuery<TData>(query, {
    variables: {
      queryParams: {
        page: 1,
        limit: 10,
        ...variables?.queryParams,
      },
    },
    skip: skip,
    onCompleted: data => {
      setLoading(false);
      const formatedData = formatData(data);
      if (formatedData?.meta?.currentPage === 1) {
        setData(formatedData?.items || []);
        setPageNumber(2);
        setPagination({
          pageNumber: formatedData?.meta?.currentPage || 1,
          pageSize: formatedData?.meta?.itemsPerPage || 10,
          total: formatedData?.meta?.totalItems || 10,
          totalPage: formatedData?.meta?.totalPages || 1,
        });
      }
    },
    onError: () => {
      setLoading(false);
    },
    fetchPolicy,
  });

  const loadMore = (event: React.UIEvent) => {
    if (pagination.pageNumber >= pagination.totalPage) return;
    const target = event.target as HTMLDivElement;
    if (
      !loading &&
      target.scrollTop + target.offsetHeight === target.scrollHeight
    ) {
      setLoading(true);
      refetch({
        queryParams: {
          ...variables?.queryParams,
          limit: 10,
          page: pageNumber,
        },
      })
        .then(data => {
          const formatedData = formatData(data.data);
          setPageNumber(currentPage => currentPage + 1);
          setData(oldData => [...oldData, ...(formatedData?.items || [])]);
          setPagination({
            pageNumber: formatedData?.meta?.currentPage || 1,
            pageSize: formatedData?.meta?.itemsPerPage || 10,
            total: formatedData?.meta?.totalItems || 10,
            totalPage: formatedData?.meta?.totalPages || 1,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const onSearch = debounce((value: string) => {
    setLoading(true);
    refetch({
      queryParams: {
        ...variables?.queryParams,
        page: 1,
        limit: 10,
        q: value,
      },
    })
      .then(data => {
        const formatedData = formatData(data.data);
        setPageNumber(1);
        setData(formatedData?.items ?? []);
      })
      .finally(() => {
        setLoading(false);
      });
  }, 400);

  return {
    data: data as T[],
    error,
    loading,
    onSearch,
    loadMore,
    setData,
    setPageNumber,
    setPagination,
    refetch,
    hasMore: pagination.pageNumber < pagination.totalPage,
    pageNumber,
  };
};

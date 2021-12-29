import { TypedDocumentNode, DocumentNode, FetchPolicy } from '@apollo/client';
import { convertDataToSelectOptions } from '@base-projects/web-uikit';
import { Select, SelectProps } from 'antd';
import { SelectValue } from 'antd/es/select';
import { uniqBy } from 'lodash';
import {
  FormatDataResponse,
  useInfiniteLoadQuery,
} from '#/shared/hooks/useInfiniteLoadQuery';

export interface InfinitySelectProps<Type, QueryVariables>
  extends SelectProps<SelectValue> {
  initValues?: Type[];
  variables?: QueryVariables;
  fetchPolicy?: FetchPolicy;
}

export interface Props<Query, QueryVariables, Type>
  extends SelectProps<SelectValue> {
  query: DocumentNode | TypedDocumentNode<Query, QueryVariables>;
  formatData: (e: Query) => FormatDataResponse | null | undefined;
  initValues?: Type[];
  convertDataToOptions?: (data: Type[]) => {
    value: string;
    label: unknown;
  }[];
  variables?: QueryVariables;
  fetchPolicy?: FetchPolicy;
}

function InfinitySelect<Query, QueryVariables, Type>({
  query,
  formatData,
  initValues = [],
  convertDataToOptions,
  variables,
  fetchPolicy,
  ...rest
}: Props<Query, QueryVariables, Type>) {
  const { data, loading, loadMore, onSearch } = useInfiniteLoadQuery<
    Query,
    QueryVariables,
    Type
  >({
    query,
    formatData,
    variables,
    fetchPolicy,
  });

  const items = uniqBy([...initValues, ...data], 'id');
  const formattedData = convertDataToOptions
    ? convertDataToOptions(items as Type[])
    : convertDataToSelectOptions(items, 'id', 'name');
  const options = loading
    ? [...formattedData, { value: null, label: 'Loading...' }]
    : formattedData;

  return (
    <Select
      onPopupScroll={loadMore}
      loading={loading}
      options={options}
      optionFilterProp="label"
      showArrow
      onSearch={onSearch}
      {...rest}
    />
  );
}

export default InfinitySelect;

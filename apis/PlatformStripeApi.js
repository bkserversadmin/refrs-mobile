import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import { handleResponse, isOkStatus } from '../utils/handleRestApiResponse';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const createAccountPOST = (Constants, { email_body }, handlers = {}) =>
  fetch(`https://app.staging.refrsports.com/api/stripe/connect/account`, {
    body: JSON.stringify({ email: email_body }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useCreateAccountPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => createAccountPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('account', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('account');
        queryClient.invalidateQueries('accounts');
      },
    }
  );
};

export const FetchCreateAccountPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  email_body,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useCreateAccountPOST(
    { email_body },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchCreateAccount: refetch });
};

export const createCustomerPOST = (
  Constants,
  { desc_customer_body, email_customer_body, name_customer_body },
  handlers = {}
) =>
  fetch(`https://app.staging.refrsports.com/api/stripe/customers`, {
    body: JSON.stringify({
      name: name_customer_body,
      description: desc_customer_body,
      email: email_customer_body,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useCreateCustomerPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      createCustomerPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('customer', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('customer');
        queryClient.invalidateQueries('customers');
      },
    }
  );
};

export const FetchCreateCustomerPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  desc_customer_body,
  email_customer_body,
  name_customer_body,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useCreateCustomerPOST(
    { desc_customer_body, email_customer_body, name_customer_body },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchCreateCustomer: refetch });
};

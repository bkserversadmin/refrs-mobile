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

export const loginPOST = (
  Constants,
  { emailLoginInput, passwordLoginValue },
  handlers = {}
) =>
  fetch(
    `https://qrvcspozklogjrnrrohd.supabase.co/auth/v1/token?grant_type=password`,
    {
      body: JSON.stringify({
        email: emailLoginInput,
        password: passwordLoginValue,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydmNzcG96a2xvZ2pybnJyb2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2MzMyOTIsImV4cCI6MjAxMzIwOTI5Mn0.5NDd9T3h7-178wVR4B6sUQj5x8gttxGyRvnwV0IEezc',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useLoginPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['supabaseStagingLoginPOST', args],
    () => loginPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['supabaseStagingLoginPOSTS']),
    }
  );
};

export const FetchLoginPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  emailLoginInput,
  passwordLoginValue,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useLoginPOST(
    { emailLoginInput, passwordLoginValue },
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
  return children({ loading, data, error, refetchLogin: refetch });
};

export const createAccountPOST = (
  Constants,
  { account_id_boddy, profile_id_boddy, user_id_body },
  handlers = {}
) =>
  fetch(`https://qrvcspozklogjrnrrohd.supabase.co/rest/v1/accounts`, {
    body: JSON.stringify({
      user_id: user_id_body,
      profile_id: profile_id_boddy,
      account_id: account_id_boddy,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['secret_role_key'],
      'Content-Type': 'application/json',
      apikey:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydmNzcG96a2xvZ2pybnJyb2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2MzMyOTIsImV4cCI6MjAxMzIwOTI5Mn0.5NDd9T3h7-178wVR4B6sUQj5x8gttxGyRvnwV0IEezc',
    },
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
  account_id_boddy,
  profile_id_boddy,
  user_id_body,
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
    { account_id_boddy, profile_id_boddy, user_id_body },
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
  { profile_id_body, stripe_cus_body, user_id_body },
  handlers = {}
) =>
  fetch(`https://qrvcspozklogjrnrrohd.supabase.co/rest/v1/customers`, {
    body: JSON.stringify({
      id: user_id_body,
      stripe_customer_id: stripe_cus_body,
      profile_id: profile_id_body,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['secret_role_key'],
      'Content-Type': 'application/json',
      apikey:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydmNzcG96a2xvZ2pybnJyb2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2MzMyOTIsImV4cCI6MjAxMzIwOTI5Mn0.5NDd9T3h7-178wVR4B6sUQj5x8gttxGyRvnwV0IEezc',
    },
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
  profile_id_body,
  stripe_cus_body,
  user_id_body,
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
    { profile_id_body, stripe_cus_body, user_id_body },
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

export const getGamesAssignorGET = (Constants, { profile_id }, handlers = {}) =>
  fetch(
    `https://qrvcspozklogjrnrrohd.supabase.co/rest/v1/games?select=${encodeURIComponent(
      `id,game_id,title,home_team,away_team,sport!inner(*),duration,expectations,contact_email,contact_number,game_id,game_level,event_datetime,published,referees_count,venue!inner(*),organizer:organizer_id(first_name, image,id,last_name),game_referees(*,tag,tags!inner(*,user_tags(*)),referee_id,profiles(first_name,last_name,image,contact_number))`
    )}&assignor_id=${encodeURIComponent(
      `eq.${
        typeof profile_id === 'string'
          ? profile_id
          : JSON.stringify(profile_id ?? '')
      }`
    )}&removed=${encodeURIComponent(`eq.false`)}&order=${encodeURIComponent(
      `event_datetime.asc`
    )}&finished=${encodeURIComponent(`is.NULL`)}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydmNzcG96a2xvZ2pybnJyb2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2MzMyOTIsImV4cCI6MjAxMzIwOTI5Mn0.5NDd9T3h7-178wVR4B6sUQj5x8gttxGyRvnwV0IEezc',
      },
    }
  ).then(res => handleResponse(res, handlers));

export const useGetGamesAssignorGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['games', args],
    () => getGamesAssignorGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchGetGamesAssignorGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  profile_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGetGamesAssignorGET(
    { profile_id },
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
  return children({ loading, data, error, refetchGetGamesAssignor: refetch });
};

export const getProfileIdForSignupGET = (
  Constants,
  { user_id_input },
  handlers = {}
) =>
  fetch(
    `https://qrvcspozklogjrnrrohd.supabase.co/rest/v1/profiles?select=id&user_id=${encodeURIComponent(
      `eq.${
        typeof user_id_input === 'string'
          ? user_id_input
          : JSON.stringify(user_id_input ?? '')
      }`
    )}`,
    {
      headers: {
        Accept: 'application/json',
        Autorization: Constants['secret_role_key'],
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydmNzcG96a2xvZ2pybnJyb2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2MzMyOTIsImV4cCI6MjAxMzIwOTI5Mn0.5NDd9T3h7-178wVR4B6sUQj5x8gttxGyRvnwV0IEezc',
      },
    }
  ).then(res => handleResponse(res, handlers));

export const useGetProfileIdForSignupGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['profile', args],
    () => getProfileIdForSignupGET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['profiles']),
    }
  );
};

export const FetchGetProfileIdForSignupGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  user_id_input,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGetProfileIdForSignupGET(
    { user_id_input },
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
  return children({
    loading,
    data,
    error,
    refetchGetProfileIdForSignup: refetch,
  });
};

export const getProfileSessionGET = (Constants, { user }, handlers = {}) =>
  fetch(
    `https://qrvcspozklogjrnrrohd.supabase.co/rest/v1/profiles?select=${encodeURIComponent(
      `*,roles(id,name)`
    )}&user_id=${encodeURIComponent(
      `eq.${typeof user === 'string' ? user : JSON.stringify(user ?? '')}`
    )}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['supabaseAccessToken'],
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydmNzcG96a2xvZ2pybnJyb2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2MzMyOTIsImV4cCI6MjAxMzIwOTI5Mn0.5NDd9T3h7-178wVR4B6sUQj5x8gttxGyRvnwV0IEezc',
      },
    }
  ).then(res => handleResponse(res, handlers));

export const useGetProfileSessionGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['profile', args],
    () => getProfileSessionGET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['profiles']),
    }
  );
};

export const FetchGetProfileSessionGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  user,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGetProfileSessionGET(
    { user },
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
  return children({ loading, data, error, refetchGetProfileSession: refetch });
};

export const registerPOST = (
  Constants,
  { email_body_variable, password_body_variable },
  handlers = {}
) =>
  fetch(`https://qrvcspozklogjrnrrohd.supabase.co/auth/v1/signup`, {
    body: JSON.stringify({
      email: email_body_variable,
      password: password_body_variable,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      apikey:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydmNzcG96a2xvZ2pybnJyb2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2MzMyOTIsImV4cCI6MjAxMzIwOTI5Mn0.5NDd9T3h7-178wVR4B6sUQj5x8gttxGyRvnwV0IEezc',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useRegisterPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['supabaseStagingRegisterPOST', args],
    () => registerPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['supabaseStagingRegisterPOSTS']),
    }
  );
};

export const FetchRegisterPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  email_body_variable,
  password_body_variable,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useRegisterPOST(
    { email_body_variable, password_body_variable },
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
  return children({ loading, data, error, refetchRegister: refetch });
};

export const rolesGET = (Constants, _args, handlers = {}) =>
  fetch(
    `https://qrvcspozklogjrnrrohd.supabase.co/rest/v1/roles?select=${encodeURIComponent(
      `*`
    )}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydmNzcG96a2xvZ2pybnJyb2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2MzMyOTIsImV4cCI6MjAxMzIwOTI5Mn0.5NDd9T3h7-178wVR4B6sUQj5x8gttxGyRvnwV0IEezc',
      },
    }
  ).then(res => handleResponse(res, handlers));

export const useRolesGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['roles', args], () => rolesGET(Constants, args, handlers), {
    refetchInterval,
  });
};

export const FetchRolesGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useRolesGET({}, { refetchInterval, handlers: { onData, ...handlers } });

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
  return children({ loading, data, error, refetchRoles: refetch });
};

export const updateProfileAfterSignupPATCH = (
  Constants,
  { firstname_body, lastname_body, role_body, user_id },
  handlers = {}
) =>
  fetch(
    `https://qrvcspozklogjrnrrohd.supabase.co/rest/v1/profiles?select=${encodeURIComponent(
      `*`
    )}&user_id=${encodeURIComponent(
      `eq.${
        typeof user_id === 'string' ? user_id : JSON.stringify(user_id ?? '')
      }`
    )}`,
    {
      body: JSON.stringify({
        first_name: firstname_body,
        last_name: lastname_body,
        role_id: role_body,
        birthdate: null,
      }),
      headers: {
        Accept: 'application/json',
        Authorization: Constants['secret_role_key'],
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydmNzcG96a2xvZ2pybnJyb2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2MzMyOTIsImV4cCI6MjAxMzIwOTI5Mn0.5NDd9T3h7-178wVR4B6sUQj5x8gttxGyRvnwV0IEezc',
      },
      method: 'PATCH',
    }
  ).then(res => handleResponse(res, handlers));

export const useUpdateProfileAfterSignupPATCH = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      updateProfileAfterSignupPATCH(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('profile', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('profile');
        queryClient.invalidateQueries('profiles');
      },
    }
  );
};

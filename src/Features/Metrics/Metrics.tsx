import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createClient, Provider, useQuery } from 'urql';
import { actions } from './reducer';

const useStyles = makeStyles({
  metricsContainer: {
    margin: '20px 0px'
  },
  autoCompleteClass: {
    width: '35%',
    float: 'right'
  },
  inputClass: {
    background: '#fff',
  }
});

const client = createClient({
  url: 'https://react.eogresources.com/graphql',
});

const query = `{
  getMetrics
}`;

export default () => {
  return (
    <Provider value={client}>
      <Metrics />
    </Provider>
  );
};

const Metrics = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [result] = useQuery({
    query,
  });
  let selectedMetrics: Array<any> = [];
  const { fetching, data, error } = result;
  useEffect(() => {
    if (error) {
      dispatch(actions.metricsApiErrorReceived({ error: error.message }));
      return;
    }
    if (!data) return;
  }, [dispatch, data, error]);

  const handleChange = (value: any) => {
    selectedMetrics = value;
    dispatch(actions.metricsUpdateSelectedValue({ selectedMetrics }));
  };

  if (fetching) return null;
  return (
    <div className={classes.metricsContainer}>
      <Autocomplete
        multiple
        className={classes.autoCompleteClass}
        id="tags-outlined"
        options={data.getMetrics}
        getOptionLabel={(option:string) => option}
        filterSelectedOptions
        onChange={(event:any,value:any)=>handleChange(value)}
        renderInput={(params:any) => (
          <TextField
            placeholder={selectedMetrics.length ? "" : "Please Select"}
            {...params}
            variant="outlined"
            className={classes.inputClass}
          />
        )}
      />
    </div>
  );
};

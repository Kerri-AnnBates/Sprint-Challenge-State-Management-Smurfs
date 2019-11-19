import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import {fetchSmurfs} from '../actions';
import Card from './Card';
import AddForm from './AddForm';

const SmurfsList = (props) => {
    const { smurfs, isFetching, isadding} = props;

    // Fetch smurfs data on load.
    useEffect(() => {
        props.fetchSmurfs();
    }, [])
    
    return (
        <div className="smurfs-list">
            <AddForm />
            {isFetching && <p className="loading">Getting smurfs...</p> }
            {!isFetching && !isadding && smurfs.map((smurf => (
                <Card key={smurf.id} smurf={smurf} />
            )))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        isadding: state.isAdding
    }
};

export default connect(mapStateToProps, {fetchSmurfs})(SmurfsList);
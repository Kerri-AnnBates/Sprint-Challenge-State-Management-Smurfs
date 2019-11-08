import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import {fetchSmurfs} from '../actions';
import Card from './Card';

const SmurfsList = (props) => {
    const {smurfs} = props;
    // Fetch smurfs data on load.
    useEffect(() => {
        props.fetchSmurfs();
    }, [])

    return (
        <div>
            <h1>hello smurfs</h1>
            {smurfs.map((smurf => (
                <Card key={smurf.id} smurf={smurf} />
            )))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
};

export default connect(mapStateToProps, {fetchSmurfs})(SmurfsList);
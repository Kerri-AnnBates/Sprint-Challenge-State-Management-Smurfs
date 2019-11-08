import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import {fetchSmurfs} from '../actions';

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
                <li>smurf</li>
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
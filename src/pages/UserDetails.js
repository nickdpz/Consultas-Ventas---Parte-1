import React from 'react';
import UserMoves from '../components/UserMoves';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

class UserDetails extends React.Component {
    state = {
        loading: true,
        error: null,
        user: []
    };

    fetchData = async () => {
        this.setState({ loading: true, error: null });
        let dataFilter = [];
        try {
            const data = await api.data.getCustomer(this.props.match.params.userId);
            if (data.length !== 0) {
                dataFilter = data.filter((event) => {
                    return (event.compro)
                })
                this.setState({ loading: false, user: dataFilter });
            } else {
                this.setState({ loading: false, error: 'NO Existe el Usuario' });
            }
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    componentDidMount() {
        this.fetchData();
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }

        return (
            <div className="container my-3">
                <div className="row">
                    <div className="col-4"><h2>
                        {this.state.user[0].nombre}
                    </h2>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-lg-8 offset-lg-2">
                        <UserMoves moves={this.state.user} />
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDetails;

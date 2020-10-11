import React, { Component } from 'react';
import { Header, Image, Table } from 'semantic-ui-react'
import axios from 'axios';

let games = [];
let gameinfo=[];
let id;

class Dashboard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            loading: true
        };
    }

    async componentDidMount() {

        await axios.get('https://cors-anywhere.herokuapp.com/http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=' + process.env.REACT_APP_APIKEY
        + '&steamid=' + this.props.match.params.id + '&format=json', )
        .then(res => {
            if (res) {
                games = res.data.response.games;
                games.sort((a, b) => (a.playtime_forever > b.playtime_forever) ? -1 : 1);
            }
            else {
                this.props.history.push('/private');
                return;
            }
        })
        .catch(err => {
            console.log(err);
        })

        if (games) {
            for (let i=0; i<games.length; i++) {
                id = games[i].appid;
                axios.get('https://cors-anywhere.herokuapp.com/http://store.steampowered.com/api/appdetails?appids=' + id)
                .then(res => {
                    gameinfo.push(res.data[Object.keys(res.data)[0]].data);
                })
                .catch(err => {
                    console.log(err);
                })
            }
            console.log(gameinfo)
            this.setState({ loading: false });
        }
        else {
            this.props.history.push('/private');
        }
    }

    renderRow = () => {
        return this.state.gameinfo.map(function(game){
            return(
                <tr key={game.appid}>
                    <td>
                        1
                    </td>
                    <td>
                        2
                    </td>
                    <td>
                        3
                    </td>
                </tr>
            )
        })
   }

    render() {
        if (this.state.loading) {
            return null;
        }
        const renderRows = gameinfo.map(game => {
            return (
                <tr>
                    <td>
                        1
                    </td>
                    <td>
                        2
                    </td>
                    <td>
                        3
                    </td>
                </tr>
            )
        })
        return (
            <table className="ui celled padded table">
            <thead>
                <tr>
                    <th>
                        Games
                    </th>
                    <th>
                        Hours played
                    </th>
                    <th>
                        Current Price
                    </th>
                </tr>
            </thead>
            <tbody>
                {renderRows}
            </tbody>
          </table>
        );
    }
}

export default Dashboard;
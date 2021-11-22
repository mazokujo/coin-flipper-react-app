import React, { Component } from 'react'
import { choice } from './helper'
import Coin from './Coin'


class Coinflipper extends Component {
    static defaultProps = {
        coins: [
            { side: 'heads', imgUrl: 'https://tinyurl.com/react-coin-heads-jpg' },
            { side: 'tails', imgUrl: 'https://www.nicepng.com/png/detail/520-5203210_2018-australian-wedge-tail-eagle-1oz-silver-coin.png' }
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            nFlips: 0, nHeads: 0, nTails: 0, currCoin: null
        }
        this.handler = this.handler.bind(this)
    }
    flipcoin() {
        const newCoin = choice(this.props.coins)
        this.setState(
            st => {
                return {
                    currCoin: newCoin,
                    nFlips: st.nFlips + 1,
                    nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                    nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
                };
            }


        )
    }

    handler(e) {
        this.flipcoin()
    }
    render() {
        return (
            <div className='Coinflipper'>
                <h1> Use my Coinflipper Demo, to flip a coin!</h1>
                <div>
                    {this.state.currCoin && <Coin info={this.state.currCoin} />}
                </div>
                <button onClick={this.handler}> Flip the coin</button>
                <p> Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails</p>
            </div>
        )
    }
}

export default Coinflipper
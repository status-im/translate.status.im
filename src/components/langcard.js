import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class LangCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            postItem: null
        }
    }
    
    handleRemoveContentButton(event) {
        if (this.props.didHandleRemove) {
            this.props.didHandleRemove(this.props.post)
        }
    }

    setPostStateOnProps() {
        const { post } = this.props
        this.setState({
            postItem: post
        })
    }

    componentDidMount() {
        this.setPostStateOnProps()
    }

    componentDidUpdate(prevProps, prevState, snapshop) {
        if (this.props !== prevProps) {
            this.setPostStateOnProps()
        }
    }

    render(){
        const { postItem } = this.state
        return (
            <div className="card align-center">
                {postItem !== null
                    ? 
                    <div>
                        <img src={require('../images/flags/' + postItem.langFlag)} className="flag" alt={postItem.lang} />
                        <p className="language-title">{postItem.lang}</p>
                        <a href={postItem.app} target="_blank" rel="noopener noreferrer"><p><FormattedMessage id="main.app-application" defaultMessage="App Translation" /></p></a>
                        <a href={postItem.website} target="_blank" rel="noopener noreferrer"><p><FormattedMessage id="main.website-application" defaultMessage="Status.im Website Translation" /></p></a>
                    </div>

                    : ''}

            </div>
        );
    }

}

export default LangCard;
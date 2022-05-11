import React from 'react';
import ReviewButton from './reviewButton'
import ReviewList from './reviewList'

export default class CreateRe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            image: props.image,
            plot: props.plot,
            reviews: props.reviews
        }
        this.setReviews = this.setReviews.bind(this)
    }
    
    setReviews(e) {
        let newReview = e.target.previousElementSibling.previousElementSibling.previousElementSibling.value
        this.setState( state => {
            if ( state.title === e.target.name ) {
                state.reviews.push(newReview)
                return {reviews: state.reviews }
            }
        })

    }

    render() {
        return(
            <div className="row my-5">
                <div className="card mx-auto" style={{ width: "80%" }}>
                    
                    <ReviewList reviews={this.state.reviews} />
                    <ReviewButton onClick={ (e) => this.setReviews(e) } name={this.state.title} />
                </div>
            </div>
        ) 
    }
}
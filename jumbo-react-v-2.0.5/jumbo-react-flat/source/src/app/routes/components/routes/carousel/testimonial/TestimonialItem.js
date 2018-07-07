import React from 'react';

const TestimonialItem = ({testimonial}) => {
    const {content, avatar, name, title} = testimonial;
    return (
        <div className="testimonial text-center">
            <img alt="avatar" className="size-120 rounded mx-auto mb-2 mb-sm-4" src={avatar}/>
            <span className="testimonial__quote"><i className="zmdi zmdi-quote zmdi-hc-2x"/></span>
            <p>
                {content}
            </p>

            <h3 className="text-amber text-daren-2 mb-1">{name}</h3>
            <p className="sub-heading">{title}</p>
        </div>
    )
};

export default TestimonialItem;


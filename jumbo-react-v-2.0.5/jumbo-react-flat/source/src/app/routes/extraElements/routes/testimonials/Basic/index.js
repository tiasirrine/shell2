import React from 'react';

const Basic = ({testimonial}) => {
    const {content, avatar, name, title} = testimonial;
    return (
        <div className="testimonial text-center">
            <span className="testimonial__quote"><i className="zmdi zmdi-quote"/></span>
            <blockquote>
                {content}
            </blockquote>
            <img alt="avatar" className="size-120 rounded mx-auto my-4" src={avatar}/>
            <h5 className="text-amber text-daren-2">{name}</h5>
            <small className="description">{title}</small>
        </div>
    )
};

export default Basic;


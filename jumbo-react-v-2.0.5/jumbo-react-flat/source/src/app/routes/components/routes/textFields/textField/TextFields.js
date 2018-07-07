import React from 'react';

class TextFields extends React.Component {

    render() {

        return (
            <form className="row" noValidate autoComplete="off">
                <div className="col-md-4 col-12 mt-4">
                    <input className="form-control" type="text" placeholder="Name"/>
                </div>
                <div className="col-md-4 col-12">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                               placeholder="name@example.com"/>
                    </div>
                </div>
                <div className="col-md-4 col-12 mt-4">
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First name"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last name"/>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-12 mt-4">
                    <div className="form-group">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                    </div>
                </div>

                <div className="col-md-4 col-12 mt-4">
                    <select className="custom-select mt-3">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-md-4 col-12 mt-4">
                    <div className="form-group">
                        <label htmlFor="disabledTextInput">Disabled input</label>
                        <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input"
                               disabled/>
                    </div>
                </div>

                <div className="col-md-4 col-12 mt-4">
                    <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg"/>
                </div>
                <div className="col-md-4 col-12 mt-4">
                    <input className="form-control" type="text" placeholder="medium input"/>
                </div>
                <div className="col-md-4 col-12 mt-4">
                    <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm"/>
                </div>
                <div className="col-md-4 col-12 mt-4">
                    <input className="form-control" type="text" placeholder="Readonly input here…" readOnly/>
                </div>

                <div className="col-md-4 col-12 mt-4">
                    <select className="form-control">
                        <option>$</option>
                        <option>€</option>
                        <option>฿</option>
                        <option>¥</option>
                    </select>
                </div>

                <div className="col-md-4 col-12">
                    <label htmlFor="inputPassword5">Password</label>
                    <input type="password" id="inputPassword5" className="form-control"
                           aria-describedby="passwordHelpBlock"/>
                    <small id="passwordHelpBlock" className="form-text text-muted">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain
                        spaces, special characters, or emoji.
                    </small>
                </div>
                <div className="col-md-4 col-12 mt-4">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Multiline</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"/>
                    </div>
                </div>
                <div className="col-md-8 col-12 mt-4">
                    <div className="form-group mt-4">
                        <label htmlFor="formControlRange">Range input</label>
                        <input type="range" className="form-control-range" id="formControlRange"/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationServer01">First name</label>
                            <input type="text" className="form-control is-valid" id="validationServer01"
                                   placeholder="First name" defaultValue="Mark" required/>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationServer02">Last name</label>
                            <input type="text" className="form-control is-valid" id="validationServer02"
                                   placeholder="Last name" defaultValue="Otto" required/>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationServerUsername">Username</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrepend3">@</span>
                                </div>
                                <input type="text" className="form-control is-invalid" id="validationServerUsername"
                                       placeholder="Username" aria-describedby="inputGroupPrepend3" required/>
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationServer03">City</label>
                            <input type="text" className="form-control is-invalid" id="validationServer03"
                                   placeholder="City" required/>
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationServer04">State</label>
                            <input type="text" className="form-control is-invalid" id="validationServer04"
                                   placeholder="State" required/>
                            <div className="invalid-feedback">
                                Please provide a valid state.
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationServer05">Zip</label>
                            <input type="text" className="form-control is-invalid" id="validationServer05"
                                   placeholder="Zip" required/>
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}


export default TextFields;
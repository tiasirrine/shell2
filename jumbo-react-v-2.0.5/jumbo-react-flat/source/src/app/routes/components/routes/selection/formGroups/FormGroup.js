import React, {Component} from 'react';

class FormGroups extends Component {
    state = {
        checkedA: true,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
        checkedG: false,
        checkedH: false,
        checkedJ: false,
        checkedK: false,
        checkedL: false,

    };

    handleChange = name => (event) => {
        const checked = event.target.checked;
        this.setState({[name]: checked});
    };

    render() {

        return (
            <div className="row">
                <div className="col-sm-4">
                    <div className="mb-4">
                        <p className="text-grey">Responsibilities</p>
                        <form>
                            <div className="custom-control custom-checkbox my-1 mr-sm-2 mb-3">
                                <input type="checkbox" className="custom-control-input" id="CheckboxA"
                                       checked={this.state.checkedA} onChange={this.handleChange('checkedA')}/>
                                <label className="custom-control-label" htmlFor="CheckboxA">Technical Lead</label>
                            </div>
                            <div className="custom-control custom-checkbox my-1 mr-sm-2 mb-3">
                                <input type="checkbox" className="custom-control-input" id="CheckboxB"
                                       checked={this.state.checkedB} onChange={this.handleChange('checkedB')}/>
                                <label className="custom-control-label" htmlFor="CheckboxB">Project Manager</label>
                            </div>
                            <div className="custom-control custom-checkbox my-1 mr-sm-2 mb-3">
                                <input type="checkbox" className="custom-control-input" id="CheckboxC"
                                       checked={this.state.checkedC} onChange={this.handleChange('checkedC')}/>
                                <label className="custom-control-label" htmlFor="CheckboxC">Web Developer</label>
                            </div>

                        </form>

                    </div>
                    <div>
                        <p className="text-grey">Projects</p>

                        <form>
                            <div className="custom-control custom-checkbox my-1 mr-sm-2 mb-3">
                                <input type="checkbox" className="custom-control-input" id="CheckboxD"
                                       checked={this.state.checkedD} onChange={this.handleChange('checkedD')}/>
                                <label className="custom-control-label" htmlFor="CheckboxD">Mouldifi</label>
                            </div>
                            <div className="custom-control custom-checkbox my-1 mr-sm-2 mb-3">
                                <input type="checkbox" className="custom-control-input" id="CheckboxE"
                                       checked={this.state.checkedE} onChange={this.handleChange('checkedE')}/>
                                <label className="custom-control-label" htmlFor="CheckboxE">Jambo React</label>
                            </div>
                            <div className="custom-control custom-checkbox my-1 mr-sm-2 mb-3">
                                <input type="checkbox" className="custom-control-input" id="CheckboxF"
                                       checked={this.state.checkedF} onChange={this.handleChange('checkedF')}/>
                                <label className="custom-control-label" htmlFor="CheckboxF">Chatbull</label>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-sm-8">
                    <div className="mb-4">
                        <p className="text-grey">Responsibilities</p>

                        <form className="d-flex flex-row">
                            <div className="custom-control custom-checkbox my-1 mr-sm-2 mb-3">
                                <input type="checkbox" className="custom-control-input" id="CheckboxG"
                                       checked={this.state.checkedG} onChange={this.handleChange('checkedG')}/>
                                <label className="custom-control-label" htmlFor="CheckboxG">Technical Lead</label>
                            </div>
                            <div className="custom-control custom-checkbox my-1 mr-sm-2 mb-3">
                                <input type="checkbox" className="custom-control-input" id="CheckboxH"
                                       checked={this.state.checkedH} onChange={this.handleChange('checkedH')}/>
                                <label className="custom-control-label" htmlFor="CheckboxH">Project Manager</label>
                            </div>
                            <div className="custom-control custom-checkbox my-1 mr-sm-2 mb-3">
                                <input type="checkbox" className="custom-control-input" id="CheckboxI"
                                       checked={this.state.checkedI} onChange={this.handleChange('checkedI')}/>
                                <label className="custom-control-label" htmlFor="CheckboxI">Web Developer</label>
                            </div>
                        </form>
                    </div>
                    <div>
                        <p className="text-grey">Projects</p>

                        <form className="d-flex flex-row">
                            <div className="custom-control custom-checkbox my-1 mr-sm-2 mb-3">
                                <input type="checkbox" className="custom-control-input" id="CheckboxJ"
                                       checked={this.state.checkedJ} onChange={this.handleChange('checkedJ')}/>
                                <label className="custom-control-label" htmlFor="CheckboxJ">Mouldifi</label>
                            </div>
                            <div className="custom-control custom-checkbox my-1 mr-sm-2 mb-3">
                                <input type="checkbox" className="custom-control-input" id="CheckboxK"
                                       checked={this.state.checkedK} onChange={this.handleChange('checkedK')}/>
                                <label className="custom-control-label" htmlFor="CheckboxK">Jambo React</label>
                            </div>
                            <div className="custom-control custom-checkbox my-1 mr-sm-2 mb-3">
                                <input type="checkbox" className="custom-control-input" id="CheckboxL"
                                       checked={this.state.checkedL} onChange={this.handleChange('checkedL')}/>
                                <label className="custom-control-label" htmlFor="CheckboxL">Chatbull</label>
                            </div>
                        </form>
                    </div>
                </div>

            </div>


        );
    }
}

export default FormGroups;
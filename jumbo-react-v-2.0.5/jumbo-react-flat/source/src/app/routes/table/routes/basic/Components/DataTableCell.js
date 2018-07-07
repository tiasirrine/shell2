import React from 'react';

const DataTableCell = (props) => {
    return (
        <tr
            role="checkbox"
            tabIndex={-1}
            key={props.data.id}
            selected={true}
        >
            <td>
                <div className="form-control-checkbox d-flex">
                    <div className="form-checkbox">
                        <input type="checkbox" value="checked"/>
                        <span className="check">
                            <i className="zmdi zmdi-check zmdi-hc-lg"/>
                        </span>
                    </div>
                </div>
            </td>

            <td>
                <img className="rounded-circle"
                     alt={props.data.name}
                     src={props.data.image}
                     style={{
                         width: 32,
                         height: 32,
                         textDecoration: 'none',
                     }}/>
            </td>
            <td>{props.data.name}</td>
            <td>{props.data.memberFrom}</td>
            <td>{props.data.lastLogin}</td>
            <td>{props.data.role}</td>
            <td>{props.data.status === 'active' ? <i className="zmdi zmdi-check zmdi-hc-2x text-primary"/> :
                <i className="zmdi zmdi-close zmdi-hc-2x text-red"/>}</td>
        </tr>

    );
};

export default DataTableCell;

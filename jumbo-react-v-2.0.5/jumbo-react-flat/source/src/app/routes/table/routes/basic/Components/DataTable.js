import React, {Component} from 'react';
import {Table} from 'reactstrap';
import DataTableCell from './DataTableCell';

let counter = 0;

function createData(image, name, memberFrom, lastLogin, role, status) {
    counter += 1;
    return {id: counter, image, name, memberFrom, lastLogin, role, status};
}


class DataTable extends Component {
    state = {
        data: [
            createData('http://via.placeholder.com/150x150', 'Frozen yoghurt', 'Member since 2008', 'Last login yesterday', 'Admin', 'active'),
            createData('http://via.placeholder.com/150x150', 'Ice cream sandwich', 'Member since 2007', 'Last login 2 min ago', 'Operator', 'active'),
            createData('http://via.placeholder.com/150x150', 'Eclair', 'Member since 2009', 'Last login 5 days ago', 'Customer', 'active'),
            createData('http://via.placeholder.com/150x150', 'Cupcake', 'Member since 2012', 'Last login 1 month ago', 'Operator', 'closed'),
            createData('http://via.placeholder.com/150x150', 'Gingerbread', 'Member since 2006', 'Last login yesterday', 'Customer', 'active'),
        ],
    };

    render() {
        const {data} = this.state;
        return (
            <div className="table-responsive-material">
                <Table className="table-middle fst-td-br-tp-0">
                    <tbody>
                    {data.map(user => {
                        return (
                            <DataTableCell key={user.id} data={user}/>
                        );
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default DataTable;
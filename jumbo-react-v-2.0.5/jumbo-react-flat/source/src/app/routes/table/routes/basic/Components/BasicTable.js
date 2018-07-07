import React from 'react';
import {Table} from 'reactstrap';

let id = 0;

function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return {id, name, calories, fat, carbs, protein};
}

const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function BasicTable() {

    return (
        <div className="table-responsive-material">
            <Table>
                <thead>
                <tr>
                    <th className="border-top-0">Dessert (100g serving)</th>
                    <th className="border-top-0">Calories</th>
                    <th className="border-top-0">Fat (g)</th>
                    <th className="border-top-0">Carbs (g)</th>
                    <th className="border-top-0">Protein (g)</th>
                </tr>
                </thead>
                <tbody>
                {data.map(n => {
                    return (
                        <tr key={n.id}>
                            <td>{n.name}</td>
                            <td>{n.calories}</td>
                            <td>{n.fat}</td>
                            <td>{n.carbs}</td>
                            <td>{n.protein}</td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </div>
    );
}


export default BasicTable;
import React from "react";
import { Table } from "react-bootstrap";
class Recipes extends React.PureComponent {
    renderPage = () => {
        let listItems = this.props.data.map((value, key) => {
            return (
                <tr key={key}>
                    <td>{value.title}</td>
                </tr>
            );
        });
        return <tbody>{listItems}</tbody>;
    };
    render() {
        return <Table responsive>{this.renderPage()}</Table>;
    }
}

export default Recipes;

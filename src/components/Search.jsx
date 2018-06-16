import React, { Component } from "react";
import { FormControl } from "react-bootstrap";
import throttle from "lodash.throttle";
import styles from "../styles/Search.css.js";
import api from "../api/api.js";
import Recipes from "./Recipes";
class Search extends Component {
    renderRecipes = () => {
        if (this.state && this.state.recipes) {
            return <Recipes data={this.state.recipes} />;
        }
    };

    handleChange = throttle(event => {
        if (event.target.value !== "") {
            api(event.target.value, this.cbSuccess, this.cbError);
        } else {
            this.setState({ recipes: [] });
        }
    }, 1000);
    cbSuccess = data => {
        this.setState({ recipes: data });
    };

    cbError = () => {
        this.setState({ recipes: [] });
    };
    render() {
        return (
            <div style={styles.searchContainer}>
                <FormControl
                    type="text"
                    placeholder="Enter food title"
                    onChange={e => {
						e.persist();
                        this.handleChange(e);
                    }}
                />
                {this.renderRecipes()}
            </div>
        );
    }
}

export default Search;
